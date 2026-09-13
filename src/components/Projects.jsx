import "./Projects.css";

const PROJECTS = [
  {
    title: "Global Terrorism Analysis",
    desc: "Used predictive modeling with Power BI and Tableau to analyze terrorism trends, spot patterns in incidents, and forecast potential future attacks.",
    back: "Applied data analytics and predictive modeling with Power BI and Tableau to analyze terrorism trends and forecast potential future attacks. Identified patterns in incidents to support security planning, and contributed data-driven recommendations to help mitigate risk and improve response strategies.",
    tags: ["Power BI", "Tableau", "Predictive Modeling"],
  },
  {
    title: "Driver Drowsiness Detection",
    desc: "Real-time system that flags a drowsy driver from webcam video and triggers a voice alarm using eye-aspect-ratio tracking.",
    back: "Used OpenCV and dlib to detect a driver's face and track eye landmarks in real time, computing the Eye Aspect Ratio with NumPy and SciPy's Euclidean distance to catch drowsiness, then triggered a pyttsx3 voice alarm to wake the driver up.",
    tags: ["OpenCV", "dlib", "pyttsx3", "NumPy", "SciPy"],
  },
  {
    title: "Amazon Warehouse Robot",
    desc: "A grid-world warehouse navigation simulation comparing Q-Learning, DQN, and Actor-Critic for autonomous robot pathing.",
    back: "Designed a grid-world environment simulating warehouse navigation for autonomous robots, then applied Q-Learning, Deep Q-Network (DQN), and Actor-Critic algorithms so robots could learn optimal paths while avoiding obstacles. Visualized learning progress with step-to-go curves and Q-tables to show how the navigation strategy improved over time.",
    tags: ["Q-Learning", "DQN", "Actor-Critic"],
  },
  {
    title: "Spotify Artist Network Analysis",
    desc: "Graph analysis of artist collaboration networks to surface clusters and influential connectors in the data.",
    back: "Used PySpark and NetworkX to map collaboration networks between Spotify artists, surfacing tightly-knit genre clusters and the handful of artists who act as bridges between them.",
    tags: ["PySpark", "NetworkX"],
  },
  {
    title: "Sentiment Analysis: TextBlob vs VADER",
    desc: "Compared two sentiment-scoring approaches across 2,000 pre-processed text samples to see where they agree and diverge.",
    back: "Ran both TextBlob and VADER sentiment scoring across 2,000 pre-processed text samples to compare how each model reads tone, and where lexicon-based scoring disagrees with rule-based scoring.",
    tags: ["TextBlob", "VADER", "NLP"],
  },
  {
    title: "Handwritten Digit Recognition",
    desc: "A neural network trained on MNIST to classify handwritten digits, using ReLU and softmax activations.",
    back: "Built a neural network trained on MNIST using ReLU and softmax activation functions to classify handwritten digits, with one-hot encoding to convert labels into a format the model could learn from.",
    tags: ["TensorFlow", "MNIST"],
  },
  {
    title: "Credit Card Customer Segmentation",
    desc: "K-Means clustering to segment credit card customers into behavioral groups for targeted strategy.",
    back: "Used K-Means clustering on customer spending data with Pandas, NumPy, Seaborn, and Matplotlib to segment credit card holders into distinct behavioral groups for targeted strategy.",
    tags: ["scikit-learn", "K-Means", "Pandas"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-head">
        <span className="section-index">04</span>
        <h2 className="section-title">Projects</h2>
        <span className="section-line" />
      </div>

      <div className="project-grid">
        {PROJECTS.map((p) => (
          <div className="flip-card" key={p.title} tabIndex={0}>
            <div className="flip-inner">
              <div className="flip-face flip-front">
                <div className="project-card-inner">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span className="tag mono" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="flip-hint mono">hover to read more</span>
                </div>
              </div>
              <div className="flip-face flip-back">
                <div className="project-card-inner">
                  <h3>{p.title}</h3>
                  <p>{p.back}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
