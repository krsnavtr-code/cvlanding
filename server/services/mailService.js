const nodemailer = require("nodemailer");
const db = require("../config/db");

const transporter = nodemailer.createTransport({
  host: (process.env.MAIL_HOST || "smtp.hostinger.com").trim(),
  port: parseInt(String(process.env.MAIL_PORT || "465").trim(), 10),
  secure:
    String(process.env.MAIL_PORT || "").trim() === "465" ||
    !process.env.MAIL_PORT ||
    String(process.env.MAIL_ENCRYPTION || "").trim() === "ssl",
  auth: {
    user: (process.env.MAIL_USERNAME || "").trim(),
    pass: process.env.MAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

/**
 * Verify SMTP connection status on server startup
 */
async function verifySmtpConnection() {
  try {
    await transporter.verify();
    console.log(
      `[SMTP READY] Connected to Hostinger SMTP (${(process.env.MAIL_HOST || "smtp.hostinger.com").trim()}:${process.env.MAIL_PORT || 465}) - Ready to send emails.`,
    );
    return true;
  } catch (error) {
    console.error(
      `[SMTP ERROR] Failed to connect to SMTP server: ${error.message}`,
    );
    return false;
  }
}

/**
 * Sends a structured HTML email to the admin whenever a new lead is captured,
 * including the complete list of today's leads with their capture times.
 */
async function sendLeadNotificationToAdmin(leadData) {
  const {
    name,
    email,
    phone,
    state,
    qualification,
    specialisation,
    university,
    program,
    subdomain,
    source,
    adminEmail: customAdminEmail,
  } = leadData;

  const safeSubdomain = subdomain ? String(subdomain).trim() : "collegevihar.com";
  const normalizedSubdomain = safeSubdomain.toLowerCase();

  const adminEmail = (
    customAdminEmail ||
    (normalizedSubdomain === "iimsr" || normalizedSubdomain === "iimsradmissions"
      ? "krishnaavtar955@gmail.com"
      : process.env.ADMIN_EMAIL || "krishnaavtar955@gmail.com")
  ).trim();
  const fromName = (process.env.MAIL_FROM_NAME || "Collegevihar")
    .replace(/['"]/g, "")
    .trim();
  const fromAddress = (process.env.MAIL_FROM_ADDRESS || "noreply@collegevihar.com")
    .replace(/['"]/g, "")
    .trim();

  const safeName = name ? String(name).trim() : "Prospective Student";
  const safeEmail = email ? String(email).trim() : "Not Provided";
  const safePhone = phone ? String(phone).trim() : "Not Provided";
  const safeUniversity = university ? String(university).trim() : "Not Specified";
  const safeProgram = program ? String(program).trim() : "Not Specified";
  const safeSpecialisation = specialisation
    ? String(specialisation).trim()
    : "Not Specified / General";
  const safeQualification = qualification
    ? String(qualification).trim()
    : "Not Specified";
  const safeState = state ? String(state).trim() : "Not Specified";
  const safeSource = source ? String(source).trim() : "Landing Page";

  const cleanDigits = String(safePhone).replace(/[^0-9]/g, "");
  const whatsappPhone =
    cleanDigits.length >= 10 ? cleanDigits.slice(-10) : cleanDigits;

  const submissionDate = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  // Query today's leads in Indian Standard Time (IST)
  let todaysLeads = [];
  const istDateFormatted = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date());

  try {
    const now = new Date();
    const istDateStr = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Kolkata",
    }).format(now);
    const istStartOfDay = new Date(`${istDateStr}T00:00:00+05:30`);

    const [rows] = await db.execute(
      `SELECT id, name, phone, email, program, university, subdomain, created_at 
       FROM leads 
       WHERE created_at >= ? 
       ORDER BY created_at DESC 
       LIMIT 50`,
      [istStartOfDay],
    );
    todaysLeads = rows || [];
  } catch (dbErr) {
    console.warn(
      "[MAIL SERVICE] Could not query today's leads from database:",
      dbErr.message,
    );
  }

  // Ensure the current newly captured lead is present in the list
  const hasCurrentLead = todaysLeads.some(
    (l) =>
      (safePhone !== "Not Provided" && String(l.phone || "").trim() === safePhone) ||
      (l.name === safeName && l.email === safeEmail),
  );

  if (!hasCurrentLead) {
    todaysLeads.unshift({
      id: "current",
      name: safeName,
      phone: safePhone,
      email: safeEmail,
      program: safeProgram,
      university: safeUniversity,
      subdomain: safeSubdomain,
      created_at: new Date(),
      isCurrent: true,
    });
  }

  // Generate Today's Leads HTML rows with time
  const todaysLeadsRowsHtml = todaysLeads
    .map((item, idx) => {
      const isCurrent =
        item.isCurrent ||
        (safePhone !== "Not Provided" && String(item.phone || "").trim() === safePhone) ||
        (item.name === safeName && item.email === safeEmail);

      const itemTime = item.created_at
        ? new Date(item.created_at).toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
        : "Just Now";

      const cleanItemPhone = String(item.phone || "").replace(/[^0-9]/g, "");
      const itemWhatsapp =
        cleanItemPhone.length >= 10
          ? cleanItemPhone.slice(-10)
          : cleanItemPhone;

      return `
        <tr>
          <td style="padding: 10px 12px; border-bottom: ${idx === todaysLeads.length - 1 ? "none" : "1px solid #e2e8f0"
        }; background-color: ${isCurrent ? "#f0fdf4" : "#ffffff"};">
            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%; border-collapse: collapse;">
              <tr>
                <td>
                  <span style="display: inline-block; background-color: ${isCurrent ? "#dcfce7" : "#eff6ff"
        }; color: ${isCurrent ? "#166534" : "#1e40af"
        }; font-size: 11px; font-weight: 700; padding: 2px 7px; border-radius: 4px; margin-right: 5px;">
                    🕒 ${itemTime}
                  </span>
                  <span style="display: inline-block; background-color: #f1f5f9; color: #475569; font-size: 11px; font-weight: 600; padding: 2px 7px; border-radius: 4px;">
                    ${item.subdomain || "Landing Page"}
                  </span>
                  ${isCurrent
          ? '<span style="display: inline-block; background-color: #fef3c7; color: #b45309; font-size: 10px; font-weight: 800; padding: 2px 6px; border-radius: 4px; margin-left: 4px;">🔥 NEW</span>'
          : ""
        }
                </td>
                <td align="right" style="font-size: 11px; font-weight: 700; color: #94a3b8; white-space: nowrap;">
                  #${idx + 1}
                </td>
              </tr>
              <tr>
                <td colspan="2" style="padding-top: 6px; font-size: 14px; font-weight: 700; color: #0f172a; word-break: break-word;">
                  ${item.name || "Student"}
                  <span style="font-size: 12px; font-weight: 600; color: #2563eb;"> • ${item.program || "Online Degree"
        }</span>
                </td>
              </tr>
              <tr>
                <td colspan="2" style="padding-top: 4px; font-size: 12px;">
                  ${item.phone && item.phone !== "Not Provided"
          ? `<a href="tel:${item.phone}" style="color: #0f172a; text-decoration: none; font-weight: 600; margin-right: 10px;">📞 ${item.phone}</a>`
          : ""
        }
                  ${itemWhatsapp
          ? `<a href="https://wa.me/91${itemWhatsapp}" target="_blank" style="color: #16a34a; text-decoration: none; font-weight: 700; margin-right: 10px;">💬 WhatsApp</a>`
          : ""
        }
                  ${item.university
          ? `<span style="color: #64748b; font-size: 11px;">(${item.university})</span>`
          : ""
        }
                </td>
              </tr>
            </table>
          </td>
        </tr>
      `;
    })
    .join("");

  const subject = `🔥 New Lead: ${safeName} | ${safeProgram} (${safeSubdomain})`;

  const htmlContent = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="x-apple-disable-message-reformatting" />
  <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no" />
  <title>${subject}</title>
  <style type="text/css">
    body {
      margin: 0 !important;
      padding: 0 !important;
      -webkit-text-size-adjust: 100% !important;
      -ms-text-size-adjust: 100% !important;
      width: 100% !important;
      min-width: 100% !important;
      background-color: #f1f5f9;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    }
    table {
      border-collapse: collapse !important;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }
    td {
      mso-line-height-rule: exactly;
    }
    a {
      text-decoration: none;
    }
    @media only screen and (max-width: 580px) {
      .email-wrapper {
        padding: 8px 4px !important;
      }
      .email-card {
        width: 100% !important;
        border-radius: 8px !important;
      }
      .header-pad {
        padding: 16px 12px !important;
      }
      .content-pad {
        padding: 14px 10px !important;
      }
      .btn-table {
        width: 100% !important;
      }
      .btn-cell {
        display: block !important;
        width: 100% !important;
        padding: 4px 0 !important;
        box-sizing: border-box !important;
      }
      .btn-link {
        display: block !important;
        width: 100% !important;
        box-sizing: border-box !important;
        text-align: center !important;
        padding: 11px 16px !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; width: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <!-- Preheader preview text for inbox -->
  <div style="display: none; max-height: 0px; overflow: hidden; mso-hide: all; font-size: 1px; line-height: 1px; color: #ffffff; opacity: 0;">
    New admission lead: ${safeName} (${safePhone}) for ${safeProgram} at ${safeUniversity}. Total leads today: ${todaysLeads.length}.
  </div>

  <!-- Full width outer wrapper -->
  <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" class="email-wrapper" style="width: 100%; border-collapse: collapse; margin: 0; padding: 0; background-color: #f1f5f9;">
    <tr>
      <td align="center" style="padding: 16px 8px;">

        <!-- Main Card Container -->
        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" class="email-card" style="width: 100%; max-width: 560px; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06);">

          <!-- Top Accent Bar -->
          <tr>
            <td height="5" style="height: 5px; background-color: #ffc21c; line-height: 5px; font-size: 1px;">&nbsp;</td>
          </tr>

          <!-- Header -->
          <tr>
            <td class="header-pad" style="background-color: #0f2757; padding: 22px 20px; text-align: center;">
              <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: collapse;">
                <tr>
                  <td align="center">
                    <span style="display: inline-block; font-size: 21px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
                      COLLEGE<span style="color: #ffc21c;">VIHAR</span>
                    </span>
                    <div style="margin-top: 6px; font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.8px;">
                      🔥 New Admission Lead Captured
                    </div>
                    <div style="margin-top: 6px; display: inline-block; background-color: rgba(255, 255, 255, 0.12); color: #e2e8f0; font-size: 11px; font-weight: 600; padding: 4px 12px; border-radius: 20px;">
                      Subdomain: ${safeSubdomain}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td class="content-pad" style="padding: 20px;">

              <!-- Hero Highlight Box with Quick Actions -->
              <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f8fafc; border-radius: 10px; border: 1px solid #e2e8f0; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 16px; text-align: center;">
                    <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.6px; margin-bottom: 4px;">
                      Candidate Name
                    </div>
                    <div style="font-size: 20px; font-weight: 800; color: #0f172a; margin-bottom: 4px; word-break: break-word;">
                      ${safeName}
                    </div>
                    <div style="font-size: 13px; font-weight: 600; color: #2563eb; margin-bottom: 14px; word-break: break-word;">
                      🎓 ${safeProgram} • ${safeUniversity}
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Section 1: Academic & Program Details -->
              <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 16px; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;">
                <tr>
                  <td style="background-color: #eff6ff; padding: 10px 14px; font-size: 12px; font-weight: 800; color: #1e40af; text-transform: uppercase; letter-spacing: 0.6px; border-bottom: 1px solid #dbeafe;">
                    🎓 Academic Preference
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #f1f5f9; background-color: #ffffff;">
                    <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 2px;">University</div>
                    <div style="font-size: 14px; font-weight: 600; color: #0f172a; word-break: break-word;">${safeUniversity}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #f1f5f9; background-color: #ffffff;">
                    <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 2px;">Program / Degree</div>
                    <div style="font-size: 14px; font-weight: 600; color: #0f172a; word-break: break-word;">${safeProgram}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #f1f5f9; background-color: #ffffff;">
                    <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 2px;">Specialisation</div>
                    <div style="font-size: 14px; font-weight: 600; color: #0f172a; word-break: break-word;">${safeSpecialisation}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; background-color: #ffffff;">
                    <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 2px;">Highest Qualification</div>
                    <div style="font-size: 14px; font-weight: 600; color: #0f172a; word-break: break-word;">${safeQualification}</div>
                  </td>
                </tr>
              </table>

              <!-- Section 2: Contact Details -->
              <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 16px; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;">
                <tr>
                  <td style="background-color: #f0fdf4; padding: 10px 14px; font-size: 12px; font-weight: 800; color: #166534; text-transform: uppercase; letter-spacing: 0.6px; border-bottom: 1px solid #dcfce7;">
                    📞 Contact Information
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #f1f5f9; background-color: #ffffff;">
                    <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 2px;">Mobile Number</div>
                    <div style="font-size: 14px; font-weight: 600; color: #0f172a; word-break: break-word;">
                      <a href="tel:${safePhone}" style="color: #2563eb; text-decoration: none; font-weight: 700;">${safePhone}</a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #f1f5f9; background-color: #ffffff;">
                    <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 2px;">Email Address</div>
                    <div style="font-size: 14px; font-weight: 600; color: #0f172a; word-break: break-word;">
                      <a href="mailto:${safeEmail}" style="color: #2563eb; text-decoration: none;">${safeEmail}</a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; background-color: #ffffff;">
                    <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 2px;">State / Location</div>
                    <div style="font-size: 14px; font-weight: 600; color: #0f172a; word-break: break-word;">${safeState}</div>
                  </td>
                </tr>
              </table>

              <!-- Section 3: Lead Meta & Source -->
              <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 16px; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;">
                <tr>
                  <td style="background-color: #f8fafc; padding: 10px 14px; font-size: 12px; font-weight: 800; color: #475569; text-transform: uppercase; letter-spacing: 0.6px; border-bottom: 1px solid #e2e8f0;">
                    ℹ️ Lead Source & System Details
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #f1f5f9; background-color: #ffffff;">
                    <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 2px;">Subdomain</div>
                    <div style="font-size: 13px; font-weight: 600; color: #334155; word-break: break-word;">${safeSubdomain}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #f1f5f9; background-color: #ffffff;">
                    <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 2px;">Form Source</div>
                    <div style="font-size: 13px; font-weight: 600; color: #334155; word-break: break-word;">${safeSource}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; background-color: #ffffff;">
                    <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 2px;">Capture Timestamp</div>
                    <div style="font-size: 13px; font-weight: 600; color: #334155; word-break: break-word;">${submissionDate} (IST)</div>
                  </td>
                </tr>
              </table>

              <!-- Section 4: Today's All Leads List Table with Time -->
              <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%; border-collapse: collapse; margin-top: 20px; border-radius: 8px; overflow: hidden; border: 1px solid #cbd5e1; box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);">
                <tr>
                  <td style="background-color: #1e293b; padding: 12px 14px; border-bottom: 1px solid #334155;">
                    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: collapse;">
                      <tr>
                        <td>
                          <span style="font-size: 12px; font-weight: 800; color: #f8fafc; text-transform: uppercase; letter-spacing: 0.6px;">
                            📋 Today's Leads (${todaysLeads.length})
                          </span>
                        </td>
                        <td align="right">
                          <span style="display: inline-block; background-color: #3b82f6; color: #ffffff; font-size: 11px; font-weight: 700; padding: 3px 9px; border-radius: 12px;">
                            ${istDateFormatted}
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 0; background-color: #f8fafc;">
                    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%; border-collapse: collapse;">
                      ${todaysLeadsRowsHtml}
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 14px 20px; text-align: center; font-size: 11px; line-height: 1.5; color: #94a3b8; border-top: 1px solid #e2e8f0;">
              This is an automated notification from the <strong>College Vihar Landing Page Platform</strong>.<br />
              All lead data is encrypted and synced with your database in real-time.
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>
  `;

  try {
    const info = await transporter.sendMail({
      from: `"${fromName}" <${fromAddress}>`,
      to: adminEmail,
      subject: subject,
      html: htmlContent,
    });
    console.log(
      `[EMAIL SENT] Lead notification successfully sent to admin (${adminEmail}) - MessageID: ${info.messageId}`,
    );
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error(
      "[EMAIL ERROR] Failed to send email to admin:",
      error.message,
    );
    return { success: false, error: error.message };
  }
}

module.exports = {
  transporter,
  verifySmtpConnection,
  sendLeadNotificationToAdmin,
};
