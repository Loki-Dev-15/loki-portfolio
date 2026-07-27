import { experience } from "../data/experience.js";
import { getTechIcon } from "../data/techStack.js";
import { useReveal } from "../hooks/useReveal.js";
import islLogo from "../assets/images/isl.png";
import "./Experience.css";

export default function Experience() {
  const { ref, visible } = useReveal();

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className={`section-head reveal ${visible ? "is-visible" : ""}`} ref={ref}>
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">The ledger of record.</h2>
          <p className="section-sub">
            One role, one company, four+ years of compounding ownership — every entry below is a
            real production system, not a side project.
          </p>
        </div>

        <div className="ledger">
          {experience.map((role, i) => (
            <article className={`ledger-entry reveal ${visible ? "is-visible" : ""}`} key={role.company}>
              <div className="ledger-rail">
                <span className="ledger-node" />
                {i < experience.length - 1 && <span className="ledger-rail-line" />}
              </div>

              <div className="ledger-content card">
                <div className="ledger-header">
                  <div className="ledger-header-main">
                    <img src={islLogo} alt="" className="ledger-logo" aria-hidden="true" />
                    <div>
                      <h3 className="ledger-role">{role.role}</h3>
                      <p className="ledger-company">
                        {role.company} <span className="ledger-dot">·</span> {role.location}
                      </p>
                    </div>
                  </div>
                  <span className="ledger-duration mono">{role.duration}</span>
                </div>

                <p className="ledger-summary">{role.summary}</p>

                <ul className="ledger-points">
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="ledger-tags">
                  {role.tech.map((t) => {
                    const Icon = getTechIcon(t);
                    return (
                      <span key={t} className="tag tag-icon">
                        {Icon && <Icon className="tag-icon-glyph" aria-hidden="true" />}
                        {t}
                      </span>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
