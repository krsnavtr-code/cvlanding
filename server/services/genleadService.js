const GENLEAD_BASE_URL = process.env.GENLEAD_API_URL || "https://genlead.in";
const GENLEAD_SECRET_KEY = process.env.GENLEAD_SECRET_KEY || "eklabya_contact_secret_key_2026";
const GENLEAD_ORGANIZATION_ID = parseInt(process.env.GENLEAD_ORGANIZATION_ID || "2", 10);

/**
 * Real-time automatic push of College Vihar Landing Page Lead to Genlead CRM (Org ID: 2)
 */
async function pushToGenlead(leadData) {
  try {
    const courseTitle =
      leadData.course ||
      leadData.program ||
      leadData.specialisation ||
      leadData.qualification ||
      (leadData.subdomain ? `Subdomain: ${leadData.subdomain}` : "") ||
      "Online Degree / Course";

    const notes = [
      leadData.university ? `University: ${leadData.university}` : "",
      leadData.specialisation ? `Specialisation: ${leadData.specialisation}` : "",
      leadData.qualification ? `Qualification: ${leadData.qualification}` : "",
      leadData.state ? `State: ${leadData.state}` : "",
      leadData.subdomain ? `Subdomain: ${leadData.subdomain}` : "",
      leadData.message ? `Note: ${leadData.message}` : "",
    ]
      .filter(Boolean)
      .join(" | ");

    const payload = {
      organization_id: GENLEAD_ORGANIZATION_ID,
      agent_id: parseInt(process.env.GENLEAD_AGENT_ID || "1", 10), // Organization ID 2 for College Vihar
      name: leadData.name || "",
      full_name: leadData.name || "",
      email: leadData.email || "",
      phone: leadData.phone || "",
      mobile: leadData.phone || "",
      courses: courseTitle,
      course: courseTitle,
      lead_source: leadData.source || leadData.lead_source || "CollegeVihar Landing Page",
      lead_type: leadData.lead_type || (leadData.is_partial ? "Partial Form Lead" : "Landing Page Lead"),
      utm_source: leadData.utm_source || "",
      utm_campaign: leadData.utm_campaign || leadData.campaign || "",
      utm_medium: leadData.utm_medium || "",
      landing_page: leadData.landing_page || leadData.pageUrl || (leadData.subdomain ? `/${leadData.subdomain}` : ""),
      message: notes,
    };

    console.log(`[GENLEAD SYNC - ORG 2] Pushing ${payload.lead_type} to Genlead...`, {
      name: payload.name,
      phone: payload.phone,
      source: payload.lead_source,
      organization_id: payload.organization_id,
    });

    const primaryUrl = GENLEAD_BASE_URL.includes("/api/") ? GENLEAD_BASE_URL : `${GENLEAD_BASE_URL}/api/push-lead`;
    const fallbackUrl = `${GENLEAD_BASE_URL.replace(/\/api\/.*$/, "")}/api/eklabya-lead`;

    let response = await fetch(primaryUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "x-secret-key": GENLEAD_SECRET_KEY,
      },
      body: JSON.stringify(payload),
    });

    if (response.status === 404) {
      console.log(`[GENLEAD SYNC] Primary endpoint 404, using fallback: ${fallbackUrl}`);
      response = await fetch(fallbackUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "x-secret-key": GENLEAD_SECRET_KEY,
        },
        body: JSON.stringify(payload),
      });
    }

    const data = await response.json().catch(() => ({}));
    if (response.ok) {
      console.log(`[GENLEAD SYNC SUCCESS] Lead synced to Genlead CRM (Org ${GENLEAD_ORGANIZATION_ID}): ID ${data.lead_id}`);
      return { success: true, lead_id: data.lead_id };
    } else {
      console.warn(`[GENLEAD SYNC WARNING] HTTP ${response.status}:`, data);
      return { success: false, error: data };
    }
  } catch (err) {
    console.error("[GENLEAD SYNC ERROR]:", err.message);
    return { success: false, error: err.message };
  }
}

module.exports = { pushToGenlead };

