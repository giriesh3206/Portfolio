import "./App.css";

const projects = [
  {
    number: "01",
    category: "AI · RAG · KNOWLEDGE UX",
    title: "Maritime Knowledge Assistant",
    description:
      "A document intelligence assistant that helps people ask natural-language questions over maritime PDFs. The experience combines semantic retrieval with locally hosted generation.",
    contribution:
      "Built the document-ingestion and retrieval workflow, connecting chunking, embeddings, ChromaDB, and an Ollama language model.",
    stack: ["Python", "LangChain", "ChromaDB", "Ollama", "Sentence Transformers"],
    link: "https://github.com/giriesh3206/Maritime-Chatbot",
    visual: "visual-chat",
    label: "Ask documents, not folders",
  },
  {
    number: "02",
    category: "DATA VISUALIZATION · ML",
    title: "Telangana PDS Analytics",
    description:
      "An analytics pipeline that profiles Fair Price Shops using transaction patterns, clustering, and anomaly detection, turning complex operational data into interpretable signals.",
    contribution:
      "Developed feature engineering and a pipeline using RobustScaler, PCA, K-Means, DBSCAN, and Isolation Forest, with an interactive dashboard.",
    stack: ["Python", "Pandas", "Scikit-learn", "PCA", "Streamlit"],
    link: "https://github.com/giriesh3206/PDS-PROJECT",
    visual: "visual-data",
    label: "Find the signal in the data",
  },
  {
    number: "03",
    category: "PREDICTIVE AI · SERVICE DESIGN",
    title: "Healthcare Operations Platform",
    description:
      "A decision-support workflow for appointment no-show risk and demand forecasting, bringing model outputs into a practical operations dashboard.",
    contribution:
      "Connected prediction APIs, data persistence, and dashboard views to help users interpret risk and plan clinic capacity.",
    stack: ["FastAPI", "Scikit-learn", "XGBoost", "SQLite", "Streamlit"],
    link: "https://github.com/giriesh3206/HealthCare",
    visual: "visual-health",
    label: "Make predictions actionable",
  },
];

function ProjectVisual({ type, label }) {
  if (type === "visual-chat") {
    return (
      <div className="mockup chat-mockup" aria-label="Illustrative chatbot interface">
        <div className="mock-top"><span /><span /><span /><b>MARITIME / ASSIST</b></div>
        <div className="mock-body">
          <div className="mock-eyebrow">KNOWLEDGE BASE · CONNECTED</div>
          <div className="mock-question">Where can I find the right answer?</div>
          <div className="bubble user-bubble">Summarise the key points in this document.</div>
          <div className="bubble answer-bubble"><i /> Relevant passages found <small>3 source sections retrieved</small></div>
          <div className="mock-input">Ask your documents anything <span>↗</span></div>
        </div>
      </div>
    );
  }
  if (type === "visual-data") {
    return (
      <div className="mockup data-mockup" aria-label="Illustrative analytics dashboard">
        <div className="mock-top"><span /><span /><span /><b>FIELD NOTES / ANALYTICS</b></div>
        <div className="data-title">Shop performance <small>MONTHLY OVERVIEW</small></div>
        <div className="metric-row"><div><small>CLUSTERS</small><strong>04</strong></div><div><small>FEATURES</small><strong>06+</strong></div><div><small>MODEL</small><strong>ML</strong></div></div>
        <div className="chart-bars">{[38, 62, 48, 82, 55, 94, 66, 76, 45, 88, 58, 72].map((h, i) => <span key={i} style={{ height: h + "%" }} />)}</div>
        <div className="chart-legend"><span /> utilization <span /> anomalies <span /> clusters</div>
      </div>
    );
  }
  return (
    <div className="mockup health-mockup" aria-label="Illustrative healthcare operations interface">
      <div className="mock-top"><span /><span /><span /><b>CARE / OPERATIONS</b></div>
      <div className="health-heading">Today's overview <small>PLANNING WORKSPACE</small></div>
      <div className="health-card"><div className="pulse-line">↗</div><div><small>ATTENDANCE RISK</small><strong>Risk insights</strong></div><span className="mini-tag">PREDICT</span></div>
      <div className="health-card"><div className="pulse-line second">⌁</div><div><small>CLINIC CAPACITY</small><strong>Demand forecast</strong></div><span className="mini-tag">PLAN</span></div>
      <div className="health-footer">DATA → MODEL → DECISION</div>
    </div>
  );
}

