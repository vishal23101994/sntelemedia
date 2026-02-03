'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSnapshot />
      <LeadershipPhilosophy />
      <OurValues />
      <IndustriesWeSupport />
      <OperationalScale />
      <TrustStatement />
    </main>
  );
}



/* ================= HERO ================= */

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-orange-900/70" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl pt-24">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-medium mb-6"
            >
              ● TRUSTED BUSINESS SOLUTIONS PARTNER
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-white text-5xl md:text-6xl font-bold leading-tight"
            >
              Empowering Your <br />
              Business With{" "}
              <span className="text-primary">Excellence</span>
            </motion.h1>

            {/* Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-slate-300 leading-relaxed"
            >
              S N Telemedia Service provides world-class virtual assistance,
              customer support, and revenue cycle management solutions designed
              to streamline operations and accelerate growth.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex gap-6 "
            >
              {/* Primary CTA */}
              <Link
                href="/services"
                className="
                  no-underline
                  relative
                  bg-[#CC3300]
                  text-white
                  px-9 py-3.5
                  rounded-md
                  text-sm
                  font-semibold
                  shadow-[0_10px_35px_rgba(196,90,0,0.45)]
                  ring-1 ring-primary/50
                  transition
                  hover:bg-orange-500
                  hover:shadow-[0_14px_45px_rgba(196,90,0,0.6)]
                "
              >
                Explore Services
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/contact"
                className="
                  no-underline
                  relative
                  px-9 py-3.5
                  rounded-md
                  text-sm
                  font-semibold
                  text-white
                  bg-[#CC3300]
                  border border-white/40
                  backdrop-blur
                  shadow-[0_8px_25px_rgba(0,0,0,0.45)]
                  transition
                  hover:bg-white/25
                  hover:border-white/60
                "
              >
                Contact Us
              </Link>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

import { Briefcase, ShieldCheck, Users, Globe } from "lucide-react";

function AboutSnapshot() {
  return (
    <section className="py-10 bg-[#FFC0CB]/20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <div>
          <h2 className="text-[#993300] text-4xl font-bold mb-6 leading-tight">
            Business Support <br />
            <span className="text-primary">Built for Scale & Trust</span>
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            S N Telemedia Service is a professionally managed outsourcing and
            business support organization focused on long-term value creation,
            operational reliability, and secure delivery.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Our leadership-driven approach combines people, process, and
            technology to support organizations at every stage of growth.
          </p>
        </div>

        {/* RIGHT – STATS CARDS */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { icon: Briefcase, value: "30+", label: "Years Leadership" },
            { icon: Users, value: "1000+", label: "Professionals Led" },
            { icon: Globe, value: "Global", label: "Client Exposure" },
            { icon: ShieldCheck, value: "Secure", label: "Delivery Model" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl p-8 shadow-card
                         hover:-translate-y-1 transition bg-[#663399]/20 border border-[#4B0082]"
            >
              <item.icon className="text-primary mb-4" size={28} />
              <p className="text-3xl font-bold">{item.value}</p>
              <p className="text-sm text-muted-foreground mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import { Crown } from "lucide-react";

function LeadershipPhilosophy() {
  return (
    <section className="py-10 bg-[#FFC0CB]/20">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <div className="mx-auto mb-8 w-14 h-14 flex items-center justify-center
                        rounded-xl bg-primary/10 text-primary">
          <Crown size={28} />
        </div>

        <h2 className="text-[#993300] text-4xl font-bold mb-8">
          Leadership Philosophy
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed">
          Leadership at S N Telemedia Service is driven by accountability,
          long-term thinking, and ethical responsibility. We believe strong
          organizations are built through consistency, people empowerment,
          and disciplined execution — not shortcuts.
        </p>

      </div>
    </section>
  );
}

import { HeartHandshake, Award, Users2, Shield } from "lucide-react";

function OurValues() {
  return (
    <section className="py-10 bg-[#FFC0CB]/20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className=" text-[#993300] text-4xl font-bold text-center mb-20">
          What We Stand For
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              icon: Shield,
              title: "Integrity",
              desc: "Ethical conduct, transparency, and responsibility in every engagement.",
            },
            {
              icon: Award,
              title: "Excellence",
              desc: "Relentless focus on quality, precision, and continuous improvement.",
            },
            {
              icon: Users2,
              title: "People First",
              desc: "Empowering teams to perform at their best with trust and respect.",
            },
            {
              icon: HeartHandshake,
              title: "Reliability",
              desc: "Consistent delivery and long-term partnership mindset.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl p-10 bg-gradient-to-br
                         from-primarySoft to-white bg-[#663399]/20 border border-[#4B0082]
                         shadow-card hover:-translate-y-2 transition"
            >
              <item.icon size={30} className="text-primary mb-6" />
              <h3 className="font-semibold text-lg mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import {
  Landmark,
  HeartPulse,
  PhoneCall,
  Cpu,
  ShoppingBag,
  Truck,
  Layers,
} from "lucide-react";

function IndustriesWeSupport() {
  const industries = [
    { title: "Banking & Financial Services", icon: Landmark },
    { title: "Healthcare & Revenue Cycle", icon: HeartPulse },
    { title: "Telecom & Utilities", icon: PhoneCall },
    { title: "Technology & SaaS", icon: Cpu },
    { title: "E-commerce & Retail", icon: ShoppingBag },
    { title: "Professional Services", icon: Briefcase },
    { title: "Logistics & Operations", icon: Truck },
    { title: "Enterprise Back Office", icon: Layers },
  ];

  return (
    <section className="py-10 bg-[#FFC0CB]/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=" text-[#993300] text-4xl font-bold text-center mb-6"
        >
          Industries We Support
        </motion.h2>

        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-20">
          Our operating model is adaptable across industries where reliability,
          compliance, and operational excellence are mission-critical.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {industries.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="
                rounded-2xl p-8
                shadow-card
                hover:shadow-xl
                transition
                bg-[#663399]/20 border border-[#4B0082]
              "
            >
              <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl
                              bg-primary/10 text-primary">
                <item.icon size={22} />
              </div>

              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OperationalScale() {
  return (
    <section className="py-10 bg-[#FFC0CB]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className=" text-[#993300] text-4xl font-bold mb-20">
          Operational Strength
        </h2>

        <div className="grid md:grid-cols-4 gap-14">
          {[
            { value: "30+", label: "Years Leadership Experience" },
            { value: "1000+", label: "Professionals Managed" },
            { value: "24×7", label: "Operational Capability" },
            { value: "Secure", label: "Compliance-Driven Delivery" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-6xl font-bold text-primary mb-3">
                {item.value}
              </p>
              <p className="text-sm text-muted-foreground tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import { Handshake } from "lucide-react";

function TrustStatement() {
  return (
    <section className="py-10 bg-[#FFC0CB]/20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=" text-[#993300] text-3xl md:text-4xl font-bold text-center mb-6"
        >
          Built on Trust {" "}
          <span className="text-primary">Driven by Responsibility </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center text-lg text-muted-foreground leading-relaxed mb-20 "
        >
          Long-term partnerships are built through consistency, accountability,
          and ownership. Every engagement is managed with care, precision, and
          a commitment to excellence.
        </motion.p>

        {/* Trust Cards */}
        <div className="grid md:grid-cols-3 gap-10 ">
          {[
            {
              icon: ShieldCheck,
              title: "Governance & Compliance",
              desc: "Security-first processes with strong governance frameworks and regulatory alignment.",
            },
            {
              icon: Handshake,
              title: "Partnership Mindset",
              desc: "We work as an extension of your organization, aligned with your goals and outcomes.",
            },
            {
              icon: Award,
              title: "Proven Leadership",
              desc: "Decades of experience delivering reliable, scalable, and ethical operations.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="
                rounded-3xl p-10
                bg-gradient-to-br from-primarySoft to-white
                shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                hover:-translate-y-2
                transition bg-[#663399]/20 border border-[#4B0082]
              "
            >
              <div className="mb-6 w-14 h-14 rounded-xl flex items-center justify-center
                              bg-primary/15 text-primary">
                <item.icon size={26} />
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
