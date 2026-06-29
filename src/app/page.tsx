import Image from "next/image";

const kpis = [
  { label: "Total Pipeline", value: "$428K", detail: "37 active deals", tone: "blue" },
  { label: "Closed Won MTD", value: "$86K", detail: "9 deals closed", tone: "green" },
  { label: "Active Leads", value: "214", detail: "54 qualified", tone: "indigo" },
  { label: "Win Rate", value: "41.8%", detail: "Above target", tone: "amber" },
];

const channels = [
  { label: "Upwork", value: "$118K", detail: "32 active", tone: "green" },
  { label: "Fiverr", value: "$42K", detail: "18 replied", tone: "green" },
  { label: "LinkedIn", value: "$96K", detail: "44 sent", tone: "blue" },
  { label: "Cold Email", value: "28%", detail: "reply rate", tone: "indigo" },
  { label: "Inbound", value: "$172K", detail: "21 qualified", tone: "cyan" },
];

const leads = [
  { company: "Northstar Labs", source: "Upwork", stage: "Proposal", owner: "A. Khan", value: "$12.4K" },
  { company: "Atlas Supply", source: "LinkedIn", stage: "Qualified", owner: "S. Patel", value: "$8.8K" },
  { company: "Cobalt Studio", source: "Inbound", stage: "Discovery", owner: "M. Lee", value: "$18.0K" },
  { company: "Signal Ridge", source: "Cold Email", stage: "Follow-up", owner: "R. Chen", value: "$6.2K" },
];

const deals = [
  {
    stage: "Qualified",
    total: "$82K",
    items: ["Atlas Supply", "Cobalt Studio"],
  },
  {
    stage: "Proposal",
    total: "$156K",
    items: ["Northstar Labs", "Harbor Digital", "KineticOps"],
  },
  {
    stage: "Negotiation",
    total: "$118K",
    items: ["Signal Ridge", "Lumen Works"],
  },
  {
    stage: "Won",
    total: "$86K",
    items: ["Orbit Finance", "Peakbyte"],
  },
];

const workflow = [
  ["Acquire", "Upwork, Fiverr, LinkedIn, cold email, and inbound all feed one queue."],
  ["Qualify", "Every lead keeps source, owner, stage, probability, budget, and next follow-up."],
  ["Advance", "Deals track proposal links, tasks, meetings, contract terms, and risk."],
  ["Report", "Managers see channel ROI, funnel health, at-risk deals, and revenue movement."],
];

const capabilities = [
  "Dashboard with pipeline, funnel, revenue goals, and at-risk deals",
  "Lead table and kanban views with owner, stage, source, and value context",
  "Deal pipeline with weighted value and close timing",
  "Upwork job finder, proposal templates, case studies, and prompt logs",
  "B2B outreach with ICPs, data requests, verification, templates, and campaigns",
  "Tasks, meetings, notes, attachments, and activity history on every record",
];

function DashboardMock() {
  return (
    <div className="product-window dashboard-window" aria-label="SalesOps dashboard preview">
      <div className="window-top">
        <div>
          <span>Dashboard</span>
          <strong>Sales performance in real time</strong>
        </div>
        <div className="date-pill">Jun 1 - Jun 29</div>
      </div>
      <div className="kpi-grid">
        {kpis.map((kpi) => (
          <div className={`kpi-card tone-${kpi.tone}`} key={kpi.label}>
            <span>{kpi.label}</span>
            <strong>{kpi.value}</strong>
            <em>{kpi.detail}</em>
          </div>
        ))}
      </div>
      <div className="dashboard-body">
        <div className="chart-panel">
          <div className="panel-label">Pipeline by stage</div>
          <div className="bar-chart" aria-hidden="true">
            <span style={{ height: "46%" }} />
            <span style={{ height: "68%" }} />
            <span style={{ height: "84%" }} />
            <span style={{ height: "58%" }} />
            <span style={{ height: "36%" }} />
          </div>
        </div>
        <div className="activity-panel">
          <div className="panel-label">Activity overview</div>
          <div className="activity-line">
            <span>Tasks due</span>
            <strong>18</strong>
          </div>
          <div className="activity-line">
            <span>Meetings booked</span>
            <strong>11</strong>
          </div>
          <div className="activity-line">
            <span>At-risk deals</span>
            <strong>4</strong>
          </div>
        </div>
      </div>
      <div className="channel-row">
        {channels.map((channel) => (
          <div className={`channel-card tone-${channel.tone}`} key={channel.label}>
            <span>{channel.label}</span>
            <strong>{channel.value}</strong>
            <em>{channel.detail}</em>
          </div>
        ))}
      </div>
    </div>
  );
}

