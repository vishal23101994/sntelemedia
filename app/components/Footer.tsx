export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-[#2a0c05] via-[#5a160c] to-[#2a0c05] text-[#f3d6b8] overflow-hidden">

      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#d58b28]/20 blur-3xl opacity-20" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#d58b28]/10 blur-3xl opacity-20" />

      {/* ================= MAIN FOOTER ================= */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-20">

        {/* ================= BRAND ================= */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white p-2">
              <img
                src="/logo.png"
                alt="SN Telemedia Service"
                className="h-20 w-20"
              />
            </div>

            <div className="leading-none">
              <p className="text-lg font-semibold tracking-wide text-[#ffd28a]">
                S N TELEMEDIA SERVICE
              </p>
              <p className="text-sm text-[#ffd28a] mt-1">
                Private Limited
              </p>
            </div>
          </div>

          <p className="text-sm leading-relaxed max-w-sm text-[#f3d6b8]">
            Empowering businesses with comprehensive support solutions.
            From virtual assistance to technical support, we are your
            dedicated partner in growth.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#d58b28]/60 text-[#ffd28a] text-xs tracking-wide">
            ✓ ISO Certified Processes
          </div>
        </div>

        {/* ================= CONTACT ================= */}
        <div>
          <h4 className="text-lg font-semibold text-[#ffd28a] mb-8">
            Contact Information
          </h4>

          <div className="space-y-7 text-sm">

            <div>
              <div className="flex items-center gap-3 text-[#ffd28a] font-semibold tracking-wide mb-3">
                <span className="text-base">📍</span>
                <span>REGISTERED OFFICE</span>
              </div>

              <p className="leading-relaxed text-[#f3d6b8]">
                D-49/B Ground Floor Lalita Marg,<br />
                Shakarpur Extension, East Delhi,<br />
                Delhi, India – 110092
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 text-[#ffd28a] font-semibold tracking-wide mb-3">
                <span className="text-base">✉</span>
                <span>EMAIL US</span>
              </div>

              <p className="text-[#f3d6b8] hover:text-[#ffd28a] transition">
                info@sntelmediaservice.com
              </p>
            </div>

          </div>
        </div>

        {/* ================= COMPANY DETAILS ================= */}
        <div>
          <h4 className="text-lg font-semibold text-[#ffd28a] mb-8">
            Company Details
          </h4>

          <div className="space-y-7 text-sm">

            <div>
              <div className="flex items-center gap-3 text-[#ffd28a] font-semibold tracking-wide mb-3">
                <span>CIN</span>
              </div>

              <p className="text-[#f3d6b8]">
                U64100DL2014PTC268306
              </p>
            </div>

            <ul className="space-y-3 text-[#f3d6b8]">
              <li className="hover:text-[#ffd28a] transition">
                Virtual Assistant Services
              </li>
              <li className="hover:text-[#ffd28a] transition">
                Customer Support Solutions
              </li>
              <li className="hover:text-[#ffd28a] transition">
                Digital Marketing
              </li>
              <li className="hover:text-[#ffd28a] transition">
                Technical Support
              </li>
            </ul>

          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="relative border-t border-[#8a3a1a] py-6 text-center text-sm text-[#f3d6b8]">
        © 2026 S N Telemedia Services Private Limited. All rights reserved.
      </div>
    </footer>
  );
}
