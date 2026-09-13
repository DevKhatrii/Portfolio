import "./Contact.css";

const CHANNELS = [
  { label: "Email", value: "mr.devnk@gmail.com", href: "mailto:mr.devnk@gmail.com" },
  { label: "Phone", value: "+1 (954) 910-7450", href: "tel:+19549107450" },
  { label: "LinkedIn", value: "linkedin.com/in/dev-khatri007", href: "https://www.linkedin.com/in/dev-khatri007/" },
  { label: "Resume", value: "Download PDF", href: "resume.pdf" },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-head">
        <span className="section-index">07</span>
        <h2 className="section-title">Contact</h2>
        <span className="section-line" />
      </div>

      <div className="contact-terminal mono">
        <div className="contact-line">
          <span className="terminal-prompt">$</span>status --open-to
        </div>
        <div className="contact-line contact-answer">
          &gt; Data Analyst / Data Scientist / BI Analyst roles — Florida or remote
        </div>
        <div className="contact-line" style={{ marginTop: 18 }}>
          <span className="terminal-prompt">$</span>connect --channel
        </div>

        <div className="contact-channels">
          {CHANNELS.map((c) => (
            <a href={c.href} target="_blank" rel="noreferrer" className="contact-channel" key={c.label}>
              <span className="contact-channel-label">{c.label}</span>
              <span className="contact-channel-value">{c.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
