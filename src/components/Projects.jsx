import { Link } from "react-router-dom";
import { TbArrowUpRight } from "react-icons/tb";
import { projects } from "../data/projects.js";
import { useReveal } from "../hooks/useReveal.js";
import "./Projects.css";

export default function Projects() {
  const { ref, visible } = useReveal();

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className={`section-head reveal ${visible ? "is-visible" : ""}`} ref={ref}>
          <span className="eyebrow">Key Projects</span>
          <h2 className="section-title">Five systems, all still running.</h2>
          <p className="section-sub">
            Every project below is a real internal enterprise system built for Inspirisys
            business units and used in production — not a demo.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((p, i) => (
            <article
              className={`project-card card card-hover reveal reveal-delay-${Math.min((i % 3) + 1, 3)} ${visible ? "is-visible" : ""}`}
              key={p.slug}
            >
              <div className="project-card-body">
                <div className="project-card-top">
                  <h3 className="project-card-title">{p.name}</h3>
                  <span className="project-status">{p.status}</span>
                </div>

                <p className="project-card-desc">{p.description}</p>

                <p className="project-card-impact">
                  <strong>Impact:</strong> {p.impact}
                </p>

                <div className="project-card-tags">
                  {p.tags.slice(0, 4).map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                <Link className="project-card-link" to={`/projects/${p.slug}`}>
                  View details <TbArrowUpRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
