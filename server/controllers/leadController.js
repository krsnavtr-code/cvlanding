const db = require("../config/db");

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
    // Try inserting with all enhanced columns
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
