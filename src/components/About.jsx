import { useReveal } from "../hooks/useReveal.js";
import "./About.css";

const PRINCIPLES = [
  "SOLID principles & OOP fundamentals",
  "3-Tier architecture & MVC",
  "RESTful API design",
  "Agile / Scrum delivery",
];

const FOCUS = [
  {
    title: "Own the full lifecycle",
    detail:
      "From requirement analysis and technical design with stakeholders through UAT and production deployment on IIS.",
  },
  {
    title: "Automate what's manual",
    detail:
      "Turned spreadsheet-driven finance approvals into audited, role-based workflows — cutting processing time by up to 50%.",
  },
  {
    title: "Tune for scale",
    detail:
      "Optimized stored procedures and execution plans, improving performance up to 40% on high-traffic modules.",
  },
];

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className={`section-head reveal ${visible ? "is-visible" : ""}`} ref={ref}>
          <span className="eyebrow">About</span>
          <h2 className="section-title">Built for systems that can't afford to be wrong.</h2>
          <p className="section-sub">
            I'm Lokeshkumar — a pragmatic .NET Core developer who builds enterprise applications
            where every approval needs a trail and every number needs to reconcile.
          </p>
        </div>

        <div className="about-grid">
          <div className={`card about-card reveal ${visible ? "is-visible" : ""}`}>
            <p className="about-lead">
              Over 4+ years at Inspirisys Solutions, I've designed and shipped internal systems
              that automate financial and operational workflows for up to 100+ users across a
              pan-India rollout — while keeping a lean, 2-engineer team shipping on overlapping
              deadlines. I use AI-assisted tools like GitHub Copilot and ChatGPT to move faster
              without cutting corners on code quality.
            </p>
            <ul className="about-principles">
              {PRINCIPLES.map((p) => (
                <li key={p}>
                  <span className="about-principle-dot" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="about-focus-list">
            {FOCUS.map((f, i) => (
              <div className={`about-focus-item reveal reveal-delay-${Math.min(i + 1, 3)} ${visible ? "is-visible" : ""}`} key={f.title}>
                <span className="about-focus-index mono">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h4 className="about-focus-title">{f.title}</h4>
                  <p className="about-focus-detail">{f.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
