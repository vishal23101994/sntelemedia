"use client";

import { motion } from "framer-motion";
import {
  Headphones,
  TrendingUp,
  ShieldCheck,
  Globe,
  Cpu,
} from "lucide-react";

/* ================= ANIMATION ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28 space-y-36 bg-[#FFC0CB]/20">

      {/* ================= PAGE HEADER ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className=" text-[#993300] text-5xl font-bold mb-6">
          About S&nbsp;N&nbsp;Telemedia Service
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A professional outsourcing and business support organization helping
          companies scale operations, enhance customer experience, and optimize
          costs through secure, technology-driven solutions.
        </p>
      </motion.div>

      {/* ================= WHO WE ARE ================= */}
      <section>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className=" text-[#993300] text-4xl font-semibold text-center mb-20"
        >
          Who We Are
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl p-12
                       bg-gradient-to-br from-primarySoft/80 to-primarySoft/40
                       shadow-card bg-[#663399]/20 border border-[#4B0082]"
          >
            <p className="leading-relaxed mb-6">
              <span className="text-[#993300] font-semibold text-primary">
                S N Telemedia Service
              </span>{" "}
              delivers reliable, scalable, and secure outsourcing solutions
              across customer support, virtual assistance, and
              technology-enabled services.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              Our delivery model integrates skilled professionals, optimized
              workflows, and modern platforms to ensure measurable outcomes,
              compliance, and long-term value creation.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl p-12
                       bg-gradient-to-br from-primarySoft/70 to-primarySoft/30
                       shadow-card bg-[#663399]/20 border border-[#4B0082]"
          >
            <h3 className="text-[#993300] text-2xl font-semibold mb-4 text-center">
              Why Organizations Choose Us
            </h3>

            <p className="leading-relaxed text-muted-foreground">
              Organizations partner with us for our security-first approach,
              scalable global delivery capabilities, and focus on long-term
              partnerships. We manage mission-critical support functions with
              precision so clients can focus on their core business priorities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CORE STRENGTHS ================= */}
      <section>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className=" text-[#993300] text-4xl font-semibold text-center mb-24"
        >
          Our Core Strengths
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 ">
          {pillars.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-3xl p-8
                         bg-gradient-to-br from-primarySoft/80 to-primarySoft/40
                         shadow-card hover:-translate-y-2 transition-all bg-[#663399]/20 border border-[#4B0082]"
            >
              <div className="h-14 w-14 mb-6 flex items-center justify-center
                              rounded-xl bg-primary/10 text-primary">
                <item.icon size={26} />
              </div>

              <h3 className="text-[#993300] font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[#993300] text-4xl font-semibold text-center mb-24"
        >
          Mission & Vision
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl p-14
                       bg-gradient-to-br from-primarySoft/80 to-primarySoft/40
                       shadow-card bg-[#663399]/20 border border-[#4B0082]"
          >
            <h3 className="text-[#993300] text-2xl font-semibold mb-6 text-center">
              Our Mission
            </h3>

            <p className="leading-relaxed text-muted-foreground">
              To empower organizations through seamless outsourcing by delivering
              dependable, cost-effective, and technology-driven services that
              enhance operational efficiency, elevate customer satisfaction, and
              support sustainable growth.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl p-14
                       bg-gradient-to-br from-primarySoft/80 to-primarySoft/40
                       shadow-card bg-[#663399]/20 border border-[#4B0082]"
          >
            <h3 className=" text-[#993300] text-2xl font-semibold mb-6 text-center">
              Our Vision
            </h3>

            <p className="leading-relaxed text-muted-foreground">
              To become a globally trusted outsourcing partner recognized for
              innovation, service excellence, and reliability — delivering
              consistently superior customer experiences across industries and
              geographies.
            </p>
          </motion.div>
        </div>
      </section>
    </section>
  );
}

/* ================= DATA ================= */

const pillars = [
  {
    icon: Headphones,
    title: "Customer Experience & Support",
    description:
      "High-quality customer interactions designed to strengthen trust, loyalty, and long-term brand value.",
  },
  {
    icon: TrendingUp,
    title: "Efficiency & Cost Optimization",
    description:
      "Optimized workflows and analytics-driven execution that reduce costs while improving performance.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    description:
      "Robust governance frameworks ensuring data security, regulatory compliance, and risk mitigation.",
  },
  {
    icon: Globe,
    title: "Global Reach & Multilingual",
    description:
      "Scalable delivery model supporting multilingual and geographically distributed customer bases.",
  },
  {
    icon: Cpu,
    title: "Technology & Expertise",
    description:
      "Modern platforms combined with skilled professionals delivering real-time insights and innovation.",
  },
];
