const db = require('../config/db');

exports.captureLead = async (req, res) => {
    const { name, email, phone, state, qualification, subdomain, source } = req.body;

    if (!name || !email || !phone || !subdomain) {
        return res.status(400).json({
            success: false,
            message: 'Name, email, phone and subdomain are required',
        });
    }

    try {
        await db.execute(
            'INSERT INTO leads (name, email, phone, state, qualification, subdomain, source) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [name, email, phone, state || null, qualification || null, subdomain, source || null]
        );

        res.status(201).json({
            success: true,
            message: 'Lead captured successfully',
        });
    } catch (error) {
        console.error('Lead capture error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};
