const db = require("../config/db");

exports.getPageBySubdomain = async (req, res) => {
  const { subdomain } = req.params;

  try {
    const [rows] = await db.execute(
      "SELECT * FROM landing_pages WHERE subdomain = ? AND is_active = TRUE LIMIT 1",
      [subdomain],
    );

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Landing page not found",
      });
    }

    const page = rows[0];
    const content =
      typeof page.content === "string"
        ? JSON.parse(page.content)
        : page.content;

    res.json({
      success: true,
      subdomain: page.subdomain,
      template_type: page.template_type,
      content,
      seo: {
        title: page.meta_title,
        description: page.meta_description,
        keywords: page.meta_keywords,
      },
    });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
