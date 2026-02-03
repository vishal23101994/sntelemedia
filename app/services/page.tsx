'use client';

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import {
  UserCheck,
  Headphones,
  ClipboardList,
  TrendingUp,
  Wrench,
  KanbanSquare,
  BriefcaseBusiness,
} from "lucide-react";

/* ================= ANIMATIONS ================= */

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/* ================= PAGE ================= */

export default function ServicesPage() {
  return (
    <main className="bg-[#fff6eb] overflow-hidden">

      {/* ================= TITLE ================= */}
      <section className="py-28 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#993300] text-5xl md:text-6xl font-bold text-heading"
        >
          Our Professional Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-6 max-w-3xl mx-auto text-lg text-body"
        >
          Comprehensive outsourcing solutions designed to enhance efficiency,
          improve customer experience, and support sustainable business growth.
        </motion.p>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="pb-32 px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid gap-y-16 gap-x-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{
                rotateX: 2,
                rotateY: -2,
                zIndex: 20,
              }}
              className="
                group relative rounded-[28px] p-[1.5px]
                transform-gpu
                will-change-transform
              "
            >
              {/* ===== Animated Gradient Border ===== */}
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
                  absolute inset-0 rounded-[28px]
                  bg-[linear-gradient(120deg,#f59e0b,#ec4899,#8b5cf6,#22d3ee)]
                  bg-[length:300%_300%]
                  opacity-60 blur-[1px]
                  group-hover:opacity-100
                  transition-opacity duration-500
                "
              />

              {/* ===== Card Body ===== */}
              <motion.div
                whileHover={{ y: -2 }}
                className="
                  relative h-full rounded-[26px] p-8
                  bg-gradient-to-br from-white via-[#fff7ee] to-[#fff0dc]
                  backdrop-blur-xl
                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                  group-hover:shadow-[0_40px_120px_rgba(0,0,0,0.18)]
                  transition-all duration-500
                "
              >
                {/* ===== Icon ===== */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.1 }}
                  className="
                    flex items-center justify-center
                    h-16 w-16 rounded-2xl
                    bg-gradient-to-br from-primary/20 to-primary/5
                    text-primary mb-6
                    shadow-inner
                  "
                >
                  <s.icon size={28} />
                </motion.div>

                {/* ===== Image ===== */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="
                    relative w-full mb-6
                    h-[190px]
                    rounded-2xl
                    overflow-hidden
                    bg-gradient-to-br from-[#fff1dc] to-[#ffe4c7]
                    flex items-center justify-center
                  "
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="
                      object-contain
                      transition-transform duration-500
                    "
                    priority={i < 3}
                  />
                </motion.div>

                {/* ===== Content ===== */}
                <h3 className="text-[#993300] text-xl font-semibold text-heading mb-3">
                  {s.title}
                </h3>

                <p className="text-sm text-body text-justify leading-relaxed mb-6">
                  {s.description}
                </p>

                {/* ===== Divider ===== */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-5" />

                {/* ===== Bullet Points ===== */}
                <ul className=" text-[#993300] grid gap-y-3 text-sm text-body">
                  {s.points.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 text-primary"
                      />
                      <span className="font-medium">
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}

/* ================= DATA ================= */

const services = [
  {
    title: "Virtual Assistance Services",
    icon: UserCheck,
    image: "/services/virtual-assistant.png",
    description:
      "Our Virtual Assistant services are designed to be a seamless extension of your team. We provide highly trained professionals who can manage complex calendars, handle executive correspondence, organize digital files, and coordinate travel logistics. Whether you need ad-hoc assistance or dedicated daily support, our VAs ensure your administrative foundation is solid.",
    points: [
      "Executive Calendar Management",
      "Email & Correspondence Handling",
      "Travel & Itinerary Planning",
      "Digital File Organization",
      "Meeting Coordination",
    ],
  },
  {
    title: "Customer Support Services",
    icon: Headphones,
    image: "/services/customer-support.png",
    description:
      "Elevate your customer satisfaction with our comprehensive support solutions. We offer round-the-clock coverage across multiple channels including phone, email, and live chat. Our agents are trained in conflict resolution, product knowledge, and brand voice consistency to ensure every interaction strengthens your customer relationships.",
    points: [
      "24/7 Live Chat & Phone Support",
      "Helpdesk & Ticket Management",
      "Customer Inquiry Resolution",
      "Order Processing & Tracking",
      "Feedback Collection",
    ],
  },
  {
    title: "Administrative Support",
    icon: ClipboardList,
    image: "/services/admin-support.png",
    description:
      "Behind every successful company is efficient administration. Our Administrative Support services cover the essential back-office tasks that keep your organization functioning. We handle high-volume data entry with precision, manage complex document workflows, and maintain accurate databases, ensuring your operational backbone is strong and reliable.",
    points: [
      "High-Volume Data Entry",
      "Document Formatting & Editing",
      "Database Management",
      "Meeting Minutes & Transcription",
      "Report Generation",
    ],
  },
  {
    title: "Sales Support Services",
    icon: TrendingUp,
    image: "/services/sales-support.png",
    description:
      "Empower your sales team to focus on closing by offloading the groundwork to us. Our Sales Support services include targeted lead generation, qualification, and initial outreach. We also maintain strict CRM hygiene, ensuring your sales data is accurate and actionable. We act as the engine room for your revenue growth.",
    points: [
      "B2B Lead Generation",
      "CRM Data Entry & Cleaning",
      "Cold Calling & Appointment Setting",
      "Proposal Preparation",
      "Post-Sale Follow-up",
    ],
  },
  {
    title: "Technical Support",
    icon: Wrench,
    image: "/services/technical-support.png",
    description:
      "In a digital-first world, technical hiccups can paralyze business. Our Technical Support services provide a safety net for your IT infrastructure. From troubleshooting software glitches to guiding users through new applications, our technicians offer patient, knowledgeable assistance to keep your technology—and your team—working efficiently.",
    points: [
      "Level 1 & 2 Helpdesk Support",
      "Software Troubleshooting",
      "User Onboarding & Training",
      "System Monitoring",
      "Network Connectivity Support",
    ],
  },
  {
    title: "Project Management",
    icon: KanbanSquare,
    image: "/services/project-management.png",
    description:
      "Turn strategy into execution with our Project Management services. Our coordinators utilize proven methodologies to plan, execute, and close projects effectively. We track milestones, manage resource allocation, and facilitate clear communication between stakeholders, ensuring your initiatives stay on track and deliver the intended value.",
    points: [
      "Project Planning & Scheduling",
      "Resource Allocation",
      "Progress Monitoring & Reporting",
      "Risk Assessment",
      "Stakeholder Communication",
    ],
  },
  {
    title: "Business Consulting",
    icon: BriefcaseBusiness,
    image: "/services/business-consulting.png",
    description:
      "Gain an outside perspective on your business challenges with our Business Consulting services. We analyze your current operational workflows, identify bottlenecks, and recommend scalable solutions. Whether you're looking to enter new markets or optimize internal processes, our consultants provide the roadmap for sustainable growth.",
    points: [
      "Operational Process Analysis",
      "Workflow Optimization",
      "Strategic Growth Planning",
      "Performance Metrics Setup",
      "Change Management",
    ],
  },
];
