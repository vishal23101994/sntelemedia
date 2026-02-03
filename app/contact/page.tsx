"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

/* ================= ANIMATIONS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  return (
    <main className="bg-[#fff6eb] overflow-hidden">
      <section className="max-w-7xl mx-auto px-6 py-28 space-y-32">

        {/* ================= PAGE HEADER ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-[#993300] text-5xl md:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground">
            Let’s discuss how we can support your business with reliable,
            scalable, and people-centric solutions.
          </p>
        </motion.div>

        {/* ================= CONTACT SECTION ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-20 items-start"
        >

          {/* ================= LEFT – CONTACT INFO ================= */}
          <div className="space-y-14">
            <div>
              <h2 className="text-[#993300] text-3xl font-semibold mb-4">
                Let’s Start a Conversation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Whether you’re looking to outsource operations, enhance customer
                experience, or build scalable teams — our leadership and experts
                are here to help.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              {/* Email */}
              <div className="
                flex items-start gap-4
                rounded-2xl p-6
                bg-gradient-to-br from-white to-[#fff4e6]
                shadow-card
              ">
                <div className="
                  h-12 w-12 rounded-xl
                  flex items-center justify-center
                  bg-primary/15 text-primary
                ">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-[#993300] text-sm uppercase tracking-wide text-primary mb-1">
                    Email
                  </p>
                  <p className="text-lg font-medium">
                    info@sntelemediaservice.com
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="
                flex items-start gap-4
                rounded-2xl p-6
                bg-gradient-to-br from-white to-[#fff4e6]
                shadow-card
              ">
                <div className="
                  h-12 w-12 rounded-xl
                  flex items-center justify-center
                  bg-primary/15 text-primary
                ">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-[#993300] text-sm uppercase tracking-wide text-primary mb-1">
                    Registered Office
                  </p>
                  <p className="text-lg font-medium leading-relaxed">
                    D-49/B Ground Floor Lalita Marg,<br />
                    Shakarpur Extension, East Delhi,<br />
                    Delhi, India – 110092
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT – CONTACT FORM ================= */}
          <motion.div
            whileHover={{ y: -4 }}
            className="group relative rounded-[32px] p-[1.5px]"
          >
            {/* Gradient Border */}
            <motion.div
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute inset-0 rounded-[32px]
                bg-[linear-gradient(120deg,#f59e0b,#ec4899,#8b5cf6,#22d3ee)]
                bg-[length:300%_300%]
                opacity-70 blur-[1px]
              "
            />

            {/* Form Card */}
            <div className="
              relative rounded-[30px] p-10 lg:p-12
              bg-gradient-to-br from-white via-[#fff7ee] to-[#fff0dc]
              shadow-[0_40px_120px_rgba(0,0,0,0.15)]
            ">
              <h3 className="text-[#993300] text-2xl font-semibold mb-8">
                Send Us a Message
              </h3>

              <form className="grid gap-6">
                {/* Name */}
                <div>
                  <label className="text-[#993300] text-sm font-medium block mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="
                      w-full rounded-xl px-4 py-3
                      bg-white border border-black/10
                      focus:outline-none focus:ring-2 focus:ring-primary/30
                      transition
                    "
                  />
                </div>

                {/* Email */}
                <div>
                  <label className=" text-[#993300] text-sm font-medium block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="
                      w-full rounded-xl px-4 py-3
                      bg-white border border-black/10
                      focus:outline-none focus:ring-2 focus:ring-primary/30
                      transition
                    "
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-[#993300] text-sm font-medium block mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your requirement..."
                    className="
                      w-full rounded-xl px-4 py-3
                      bg-white border border-black/10
                      resize-none
                      focus:outline-none focus:ring-2 focus:ring-primary/30
                      transition
                    "
                  />
                </div>

                <button
                  type="submit"
                  className="
                    mt-6 w-full
                    py-3 rounded-xl font-semibold
                    bg-[#CC3300] text-white
                    transition
                  "
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </motion.div>

        </motion.div>
      </section>
    </main>
  );
}
