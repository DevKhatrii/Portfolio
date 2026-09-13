import "./Education.css";

const SCHOOLS = [
  {
    name: "Florida Atlantic University",
    degree: "M.S. in Data Science and Analytics",
    meta: "GPA 4.0 / 4.0 · completed May 2026",
    logo: "images/FAU.png",
  },
  {
    name: "R.A.I.T, D.Y. Patil University",
    degree: "B.Tech, Computer Engineering — Major in Data Science",
    meta: "GPA 9.03 / 10",
    logo: "images/dyp.jpeg",
  },
  {
    name: "Bunts Sangha's S.M. Shetty High School & Junior College",
    degree: "Junior College",
    meta: "81.69%",
    logo: "images/sm4.png",
  },
  {
    name: "Gopal Sharma International School",
    degree: "Secondary School",
    meta: "90.2%",
    logo: "images/gs1.png",
  },
];

const CERTS = [
  {
    name: "Business Analytics",
    degree: "Harvard Business School Online",
    logo: "images/HBS.png",
  },
  {
    name: "Entrepreneurship Essentials",
    degree: "Harvard Business School Online",
    logo: "images/HBS.png",
  },
  {
    name: "AWS Cloud Virtual Internship",
    degree: "Amazon Web Services · Virtual Internship Completion",
    logo: "images/AWS.png",
  },
  {
    name: "AWS Academy Cloud Foundations",
    degree: "Amazon Web Services",
    logo: "images/AWS.png",
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="section-head">
        <span className="section-index">02</span>
        <h2 className="section-title">Education</h2>
        <span className="section-line" />
      </div>

      <div className="edu-list">
        {SCHOOLS.map((s) => (
          <div className="edu-row" key={s.name}>
            <div className="edu-logo">
              <img src={s.logo} alt="" />
            </div>
            <div className="edu-info">
              <h3>{s.name}</h3>
              <p>{s.degree}</p>
            </div>
            <span className="edu-meta mono">{s.meta}</span>
          </div>
        ))}
      </div>

      <h3 className="cert-heading mono">Certifications</h3>
      <div className="edu-list">
        {CERTS.map((c) => (
          <div className="edu-row" key={c.name}>
            <div className="edu-logo">
              {c.logo ? (
                <img src={c.logo} alt="" />
              ) : (
                <span className="edu-logo-fallback mono">◆</span>
              )}
            </div>
            <div className="edu-info">
              <h3>{c.name}</h3>
              <p>{c.degree}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
