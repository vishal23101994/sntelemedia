'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Leadership", href: "/leadership" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="
      sticky top-0 z-50
      bg-white/80 backdrop-blur-xl
      border-b border-black/5
    ">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">

        {/* ================= LOGO ================= */}
        <Link
          href="/"
          className="flex items-center gap-3 group no-underline"
        >
          <div className="relative">
            <img
              src="/logo.png"
              alt="SN Telemedia Service"
              className="
                h-14 w-14 rounded-full
                border-2 border-[#993300]/70
                transition-transform duration-300
                group-hover:scale-105
              "
            />

            {/* Soft glow */}
            <span
              className="
                absolute inset-0 rounded-full
                bg-[#FFC0CB]/30 blur-md
                opacity-0 group-hover:opacity-100
                transition
              "
            />
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-lg font-extrabold tracking-wide text-slate-900 text-[#993300]">
              SN TELEMEDIA SERVICE
            </span>
            <span className="text-xs text-[#993300] font-semibold mt-1">
              PRIVATE LIMITED
            </span>
          </div>

        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex items-center ml-auto space-x-10 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className="
                  relative no-underline
                  transition-colors duration-300
                "
              >
                <span
                  className={`
                    ${isActive
                      ? "text-slate-900 font-semibold"
                      : "text-slate-600 hover:text-slate-900"
                    }
                  `}
                >
                  {link.name}
                </span>

                {/* Active underline */}
                {isActive && (
                  <motion.span
                    layoutId="active-nav"
                    className="
                      absolute -bottom-2 left-0 right-0 h-[2px]
                      bg-[#FFC0CB] rounded-full
                    "
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden ml-auto
            h-10 w-10 flex items-center justify-center
            rounded-lg border border-black/10
            text-slate-900
          "
          aria-label="Toggle Menu"
        >
          <span className="text-xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white border-t border-black/5"
          >
            <nav className="flex flex-col px-6 py-6 space-y-5 text-sm font-medium">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`
                      no-underline transition
                      ${isActive
                        ? "text-slate-900 font-semibold"
                        : "text-slate-600"
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
