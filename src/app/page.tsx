import Image from "next/image";

const benefits = [
  [
    "One pipeline",
    "Track leads, deals, tasks, meetings, and follow-ups from every channel in one place.",
  ],
  [
    "Less manual admin",
    "Keep owners, stages, next actions, and deal values visible without rebuilding context.",
  ],
  [
    "Channel clarity",
    "See which sources create pipeline and where each opportunity needs attention.",
  ],
  [
    "Manager visibility",
    "Review activity, risk, and revenue movement without chasing status updates.",
  ],
];

const channels = [
  { label: "Upwork", value: "$118K", detail: "32 active", tone: "mint" },
  { label: "LinkedIn", value: "$96K", detail: "44 sent", tone: "sky" },
  { label: "Inbound", value: "$172K", detail: "21 qualified", tone: "lime" },
  { label: "Cold Email", value: "28%", detail: "reply rate", tone: "blue" },
];

const workflow = [
  [
    "Acquire",
    "Upwork, LinkedIn, email, inbound, and referrals feed one operating queue.",
  ],
  [
    "Qualify",
    "Source, owner, stage, budget, probability, and next follow-up stay attached.",
  ],
  [
    "Advance",
    "Proposals, meetings, tasks, notes, and risks move with every opportunity.",
  ],
  [
    "Report",
    "Managers see channel ROI, funnel movement, at-risk deals, and forecast health.",
  ],
];

const capabilities = [
  "Pipeline dashboard with channel, owner, revenue, and risk context",
  "Lead table and kanban views with the same CRM source of truth",
  "Proposal, meeting, follow-up, and task tracking on every record",
  "Upwork job finder, case studies, templates, and outreach prompt logs",
  "B2B campaign workspace with ICPs, data requests, verification, and sequences",
  "Revenue reports that connect activity to closed-won movement",
];

function ProductPreview() {
  return (
    <div
      className="product-image-frame"
      aria-label="SalesOps CRM dashboard preview"
    >
      <div className="product-image-crop">
        <Image
          src="/salesops-platform-hero@2x.png"
          width={3162}
          height={1818}
          alt="SalesOps dashboard with pipeline metrics, recent activity, pipeline overview, upcoming tasks, and source breakdown"
          priority
        />
        <div className="hero-user-overlay" aria-hidden="true">
          <span>J</span>
          <div>
            <strong>John Doe</strong>
            <em>johndoe@example.com</em>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadsMock() {
  return (
    <div className="product-shot" aria-label="SalesOps leads product preview">
      <Image
        src="/salesops-product-leads.png"
        width={1599}
        height={984}
        alt="SalesOps leads table with realistic records, channels, owners, deal values, and next actions"
      />
    </div>
  );
}

function DealsMock() {
  return (
    <div className="product-shot" aria-label="SalesOps deals product preview">
      <Image
        src="/salesops-product-deals.png"
        width={1648}
        height={954}
        alt="SalesOps deals table with realistic opportunities, pipeline values, stages, owners, and probabilities"
      />
    </div>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <section className="hero-stage" id="top">
        <header className="topbar" aria-label="SalesOps">
          <a className="brand" href="#top" aria-label="SalesOps home">
            <Image
              className="brand-logo"
              src="/salesops-logo.svg"
              width={30}
              height={30}
              alt=""
              aria-hidden="true"
              priority
            />
            <span>SalesOps</span>
          </a>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#views">Product</a>
            <a href="#workflow">Workflow</a>
            <a href="#capabilities">Capabilities</a>
          </nav>
          <div className="nav-actions">
            <a className="nav-cta" href="mailto:sales@hashlogics.com">
              Request a demo
            </a>
          </div>
        </header>

        <div className="hero-copy">
          <a className="announcement-pill" href="#workflow">
            SalesOps opens access for service teams <span>·</span> See operating
            model
          </a>
          <h1>
            <span className="headline-line">
              The <span className="accent-word">connected</span> CRM
            </span>
            <span className="headline-line">that helps you sell more</span>
          </h1>
          <p>
            SalesOps automates pipeline creation, meeting admin, proposals, and
            CRM updates, so revenue teams can stop clicking and start closing
            more deals.
          </p>
        </div>

        <div className="hero-product">
          <ProductPreview />
        </div>
      </section>

      <section
        className="benefits-strip"
        id="proof"
        aria-label="Platform benefits"
      >
        <p>Benefits of running every sales motion from one platform</p>
        <div className="benefits-marquee">
          {[...benefits, ...benefits].map(([title, body], index) => (
            <article key={`${title}-${index}`}>
              <strong>{title}</strong>
              <span>{body}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="views-section" id="views">
        <div className="section-heading centered">
          <span className="section-code">Product views</span>
          <h2>Everything your team touches, in one operating layer.</h2>
          <p>
            The product surface mirrors the real sales motion: sources feed
            leads, leads become deals, and every next step stays visible.
          </p>
        </div>
        <div className="channel-row">
          {channels.map((channel) => (
            <div
              className={`channel-card tone-${channel.tone}`}
              key={channel.label}
            >
              <span>{channel.label}</span>
              <strong>{channel.value}</strong>
              <em>{channel.detail}</em>
            </div>
          ))}
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
            SalesOps connects acquisition, qualification, deal execution, and
            reporting without forcing managers to rebuild context across tabs.
          </p>
        </div>
        <div
          className="workflow-map"
          aria-label="SalesOps operating model route"
        >
          <svg
            className="paper-trail"
            viewBox="0 0 1040 560"
            aria-hidden="true"
            focusable="false"
          >
            <path
              className="paper-trail-shadow"
              d="M92 116 C112 254 128 350 234 390 C366 440 462 330 368 288 C270 244 230 362 330 450 C456 560 674 548 700 394 C724 252 564 236 548 344 C530 472 734 508 888 398 C954 350 984 292 1008 226"
            />
            <path
              className="paper-trail-line"
              d="M92 116 C112 254 128 350 234 390 C366 440 462 330 368 288 C270 244 230 362 330 450 C456 560 674 548 700 394 C724 252 564 236 548 344 C530 472 734 508 888 398 C954 350 984 292 1008 226"
            />
            <g className="paper-plane">
              <path
                className="paper-plane-main"
                d="M798 86 L1014 32 L954 206 L898 144 L798 86 Z"
              />
              <path
                className="paper-plane-fold"
                d="M898 144 L1014 32 L924 170 L918 248 Z"
              />
              <path
                className="paper-plane-wing"
                d="M918 248 L954 206 L924 170 Z"
              />
              <path className="paper-plane-crease" d="M898 144 L1014 32" />
            </g>
          </svg>
          {workflow.map(([title, body], index) => {
            const stepNumber = index + 1;
            const markerPosition =
              stepNumber === 3 ? 4 : stepNumber === 4 ? 3 : stepNumber;

            return (
              <article
                className={`workflow-marker step-${markerPosition}`}
                key={title}
              >
                <div className="workflow-node" aria-hidden="true">
                  <strong>{stepNumber}</strong>
                </div>
                <div className="workflow-copy">
                  <span>{String(stepNumber).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="capabilities-section" id="capabilities">
        <div className="capabilities-copy">
          <span className="section-code">Scope of control</span>
          <h2>
            Built for business development teams that need operational clarity.
          </h2>
          <p>
            No generic CRM theater. SalesOps gives owners the views, records,
            and reports that keep a multi-channel sales engine accountable.
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

      <footer className="site-footer">
        <p>
          Developed by <a href="https://hashlogics.com">Hashlogics</a>
        </p>
      </footer>
    </main>
  );
}
