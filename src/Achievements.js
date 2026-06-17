import { useReveal } from './hooks';

/* ---- Consistent stroke icon set (no emojis) ---- */
const svg = (children) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{children}</svg>
);

const I = {
  trophy: svg(<><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></>),
  cap: svg(<><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></>),
  route: svg(<><circle cx="6" cy="19" r="3" /><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" /><circle cx="18" cy="5" r="3" /></>),
  coins: svg(<><circle cx="8" cy="8" r="6" /><path d="M18.09 10.37A6 6 0 1 1 10.34 18" /><path d="M7 6h1v4" /><path d="m16.71 13.88.7.71-2.82 2.82" /></>),
  access: svg(<><circle cx="16" cy="4" r="1" /><path d="m18 19 1-7-6 1" /><path d="m5 8 3-3 5.5 3-2.36 3.5" /><path d="M4.24 14.5a5 5 0 0 0 6.88 6" /><path d="M13.76 17.5a5 5 0 0 0-6.88-6" /></>),
  layers: svg(<><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" /><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" /><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" /></>),
  users: svg(<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>),
  target: svg(<><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>),
  clock: svg(<><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>),
  external: svg(<><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></>),
};

const CERTS = [
  {
    icon: I.layers,
    title: 'Claude Certified Architect',
    badge: 'Foundations',
    issuer: 'Anthropic',
    date: '2025',
    desc: 'Foundational certification covering Claude model capabilities, prompt engineering, and the principles of architecting reliable, production-grade AI-powered applications.',
    link: '',
  },
  {
    icon: I.trophy,
    title: 'GitHub Foundations',
    badge: 'GH-900',
    issuer: 'GitHub',
    date: '2023',
    desc: 'Certified in GitHub fundamentals — repositories, branches, commits, and pull requests — with proven proficiency in collaboration workflows and core GitHub features.',
    link: 'https://www.credly.com/users/varshini-a/badges',
  },
];

const HACKATHONS = [
  {
    icon: I.route,
    mode: 'Offline · 48 hrs',
    result: 'Participant',
    highlight: false,
    event: 'TN Smart City Hackathon 2024',
    team: 'Tech Kuruvigal',
    theme: 'Urban Tech & Sustainability',
    project: 'Kuppai-Connect',
    projectSub: 'Smart Waste Route Optimizer',
    role: 'Built the interactive dashboard and integrated REST APIs for dynamic shortest-route generation using mock GPS bin data.',
    stack: ['React', 'REST API', 'GitHub'],
  },
  {
    icon: I.coins,
    mode: 'Online · 36 hrs',
    result: 'Top 20 Finalist',
    highlight: true,
    event: 'Global FinTech Virtual Challenge 2023',
    team: 'ByteCrafters',
    theme: 'Financial Inclusion',
    project: 'MicroFundr',
    projectSub: 'Peer-to-Peer Micro-Lending Platform',
    role: 'Developed a fully responsive frontend and implemented secure authentication workflows with Role-Based Access Control.',
    stack: ['Angular', 'Spring Security', 'RBAC', 'Auth & AuthZ'],
  },
  {
    icon: I.access,
    mode: 'Online · 24 hrs',
    result: 'Participant',
    highlight: false,
    event: 'Code for Good Virtual Hack 2022',
    team: 'Agile Avengers',
    theme: 'EdTech & Accessibility',
    project: 'Padippu.io',
    projectSub: 'Accessibility-First EdTech Aggregator',
    role: 'Engineered a scalable platform using microservices architecture and developed iterative features in an Agile environment.',
    stack: ['Java', 'Spring Boot', 'Microservices', 'Agile'],
  },
];

function CgpaCard() {
  const ref = useReveal(0.15);
  return (
    <article className="ach-card cgpa reveal" ref={ref}>
      <div className="ach-card-top">
        <div className="ach-chip gold">{I.cap}</div>
        <div className="cgpa-score-block">
          <span className="cgpa-score">8.8</span>
          <span className="cgpa-score-label">CGPA / 10</span>
        </div>
      </div>
      <h3 className="ach-name">B.Tech · Computer Science &amp; Business Systems</h3>
      <p className="ach-sub">Sri Krishna College of Engineering &amp; Technology · 2021–2025</p>
      <div className="cgpa-stats">
        <div className="cgpa-stat"><span className="cgpa-stat-val">Top 10%</span><span className="cgpa-stat-key">Class Rank</span></div>
        <div className="cgpa-stat"><span className="cgpa-stat-val">Distinction</span><span className="cgpa-stat-key">Honours</span></div>
        <div className="cgpa-stat"><span className="cgpa-stat-val">4 Years</span><span className="cgpa-stat-key">Duration</span></div>
      </div>
    </article>
  );
}

function CertCard({ a }) {
  const ref = useReveal(0.15);
  return (
    <article className="ach-card cert reveal" ref={ref}>
      <div className="ach-card-top">
        <div className="ach-chip gold">{a.icon}</div>
        <span className="ach-result hl">{a.badge}</span>
      </div>
      <h3 className="ach-name">{a.title}</h3>
      <p className="ach-sub">Issued by {a.issuer} · {a.date}</p>
      <p className="ach-desc">{a.desc}</p>
      {a.link && (
        <a className="ach-link" href={a.link} target="_blank" rel="noopener noreferrer">
          {I.external} View Credential
        </a>
      )}
    </article>
  );
}

function HackCard({ h, idx }) {
  const ref = useReveal(0.15);
  return (
    <article className="ach-card hack reveal" ref={ref} style={{ transitionDelay: `${(idx + 1) * 0.08}s` }}>
      <div className="ach-card-top">
        <div className="ach-chip">{h.icon}</div>
        <span className={`ach-result ${h.highlight ? 'hl' : ''}`}>{h.result}</span>
      </div>
      <h3 className="ach-name">{h.project}</h3>
      <p className="ach-sub">{h.projectSub}</p>
      <p className="hack-event">{h.event}</p>
      <p className="ach-desc">{h.role}</p>
      <div className="hack-foot">
        <span className="hack-mi">{I.users}{h.team}</span>
        <span className="hack-mi">{I.target}{h.theme}</span>
        <span className="hack-mi">{I.clock}{h.mode}</span>
      </div>
      <div className="tags">
        {h.stack.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </article>
  );
}

export default function Achievements() {
  const hdRef = useReveal();

  return (
    <section className="sec" id="achievements">
      <div className="sec-hd reveal" ref={hdRef}>
        <span className="sec-num">06 —</span>
        <h2 className="sec-title">Achievements &amp; <span>Certifications</span></h2>
        <div className="sec-line" />
      </div>

      <p className="ach-subhd">Education &amp; Credentials</p>
      <div className="ach-feature">
        <CgpaCard />
        {CERTS.map(c => <CertCard key={c.title} a={c} />)}
      </div>

      <p className="ach-subhd">Hackathons &amp; Competitions</p>
      <div className="ach-hacks">
        {HACKATHONS.map((h, i) => <HackCard key={h.event} h={h} idx={i} />)}
      </div>
    </section>
  );
}
