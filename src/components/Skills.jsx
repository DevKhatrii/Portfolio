import "./Skills.css";

const GROUPS = [
  {
    label: "Languages",
    accent: "cyan",
    items: [
      { name: "Python", icon: "/images/Python.png" },
      { name: "SQL", icon: "/images/sql1.png" },
      { name: "HTML", icon: "/images/HTML.png" },
      { name: "CSS", icon: "/images/CSS.png" },
      { name: "PHP", icon: "/images/PHP.png" },
      { name: "C", icon: "/images/C (1).png" },
      { name: "C++", icon: "/images/C++ (CPlusPlus).png" },
      { name: "Power BI", icon: "/images/PI.png" },
      { name: "Tableau", icon: "/images/t.png" },
      { name: "Snowflake" },
    ],
  },
  {
    label: "Python Libraries",
    accent: "violet",
    items: [
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Matplotlib" },
      { name: "Seaborn" },
      { name: "scikit-learn" },
      { name: "TensorFlow" },
      { name: "Keras" },
      { name: "NLTK" },
      { name: "OpenCV" },
      { name: "NetworkX" },
      { name: "PyPDF2" },
      { name: "PDFMiner" },
      { name: "PDFPlumber" },
      { name: "Tabula" },
      { name: "Textract" },
    ],
  },
  {
    label: "Tools",
    accent: "amber",
    items: [
      { name: "Git", icon: "/images/Git.png" },
      { name: "MySQL (Oracle)", icon: "/images/mysql.png" },
      { name: "Jupyter Notebook", icon: "/images/jn.png" },
      { name: "VS Code", icon: "/images/vscode.png" },
      { name: "PyCharm", icon: "/images/pycharm.png" },
      { name: "Jira", icon: "/images/jeera.png" },
      { name: "Jenkins", icon: "/images/Jenkins.png" },
      { name: "Oracle APEX" },
      { name: "Flask" },
      { name: "Power Automate" },
      { name: "Power Query" },
      { name: "Office Scripts" },
      { name: "Hadoop" },
      { name: "PySpark" },
      { name: "Hugging Face" },
    ],
  },
  {
    label: "AI Tools",
    accent: "cyan",
    items: [
      { name: "Claude" },
      { name: "Claude Code" },
      { name: "Cursor" },
      { name: "GitHub Copilot" },
      { name: "OpenAI Codex" },
      { name: "ChatGPT" },
      { name: "Perplexity" },
    ],
  },
  {
    label: "Soft Skills",
    accent: "violet",
    items: [
      { name: "Leadership" },
      { name: "Event Management" },
      { name: "Team Work" },
      { name: "Time Management" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-head">
        <span className="section-index">05</span>
        <h2 className="section-title">Skills</h2>
        <span className="section-line" />
      </div>

      <div className="skills-groups">
        {GROUPS.map((g) => (
          <div className="skill-group" key={g.label}>
            <h3 className={`skill-group-label mono accent-${g.accent}`}>
              {g.label}
            </h3>
            <div className="chip-cloud">
              {g.items.map((item) => (
                <span className="chip" key={item.name}>
                  {item.icon && <img src={item.icon} alt="" />}
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
