"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function LeadershipPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28 space-y-36">
      {/* ================= PAGE HEADER ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto mb-32"
      >
        <h1 className=" text-[#993300] text-5xl font-bold mb-6">
          Leadership
        </h1>
        <p className="text-lg text-muted-foreground">
          Visionary leadership driving growth, innovation, and excellence across
          every dimension of our organization.
        </p>
      </motion.div>

      {/* ================= FOUNDER & CEO ================= */}
      <section className="bg-primarySoft">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-12 lg:p-16
                       bg-gradient-to-br from-primarySoft/90 to-primarySoft/50
                       shadow-card bg-[#663399]/20 border border-[#4B0082]"
          >
            <div className="grid lg:grid-cols-[220px_1fr] gap-10 items-start">
              {/* Image */}
              <div className="w-[200px] h-[260px] rounded-2xl overflow-hidden">
                <img
                  src="/leadership/seema-jain.png"
                  alt="Seema Jain - Founder & CEO"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <h1 className="text-[#993300] text-3xl lg:text-4xl font-bold mb-2">
                  Seema Jain
                </h1>

                <p className="text-[#993300] text-sm font-medium text-primary mb-6">
                  Founder & Chief Executive Officer
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  With over three decades of leadership experience, Seema Jain has been
                  the driving force behind the organization’s growth, resilience, and
                  values. Her leadership style blends strategic clarity, operational
                  discipline, and people-first thinking.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  She has successfully built sustainable businesses, nurtured
                  high-performing teams, and led organizations through complex
                  transformation journeys—guided by integrity, vision, and a relentless
                  focus on excellence.
                </p>

                {/* Stats */}
                <div className="text-[#993300] flex gap-12">
                  <div>
                    <p className="text-3xl font-semibold">30+</p>
                    <p className="text-sm text-muted-foreground">
                      Years of Leadership
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-semibold">1000+</p>
                    <p className="text-sm text-muted-foreground">
                      Professionals Led
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-semibold">Global</p>
                    <p className="text-sm text-muted-foreground">
                      Business Exposure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ================= CORPORATE LEADERSHIP ================= */}
      <section className="bg-primarySoft">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[#993300] text-4xl text-center font-bold mb-16"
          >
            Corporate Leadership
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-10">
            {[
              {
                name: "Suresh Thakur",
                role: "Chief Operating Officer",
                img: "/leadership/suresh-thakur.png",
                bio:
                  "With more than two decades of operational leadership, Suresh Thakur specializes in process optimization, delivery excellence, and business scalability. He ensures seamless execution across functions and consistent operational performance.",
              },
              {
                name: "Ashok Kumar",
                role: "Head – Training & Quality",
                img: "/leadership/ashok-kumar.png",
                bio:
                  "Ashok Kumar brings over two decades of expertise in training, quality assurance, and capability building. He is committed to enhancing workforce skills while maintaining high standards of quality and compliance.",
              },
              {
                name: "Gaurav Jain",
                role: "Head – Human Resource",
                img: "/leadership/gaurav-jain.png",
                bio:
                  "Gaurav Jain has over a decade of experience in human resource management, talent development, and organizational planning. He is instrumental in building strong people practices aligned with business goals.",
              },
              {
                name: "Rajender Panda",
                role: "Business Strategy",
                img: "/leadership/rajender-panda.png",
                bio:
                  "Rajender Panda has more than two decades of experience in business strategy, growth planning, and market development. He plays a key role in shaping long-term strategic direction and driving business expansion.",
              },
              {
                name: "Vishal",
                role: "IT & Development",
                img: "/leadership/vishal.jpeg",
                bio:
                  "Vishal brings over a decade of experience in IT solutions and application development, delivering robust and scalable technology platforms. He focuses on innovation, system reliability, and aligning technology with business needs.",
              },
            ].map((leader, i) => (
              <motion.div
                key={leader.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl p-8 
                           bg-gradient-to-br from-primarySoft/80 to-primarySoft/40
                           shadow-card hover:shadow-xl transition bg-[#663399]/20 border border-[#4B0082]"
              >
                <div className="flex gap-6 items-center">
                  <div className="flex gap-6 items-start">
                    {/* Image */}
                    <div className="shrink-0">
                      <div className="w-30 h-40 rounded-xl overflow-hidden bg-slate-200">
                        <img
                          src={leader.img}
                          alt={leader.name}
                          className="w-full h-full object-cover"
                          style={{ objectPosition: "50% 15%" }}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-[#993300] text-xl font-semibold mb-1">
                        {leader.name}
                      </h3>

                      <p className="text-[#993300] text-sm font-medium text-primary mb-3">
                        {leader.role}
                      </p>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {leader.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= OUR TEAM ================= */}
      <div>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[#993300] text-3xl text-center font-bold mb-4"
        >
          Our Team
        </motion.h2>

        <p className="italic text-center text-muted-foreground mb-12">
          “Our People, Our Strength”
        </p>

        <div className="grid lg:grid-cols-3 gap-10">
          {[
            {
              name: "Anirudh",
              role: "BFSI Operations",
              img: "/leadership/anirudh.jpeg",
              bio:
                "Manages BFSI operations with a focus on process efficiency, compliance, and service delivery excellence.",
            },
            {
              name: "Gautam",
              role: "Sales & Revenue",
              img: "/leadership/gautam.jpeg",
              bio:
                "Drives revenue growth through strategic sales planning, client acquisition, and relationship management.",
            },
            {
              name: "Sangeeta Kumari",
              role: "Client Relations",
              img: "/leadership/sangeeta.jpeg",
              bio:
                "Ensures strong client engagement, service quality, and long-term relationship management.",
            },
          ].map((member, i) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-8 
                         bg-gradient-to-br from-primarySoft/80 to-primarySoft/40
                         shadow-card transition bg-[#663399]/20 border border-[#4B0082]"
            >
              <div className="flex gap-5 items-start">
                <div className="w-80 h-35 rounded-xl overflow-hidden bg-slate-200">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "50% 50%" }}
                  />

                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* ================= TEAM MOMENTS ================= */}
        <section className="py-50 grid lg:grid-cols-2 gap-10">
          {[1, 2].map((i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative h-[320px] rounded-3xl overflow-hidden shadow-card"
            >
              <img
                src={`/leadership/team/team-${i}.jpeg`}
                alt="Team Moment"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </section>
      </div>

      {/* ================= INFRASTRUCTURE ================= */}
      <div>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[#993300] text-3xl text-center font-bold mb-12"
        >
          Our Infrastructure
        </motion.h2>

        <div className="grid lg:grid-cols-1 gap-16 items-center">
          <div className="grid grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative h-[300px] rounded-2xl overflow-hidden 
                           shadow-card ring-1 ring-black/5 bg-white"
              >
                <img
                  src={`/leadership/infra/${i}.jpg`}
                  alt="Office Infrastructure"
                  className="w-full h-full object-cover"
                />

              </motion.div>
            ))}
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Our organization operates from a modern, well-equipped workspace
            designed to support productivity, collaboration, and scalability.
            Ergonomic seating, secure network infrastructure, and high-performance
            systems ensure a comfortable and technology-driven work environment.
          </p>
        </div>
      </div>
    </section>
  );
}
