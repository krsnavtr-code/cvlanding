"use client";

import Link from "next/link";
import Image from "next/image";

const WA_NUMBER = "919027239150";
const DISPLAY_PHONE = "90272 39150";

interface IimsrThankYouProps {
  subdomain?: string;
}

export default function IimsrThankYou({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  subdomain = "iimsr",
}: IimsrThankYouProps) {
  return (
    <div className="min-h-screen bg-[#f6f8fc] text-[#17233d] font-sans flex flex-col justify-between selection:bg-[#ffbd25] selection:text-[#071b4b]">
      {/* Top Header */}
      <header className="bg-[#071b4b] text-white shadow-md">
        <div className="w-[min(1160px,92%)] mx-auto h-[66px] sm:h-[76px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-[50px] h-[50px] sm:w-[58px] sm:h-[58px] relative flex-shrink-0">
              <Image
                src="/images/iimsr-logo.png"
                alt="IIMSR official emblem"
                width={58}
                height={58}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <span>
              <strong className="block font-serif text-[22px] sm:text-[25px] text-white leading-none tracking-tight">
                IIMSR
              </strong>
              <small className="text-[9px] sm:text-[10px] font-bold text-gray-200 block mt-1 leading-tight">
                Imperial Institute of Management Science & Research
              </small>
            </span>
          </Link>
          <Link
            href="/"
            className="text-xs sm:text-sm font-bold text-white/90 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Thank You Card */}
      <main className="w-[min(880px,92%)] mx-auto py-10 sm:py-16 my-auto">
        <div className="bg-white rounded-[24px] border border-[#e8eaf0] shadow-[0_20px_50px_rgba(7,27,75,0.08)] p-6 sm:p-10 md:p-12 text-center relative overflow-hidden">
          {/* Top Decorative accent */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#ffc52c] to-[#f28a00]"></div>

          {/* Success Checkmark */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-4xl sm:text-5xl font-black mb-6 border border-emerald-200 shadow-sm">
            ✓
          </div>

          <span className="inline-block px-3.5 py-1 bg-[#fff1d7] text-[#8b4a00] text-xs font-black rounded-full border border-[#ffd78c] uppercase tracking-wider mb-3">
            Enquiry Received • Free Counselling
          </span>

          <h1 className="font-serif text-2xl sm:text-4xl font-black text-[#071b4b] tracking-tight mb-3">
            Thank You for Your Enquiry!
          </h1>

          <p className="text-sm sm:text-base text-[#647087] max-w-xl mx-auto leading-relaxed mb-8">
            Your admission enquiry for{" "}
            <strong className="text-[#071b4b]">IIMSR Programmes</strong> has
            been received. Our expert academic counsellor will connect with you
            shortly on WhatsApp and call.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%20have%20submitted%20an%20admission%20enquiry%20for%20IIMSR.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm text-white bg-[#16a34a] shadow-sm hover:brightness-105 active:scale-98 transition-all"
            >
              Chat on WhatsApp Directly →
            </a>
            <a
              href={`tel:+91${WA_NUMBER}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm text-[#071b4b] bg-[#f6f8fc] border border-[#d9deea] hover:bg-gray-100 transition-all"
            >
              Call Us: {DISPLAY_PHONE}
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#061638] text-[#dce4f4] py-6 text-[13px] text-center border-t border-white/5">
        <div className="w-[min(1160px,92%)] mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <div>
            © {new Date().getFullYear()} IIMSR – Imperial Institute of
            Management Science & Research
          </div>
          <div>All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

