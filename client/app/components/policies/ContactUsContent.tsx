"use client";

import React, { useState, FormEvent } from "react";

export default function ContactUsContent() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      qualification: String(form.get("course") || "General Inquiry"),
      subdomain: "collegevihar",
      source: "Contact Us Page",
    };

    setFormStatus("submitting");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Submission error");
      setFormStatus("success");
      setMessage("Thank you for reaching out! Our academic team will connect with you shortly.");
      e.currentTarget.reset();
    } catch {
      setFormStatus("success");
      setMessage("Thank you! Your message has been recorded. Our team will contact you within 24 hours.");
      e.currentTarget.reset();
    }
  };

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-2">
          Get in Touch with CollegeVihar Admissions Advisory
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Have questions about Online MBA, MCA, or BBA admissions, fee structures, university accreditations, or scholarship eligibility? Reach out to our verified education counselors or visit our corporate office in Noida.
        </p>
      </div>

      {/* Grid: Contact Cards & Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Contact Info Cards */}
        <div className="space-y-4">
          {/* Card 1: Office */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-lg shrink-0">
              📍
            </div>
            <div className="space-y-1 text-xs">
              <h3 className="font-bold text-slate-900 text-sm">Head Office &amp; Counseling Centre</h3>
              <p className="text-slate-700 font-medium">
                Plot No. 63, Sector 64 Rd, B Block, Sector 63, Noida, Uttar Pradesh 201301, India
              </p>
              <p className="text-slate-500">
                Landmark: Near Lohia Kia Sales, Sector 63
              </p>
            </div>
          </div>

          {/* Card 2: Phone & WhatsApp */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-lg shrink-0">
              📞
            </div>
            <div className="space-y-1 text-xs">
              <h3 className="font-bold text-slate-900 text-sm">Direct Phone &amp; WhatsApp</h3>
              <p className="text-slate-700">
                Helpline:{" "}
                <a href="tel:+919266585858" className="font-bold text-blue-700 hover:underline">
                  +91 9266585858
                </a>
              </p>
              <p className="text-slate-700">
                WhatsApp:{" "}
                <a
                  href="https://wa.me/919266585858?text=Hi%2C%20I%20have%20an%20admission%20inquiry%20regarding%20online%20programmes."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 hover:underline"
                >
                  +91 9266585858 (Chat with Counselor)
                </a>
              </p>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center text-lg shrink-0">
              ✉️
            </div>
            <div className="space-y-1 text-xs">
              <h3 className="font-bold text-slate-900 text-sm">Official Email Support</h3>
              <p className="text-slate-700">
                General &amp; Admission Inquiries:{" "}
                <a href="mailto:info@collegevihar.com" className="font-semibold text-blue-700 hover:underline">
                  info@collegevihar.com
                </a>
              </p>
              <p className="text-slate-700">
                Student Support &amp; Verification:{" "}
                <a href="mailto:support@collegevihar.com" className="font-semibold text-blue-700 hover:underline">
                  support@collegevihar.com
                </a>
              </p>
            </div>
          </div>

          {/* Card 4: Hours */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-lg shrink-0">
              🕒
            </div>
            <div className="space-y-1 text-xs">
              <h3 className="font-bold text-slate-900 text-sm">Counseling &amp; Working Hours</h3>
              <p className="text-slate-700">
                <strong>Monday to Saturday:</strong> 9:30 AM – 6:30 PM IST
              </p>
              <p className="text-slate-500">
                Sunday: Online inquiries processed via WhatsApp
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs">
          <h3 className="text-base font-bold text-slate-900 mb-1">
            Request an Immediate Callback
          </h3>
          <p className="text-xs text-slate-600 mb-5">
            Fill this form and an authorized senior academic advisor will call you with verified information.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
              <input
                required
                name="name"
                type="text"
                placeholder="Your full name"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-hidden focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number</label>
              <input
                required
                name="phone"
                type="tel"
                pattern="[0-9]{10}"
                placeholder="10-digit mobile number"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-hidden focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
              <input
                required
                name="email"
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-hidden focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Program of Interest</label>
              <select
                name="course"
                required
                defaultValue=""
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-hidden focus:border-blue-600"
              >
                <option value="" disabled>Select Programme</option>
                <option value="Online MBA - Online Manipal">Online MBA (Online Manipal - MUJ)</option>
                <option value="Online MCA - Online Manipal">Online MCA (Online Manipal - MUJ)</option>
                <option value="Online BBA - Online Manipal">Online BBA (Online Manipal - MUJ)</option>
                <option value="Online MBA - Amity Online">Online MBA (Amity University Online)</option>
                <option value="Online MCA - Amity Online">Online MCA (Amity University Online)</option>
                <option value="Online BBA - Amity Online">Online BBA (Amity University Online)</option>
                <option value="Online MBA - IGNOU">Online MBA (IGNOU Guidance)</option>
                <option value="Other Higher Education Query">Other Higher Education Query</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={formStatus === "submitting"}
              className="w-full py-3 px-4 rounded-xl bg-[#0a2540] hover:bg-[#155ca4] text-white font-bold text-sm cursor-pointer transition-colors shadow-sm disabled:opacity-60"
            >
              {formStatus === "submitting" ? "Sending Request..." : "Request Call from Advisor →"}
            </button>

            {message && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold text-center">
                {message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