function App() {
  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#home"><span className="brand-mark">g.</span><span>Giriesh Krishna <small>AI × DESIGN</small></span></a>
        <div className="nav-links"><a href="#work">Selected work</a><a href="#approach">Approach</a><a className="nav-cta" href="https://github.com/giriesh3206" target="_blank" rel="noreferrer">GitHub ↗</a></div>
      </nav>

      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> PORTFOLIO / 2026 <span className="eyebrow-rule" /> AI GENERALIST · DESIGN</div>
          <h1>Making complex<br />technology feel <em>human.</em></h1>
          <p className="hero-lede">I build AI-powered experiences that connect useful intelligence with clear, thoughtful interfaces. My work spans LLM applications, data products, and the systems behind them.</p>
          <div className="hero-actions"><a className="button button-dark" href="#work">Explore selected work <span>↓</span></a><a className="text-link" href="https://www.linkedin.com/in/giriesh-krishna-483283216/" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a></div>
          <div className="hero-meta"><span>CHENNAI, INDIA</span><span>COMPUTER SCIENCE · SRM IST</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract electric mobility and AI visual">
          <div className="art-label label-top">HUMAN-CENTRED SYSTEMS <span>01 / 03</span></div>
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="art-core"><div className="core-ring"><span>AI</span></div><div className="core-caption">INTELLIGENCE<br />IN MOTION</div></div>
          <div className="art-node node-one">01 <small>PERCEIVE</small></div><div className="art-node node-two">02 <small>INTERPRET</small></div><div className="art-node node-three">03 <small>IMPROVE</small></div>
          <div className="art-label label-bottom"><span>RESEARCH</span><span>DESIGN</span><span>BUILD ↗</span></div>
        </div>
      </section>

      <section className="intro-strip">
        <div className="wrap strip-inner"><span className="strip-index">01 / THE THROUGH-LINE</span><p>Good AI is more than a model. It is the <strong>experience around the answer</strong>: what people understand, what they can trust, and what they can do next.</p><span className="strip-star">✳</span></div>
      </section>

      <section className="work-section wrap" id="work">
        <div className="section-heading"><div><div className="eyebrow">02 / SELECTED WORK</div><h2>Systems with a<br /><em>human point of view.</em></h2></div><p>Three projects exploring how AI can organise knowledge, surface patterns, and support better decisions.</p></div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-visual"><ProjectVisual type={project.visual} label={project.label} /><span className="visual-caption">{project.label}</span></div>
              <div className="project-info">
                <div className="project-kicker"><span>{project.number} /</span> {project.category}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="contribution"><span>MY APPROACH</span><p>{project.contribution}</p></div>
                <div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">View project on GitHub <span>↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mobility-section">
        <div className="wrap mobility-inner">
          <div className="eyebrow light-eyebrow">03 / A DESIGN EXPLORATION</div>
          <div className="mobility-grid">
            <div><h2>What if your<br />EV understood<br /><em>your journey?</em></h2><p>A concept exploration for an electric-mobility companion: turning range, charging, and ride information into calm, useful decisions.</p><span className="concept-note">CONCEPT STUDY · NOT A SHIPPED PRODUCT</span></div>
            <div className="ev-concept">
              <div className="ev-orbit ev-orbit-a" /><div className="ev-orbit ev-orbit-b" />
              <div className="scooter">
                <div className="scooter-mirror" /><div className="scooter-handle" /><div className="scooter-front" /><div className="scooter-body"><div className="scooter-seat" /><div className="scooter-panel"><span>e</span></div><div className="scooter-light" /></div><div className="scooter-floor" /><div className="wheel wheel-front" /><div className="wheel wheel-back" />
              </div>
              <div className="ev-note ev-note-top">01 / RANGE AWARE</div><div className="ev-note ev-note-bottom">02 / ROUTE READY</div>
            </div>
          </div>
          <div className="concept-principles"><div><span>01</span><strong>Reduce uncertainty</strong><p>Show range and charging context at a glance.</p></div><div><span>02</span><strong>Guide, don't overwhelm</strong><p>Make the next useful action easy to spot.</p></div><div><span>03</span><strong>Design for trust</strong><p>Explain recommendations, not just outcomes.</p></div></div>
        </div>
      </section>

      <section className="approach-section wrap" id="approach">
        <div className="eyebrow">04 / HOW I WORK</div><h2>Curiosity in. Clarity out.</h2>
        <div className="approach-grid"><div><span>01 / UNDERSTAND</span><h3>Start with the person.</h3><p>Frame the real problem, the user’s context, and the decision the experience needs to support.</p></div><div><span>02 / EXPERIMENT</span><h3>Make the system legible.</h3><p>Prototype the flow, test assumptions, and connect model behaviour to meaningful feedback.</p></div><div><span>03 / DELIVER</span><h3>Build for real use.</h3><p>Bring together the interface, data flow, and implementation details so the experience holds up beyond a mockup.</p></div></div>
      </section>

      <section className="footer-cta"><div className="wrap footer-inner"><div className="eyebrow light-eyebrow">LET'S MAKE SOMETHING USEFUL</div><h2>Build the future<br />with <em>intention.</em></h2><p>AI, design, and the space where they make life a little simpler.</p><div className="footer-actions"><a className="button button-lime" href="https://github.com/giriesh3206" target="_blank" rel="noreferrer">Explore my GitHub ↗</a><a className="footer-link" href="https://www.linkedin.com/in/giriesh-krishna-483283216/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div><div className="footer-bottom"><span>GIRIESH KRISHNA L.</span><span>AI × DESIGN × SYSTEMS</span><span>© 2026</span></div></div></section>
    </main>
  );
}

export default App;
