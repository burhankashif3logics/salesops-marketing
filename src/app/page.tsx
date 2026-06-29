const intake = ["Upwork", "Fiverr", "LinkedIn", "Cold email", "Inbound"];

const stages = [
  { name: "Intake", signal: "5 active channels", status: "Normalized" },
  { name: "Qualification", signal: "Owner, value, probability", status: "Verified" },
  { name: "Follow-up", signal: "Tasks, meetings, notes", status: "Scheduled" },
  { name: "Pipeline", signal: "Stage, risk, close timing", status: "Measured" },
  { name: "Revenue", signal: "Won value and source ROI", status: "Reported" },
];

const evidence = [
  ["Lead source ROI", "Channel spend and qualified pipeline stay visible together."],
  ["At-risk deals", "Expected close dates, idle activity, and next tasks surface risk early."],
  ["Rep cadence", "Tasks and meetings are attached to the records managers review."],
  ["Proposal system", "Upwork opportunities, templates, and case studies stay connected."],
];

const ledger = [
  { source: "Upwork", company: "Northstar Labs", stage: "Proposal", next: "Today", value: "$12.4k" },
  { source: "LinkedIn", company: "Atlas Supply", stage: "Qualified", next: "Tue", value: "$8.8k" },
  { source: "Inbound", company: "Cobalt Studio", stage: "Discovery", next: "Thu", value: "$18.0k" },
  { source: "Cold email", company: "Signal Ridge", stage: "Follow-up", next: "Fri", value: "$6.2k" },
];

function PipelineDiagram() {
  return (
    <svg className="pipeline-diagram" viewBox="0 0 720 300" role="img" aria-labelledby="diagram-title">
      <title id="diagram-title">SalesOps channel pipeline diagram</title>
      <defs>
        <marker id="arrow" markerHeight="8" markerWidth="8" orient="auto" refX="6" refY="4">
          <path d="M0,0 L8,4 L0,8 Z" fill="currentColor" />
        </marker>
      </defs>
      <g className="diagram-routes" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M88 64 C190 64 204 150 312 150" markerEnd="url(#arrow)" />
        <path d="M88 118 C184 118 214 150 312 150" markerEnd="url(#arrow)" />
        <path d="M88 178 C184 178 214 150 312 150" markerEnd="url(#arrow)" />
        <path d="M88 236 C190 236 204 150 312 150" markerEnd="url(#arrow)" />
        <path d="M408 150 C488 150 510 92 612 92" markerEnd="url(#arrow)" />
        <path d="M408 150 C488 150 510 208 612 208" markerEnd="url(#arrow)" />
      </g>
      <g className="diagram-node">
        <rect x="24" y="44" width="92" height="40" rx="6" />
        <text x="70" y="69">Upwork</text>
      </g>
      <g className="diagram-node">
        <rect x="24" y="98" width="92" height="40" rx="6" />
        <text x="70" y="123">LinkedIn</text>
      </g>
      <g className="diagram-node">
        <rect x="24" y="158" width="92" height="40" rx="6" />
        <text x="70" y="183">Inbound</text>
      </g>
      <g className="diagram-node">
        <rect x="24" y="216" width="92" height="40" rx="6" />
        <text x="70" y="241">Email</text>
      </g>
      <g className="diagram-core">
        <rect x="300" y="108" width="120" height="84" rx="10" />
        <path d="M336 149 l18 18 l34 -40" />
        <text x="360" y="178">Verified lead</text>
      </g>
      <g className="diagram-node">
        <rect x="604" y="72" width="92" height="40" rx="6" />
        <text x="650" y="97">Pipeline</text>
      </g>
      <g className="diagram-node">
        <rect x="604" y="188" width="92" height="40" rx="6" />
        <text x="650" y="213">Revenue</text>
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar" aria-label="SalesOps">
        <a className="brand" href="#top" aria-label="SalesOps home">
          <span className="brand-mark" aria-hidden="true" />
          <span>SalesOps</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#system">System</a>
          <a href="#evidence">Evidence</a>
          <a href="#cadence">Cadence</a>
        </nav>
        <a className="nav-cta" href="mailto:sales@example.com">Request access</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker">
          <span>Security-grade sales operations</span>
          <span>v1.0</span>
        </div>
        <div className="hero-layout">
          <div className="hero-copy">
            <h1>One control plane for every revenue signal.</h1>
            <p>
              SalesOps converts marketplace jobs, outbound lists, LinkedIn conversations,
              inbound requests, tasks, meetings, and deals into a single auditable workflow.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button button-primary" href="mailto:sales@example.com">Request access</a>
              <a className="button button-secondary" href="#system">Read the system brief</a>
            </div>
          </div>

          <aside className="dossier" aria-label="SalesOps operating dossier">
            <div className="dossier-top">
              <span>SALESOPS / CONTROL DOSSIER</span>
              <strong>Verified</strong>
            </div>
            <PipelineDiagram />
            <div className="intake-strip" aria-label="Connected lead sources">
              {intake.map((source) => (
                <span key={source}>{source}</span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="system-section" id="system">
        <div className="section-heading">
          <span className="section-code">System 01</span>
          <h2>Every record carries ownership, context, and next action.</h2>
        </div>
        <div className="stage-table">
          {stages.map((stage) => (
            <div className="stage-row" key={stage.name}>
              <strong>{stage.name}</strong>
              <span>{stage.signal}</span>
              <em>{stage.status}</em>
            </div>
          ))}
        </div>
      </section>

      <section className="evidence-section" id="evidence">
        <div className="ledger-panel">
          <div className="ledger-head">
            <span>Live opportunity ledger</span>
            <span>Owner context preserved</span>
          </div>
          {ledger.map((row) => (
            <div className="ledger-row" key={row.company}>
              <span>{row.source}</span>
              <strong>{row.company}</strong>
              <span>{row.stage}</span>
              <span>{row.next}</span>
              <em>{row.value}</em>
            </div>
          ))}
        </div>
        <div className="evidence-copy">
          <span className="section-code">Evidence 02</span>
          <h2>The dashboard answers operating questions, not vanity questions.</h2>
          <p>
            Teams can see what is happening across channels, who owns the next move, which
            opportunities are aging, and where qualified pipeline is actually coming from.
          </p>
        </div>
      </section>

      <section className="cadence-section" id="cadence">
        <div className="cadence-intro">
          <span className="section-code">Cadence 03</span>
          <h2>Built around the work reps already do.</h2>
        </div>
        <div className="evidence-list">
          {evidence.map(([title, body]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