function LeadsMock() {
  return (
    <div className="product-window compact-window" aria-label="Leads table preview">
      <div className="window-top">
        <div>
          <span>Leads</span>
          <strong>Search, qualify, and assign prospects</strong>
        </div>
        <button type="button">Add Lead</button>
      </div>
      <div className="lead-table">
        <div className="lead-row lead-head">
          <span>Company</span>
          <span>Source</span>
          <span>Stage</span>
          <span>Owner</span>
          <span>Value</span>
        </div>
        {leads.map((lead) => (
          <div className="lead-row" key={lead.company}>
            <strong>{lead.company}</strong>
            <span>{lead.source}</span>
            <em>{lead.stage}</em>
            <span>{lead.owner}</span>
            <strong>{lead.value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

function DealsMock() {
  return (
    <div className="product-window compact-window dark-window" aria-label="Deals kanban preview">
      <div className="window-top">
        <div>
          <span>Deals</span>
          <strong>Pipeline movement without status chasing</strong>
        </div>
        <div className="date-pill">Weighted $316K</div>
      </div>
      <div className="kanban-grid">
        {deals.map((column) => (
          <div className="kanban-column" key={column.stage}>
            <div className="kanban-head">
              <span>{column.stage}</span>
              <strong>{column.total}</strong>
            </div>
            {column.items.map((item, index) => (
              <div className="deal-card" key={item}>
                <strong>{item}</strong>
                <span>{index % 2 === 0 ? "Next task today" : "Meeting scheduled"}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function FlowDiagram() {
  return (
    <svg className="flow-diagram" viewBox="0 0 960 240" role="img" aria-labelledby="flow-title">
      <title id="flow-title">SalesOps acquisition to revenue workflow</title>
      <path className="flow-line" d="M90 120 C225 40 315 40 450 120 S675 200 870 120" />
      {workflow.map(([label], index) => {
        const x = 90 + index * 260;
        return (
          <g className="flow-node" key={label}>
            <circle cx={x} cy="120" r="22" />
            <text x={x} y="126">{index + 1}</text>
          </g>
        );
      })}
    </svg>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar" aria-label="SalesOps">
        <a className="brand" href="#top" aria-label="SalesOps home">
          <Image className="brand-logo" src="/salesops-logo.svg" width={31} height={31} alt="" aria-hidden="true" priority />
          <span>SalesOps</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#views">Views</a>
          <a href="#workflow">Workflow</a>
          <a href="#capabilities">Capabilities</a>
        </nav>
        <a className="nav-cta" href="mailto:sales@example.com">Request access</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="section-code">Sales operations workspace</span>
          <h1>Run every revenue channel from one command center.</h1>
          <p>
            SalesOps brings prospecting, CRM, proposals, follow-ups, meetings, and revenue
            reporting into one operating layer for service teams.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button button-primary" href="mailto:sales@example.com">Request access</a>
            <a className="button button-secondary" href="#views">See product views</a>
          </div>
        </div>
        <div className="hero-product" aria-label="SalesOps dashboard product preview">
          <DashboardMock />
        </div>
      </section>

      <section className="views-section" id="views">
        <div className="section-heading">
          <span className="section-code">Product views</span>
          <h2>The workflows your sales team already runs, now connected.</h2>
        </div>
        <div className="views-grid">
          <LeadsMock />
          <DealsMock />
        </div>
      </section>

      <section className="workflow-section" id="workflow">
        <div className="workflow-intro">
          <span className="section-code">Operating model</span>
          <h2>From scattered channels to measurable revenue.</h2>
          <p>
            The product repo is organized around the actual sales motion: channels feed lead
            records, lead records become deals, and every activity stays attached to the account.
          </p>
        </div>
        <div className="flow-wrap">
          <FlowDiagram />
          <div className="workflow-grid">
            {workflow.map(([title, body]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="capabilities-section" id="capabilities">
        <div className="capabilities-copy">
          <span className="section-code">Scope of control</span>
          <h2>Designed for multi-channel business development.</h2>
          <p>
            The landing page now mirrors the product’s real surface area instead of showing a
            generic CRM: dashboard, leads, deals, tasks, meetings, channel workspaces, and data
            verification.
          </p>
        </div>
        <div className="capability-list">
          {capabilities.map((item) => (
            <div className="capability-row" key={item}>
              <span aria-hidden="true" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
