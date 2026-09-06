const db = require('../config/db');

const content = {
    programName: 'Online MBA 2026',
    universityName: 'Manipal University Online',
    badge: 'ADMISSIONS OPEN FOR UPCOMING SESSION',
    heroTitle:
        'Manipal Online MBA 2026 – Fees, Eligibility, Specialisations & Admission Guide',
    heroSubtitle:
        'Explore Manipal Online MBA fees, eligibility, specialisations, curriculum, learning format and admission guidance. Get help from a College Vihar counsellor.',
    heroFacts: [
        '2-Year MBA Program',
        '100% Online Learning',
        '4 Semesters',
        'Industry-Aligned Curriculum',
        'Career Support*',
        'Flexible Learning Format',
    ],
    navLinks: [
        { label: 'Overview', href: '#overview' },
        { label: 'Specialisations', href: '#specialisations' },
        { label: 'Fees', href: '#fees' },
        { label: 'Curriculum', href: '#curriculum' },
        { label: 'FAQ', href: '#faq' },
    ],
    feeAmount: 'Rs. 2,50,000*',
    feeDescription:
        'Listed program fee. Current official information also shows semester-wise, annual and no-cost EMI options, subject to applicable terms.',
    ctaTitle: 'Ready to Explore Manipal Online MBA?',
    ctaText:
        'Get guidance on eligibility, fees, specialisations and the admission process.',
    footerDisclaimer:
        "College Vihar is an independent education counselling and admission guidance platform. This page is created for informational and counselling purposes and is not the official website of Manipal University. Program eligibility, fees, admissions, enrollment and other academic decisions are determined by the university. College Vihar does not guarantee admission, employment, salary or placement outcomes.",
};

const metaTitle = 'Manipal Online MBA 2026 – Fees, Eligibility, Specialisations & Admission Guide | College Vihar';
const metaDescription =
    'Explore Manipal Online MBA 2026 fees, eligibility, specialisations, curriculum and admission guidance. Get free counselling from College Vihar.';

module.exports = async function () {
    await db.execute(
        `INSERT INTO landing_pages (subdomain, template_type, content, meta_title, meta_description)
         VALUES (?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE
           template_type = VALUES(template_type),
           content = VALUES(content),
           meta_title = VALUES(meta_title),
           meta_description = VALUES(meta_description)`,
        ['onlinemanipalmba', 'program-landing', JSON.stringify(content), metaTitle, metaDescription]
    );
    console.log('Inserted/updated onlinemanipalmba landing page');
};
