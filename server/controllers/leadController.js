const db = require("../config/db");
const { sendLeadNotificationToAdmin } = require("../services/mailService");

exports.captureLead = async (req, res) => {
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
  } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: "Name, email, and phone number are required",
    });
  }

  const cleanSubdomain = (subdomain || "amityonlinemba").toLowerCase().trim();

  try {
    // 1. Insert lead record into database
    try {
      await db.execute(
        `INSERT INTO leads (name, email, phone, state, qualification, specialisation, university, program, subdomain, source) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          name.trim(),
          email.trim(),
          phone.trim(),
          state ? state.trim() : null,
          qualification ? qualification.trim() : null,
          specialisation ? specialisation.trim() : null,
          university ? university.trim() : null,
          program ? program.trim() : null,
          cleanSubdomain,
          source ? source.trim() : "landing-page",
        ],
      );
    } catch (colErr) {
      console.warn("Fallback to standard lead insert:", colErr.message);
      await db.execute(
        `INSERT INTO leads (name, email, phone, state, qualification, subdomain, source) 
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          name.trim(),
          email.trim(),
          phone.trim(),
          state ? state.trim() : null,
          qualification ? qualification.trim() : null,
          cleanSubdomain,
          source ? source.trim() : "landing-page",
        ],
      );
    }

    console.log(
      `[LEAD CAPTURED] ${name} | ${email} | ${phone} | Subdomain: ${cleanSubdomain} | Source: ${source}`,
    );

    // 2. Dispatch email notification to admin asynchronously
    sendLeadNotificationToAdmin({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      state: state ? state.trim() : null,
      qualification: qualification ? qualification.trim() : null,
      specialisation: specialisation ? specialisation.trim() : null,
      university: university ? university.trim() : null,
      program: program ? program.trim() : null,
      subdomain: cleanSubdomain,
      source: source ? source.trim() : "landing-page",
    }).catch((mailErr) => {
      console.error("[MAIL ASYNC ERROR]:", mailErr.message);
    });

    return res.status(201).json({
      success: true,
      message: "Lead captured successfully and saved in database",
    });
  } catch (error) {
    console.error("Lead capture database error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error while saving lead",
      error: error.message,
    });
  }
};

exports.getLeads = async (req, res) => {
  const { subdomain } = req.query;

  try {
    let query = "SELECT * FROM leads ORDER BY created_at DESC LIMIT 100";
    let params = [];

    if (subdomain) {
      query =
        "SELECT * FROM leads WHERE subdomain = ? ORDER BY created_at DESC LIMIT 100";
      params = [subdomain.toLowerCase().trim()];
    }

    const [rows] = await db.execute(query, params);
    return res.json({
      success: true,
      count: rows.length,
      leads: rows,
    });
  } catch (error) {
    console.error("Fetch leads error:", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching leads",
    });
  }
};
