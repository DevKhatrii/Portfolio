import "./About.css";

const STATS = [
  { value: "4.0", label: "GPA, MS Data Science, FAU" },
  { value: "9.03", label: "GPA, B.Tech Computer Engineering" },
  { value: "6", label: "intern projects shipped" },
  { value: "2", label: "Harvard Business School certificates" },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-head">
        <span className="section-index">01</span>
        <h2 className="section-title">About</h2>
        <span className="section-line" />
      </div>

      <div className="about-top">
        <div className="about-photo">
          <img src="/images/Ny.jpg" alt="Dev Khatri" />
        </div>

        <div className="about-copy">
          <p>
            I'm a data scientist with a Master's in Data Science and
            Analytics from Florida Atlantic University, where I graduated
            with a 4.0 GPA across coursework in machine learning, deep
            learning, reinforcement learning, big data analytics, and
            database systems. Before that, a B.Tech in Computer Engineering
            with a minor in Data Science, GPA 9.03 out of 10. I like
            problems with a lot of moving parts — datasets that need
            cleaning before they mean anything, and dashboards that people
            actually open every morning instead of screenshotting once and
            forgetting forever.
          </p>
          <p>
            I've picked up hands-on experience across a few different
            worlds — automating data pipelines and dashboards in the cruise
            industry, building PDF-extraction and validation tools during a
            data science internship, and sharpening my Python, SQL, Power
            BI, and Tableau skills along the way. Turns out data problems
            look remarkably similar whether you're staring at fleet
            operations data or a stack of invoice PDFs: something is always
            mislabeled, and someone is always one broken formula away from
            a very bad day.
          </p>
          <p>
            Working as Operations Manager for FAU's Davie Student Union
            also honed skills that don't show up in a Jupyter notebook —
            leadership, event coordination, and staying level-headed when
            three things break at once. I hold certificates from Harvard
            Business School in Business Analytics and Entrepreneurship
            Essentials, alongside AWS certifications, and I'm currently
            looking for full-time Data Analyst, Data Scientist, and Data
            Engineer roles — ideally somewhere that appreciates a
            well-labeled axis.
          </p>
        </div>
      </div>

      <div className="about-stats">
        {STATS.map((s) => (
          <div className="stat" key={s.label}>
            <span className="stat-value mono">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
