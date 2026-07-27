import { techGroups } from "../data/techStack.js";
import { useReveal } from "../hooks/useReveal.js";
import "./TechStack.css";

export default function TechStack() {
  const { ref, visible } = useReveal();

  return (
    <section id="tech" className="section tech">
      <div className="container">
        <div className={`section-head reveal ${visible ? "is-visible" : ""}`} ref={ref}>
          <span className="eyebrow">Tech Stack</span>
          <h2 className="section-title">The toolkit behind every audit trail.</h2>
          <p className="section-sub">
            Grouped the way it actually gets used on a project — languages, front-end, database,
            and the tools that keep releases boring (in a good way).
          </p>
        </div>

        <div className="tech-groups">
          {techGroups.map((group, gi) => (
            <div
              className={`tech-group reveal reveal-delay-${Math.min(gi + 1, 3)} ${visible ? "is-visible" : ""}`}
              key={group.label}
            >
              <h3 className="tech-group-label mono">{group.label}</h3>
              <div className="tech-chip-grid">
                {group.items.map(({ name, icon: Icon }) => (
                  <div className="tech-chip card card-hover" key={name}>
                    <Icon className="tech-chip-icon" aria-hidden="true" />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
