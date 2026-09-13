import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Experience.css";

const ROLES = [
  {
    org: "Carnival Cruise Line",
    title: "Electrical Asset Analyst Intern",
    location: "On-Site",
    period: "May 2026 — July 2026",
    points: [
      { label: "Bridge Instrument Report Dashboard", text: "Engineered an automated Power BI/Power Query pipeline consolidating Bridge Instrument Report data across 29 fleet ships." },
      { label: "Vendor Report Auto-Renamer", text: "Developed a Python OCR-based document automation tool to intelligently extract and rename vendor service reports, streamlining marine operations workflows." },
      { label: "Forms Automation Pipeline", text: "Automated crew data collection via a Microsoft Forms–Power Automate–Office Scripts pipeline, improving logging efficiency for marine operations." },
    ],
  },
  {
    org: "Florida Atlantic University",
    title: "Operations Manager",
    location: "On-Site",
    period: "November 2024 — May 2026",
    points: [
      { label: "Leadership", text: "Directed daily operations across the entire student union, ensuring a seamless and efficient experience for students and patrons." },
      { label: "Accountability", text: "Conducted facility inspections to uphold safety and security standards." },
      { label: "Event Coordination", text: "Supervised event programming and marketing initiatives." },
    ],
  },
  {
    org: "Tata Consultancy Services",
    title: "Data Science Intern",
    location: "On-Site",
    period: "January 2024 — May 2024",
    points: [
      { label: "Development", text: "Developed Python scripts to automate the extraction and validation of tabular data from PDF invoices and Excel files using PyPDF2, Tabula." },
      { label: "Implementation", text: "Implemented automated data validation procedures to identify and correct disparities between extracted data sources." },
      { label: "Improvement", text: "Improved overall project efficiency by creating Python automation scripts for data extraction and comparison." },
      { label: "Agile Methods", text: "Leveraged Agile methodologies to streamline project execution, reducing manual efforts and ensuring timely delivery of milestones." },
      { label: "UI", text: "Designed an intuitive interface for efficient data visualization and presentation of results, facilitating better decision-making using Streamlit." },
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="section">
      <div className="section-head">
        <span className="section-index">03</span>
        <h2 className="section-title">Experience</h2>
        <span className="section-line" />
      </div>

      <div className="timeline" ref={ref}>
        <div className="timeline-track">
          <motion.div className="timeline-fill" style={{ height: lineHeight }} />
        </div>

        {ROLES.map((role) => (
          <div className="timeline-item" key={role.org}>
            <span className="timeline-node" />
            <div className="timeline-card">
              <div className="timeline-card-head">
                <h3>{role.title}</h3>
                <span className="timeline-period mono">{role.period}</span>
              </div>
              <p className="timeline-org">
                {role.org} <span className="timeline-location">· {role.location}</span>
              </p>
              <ul className="timeline-points">
                {role.points.map((p) => (
                  <li key={p.label}>
                    <strong>{p.label}:</strong> {p.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
