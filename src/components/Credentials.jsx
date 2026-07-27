import { TbCertificate, TbSchool, TbLanguage, TbExternalLink } from "react-icons/tb";
import { certifications, education, languages } from "../data/experience.js";
import { useReveal } from "../hooks/useReveal.js";
import "./Credentials.css";

export default function Credentials() {
  const { ref, visible } = useReveal();

  return (
    <section id="credentials" className="section credentials">
      <div className="container">
        <div className={`section-head reveal ${visible ? "is-visible" : ""}`} ref={ref}>
          <span className="eyebrow">Credentials</span>
          <h2 className="section-title">Certifications & education.</h2>
        </div>

        <div className="credentials-grid">
          <div className={`card credentials-card reveal ${visible ? "is-visible" : ""}`}>
            <TbCertificate className="credentials-icon" />
            <h3>Certification</h3>
            {certifications.map((c) => (
              <div key={c.title} className="credentials-item">
                <p className="credentials-item-title">{c.title}</p>
                <p className="credentials-item-sub">{c.issuer}</p>
                <a
                  href={c.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="credentials-link"
                >
                  View credential <TbExternalLink />
                </a>
              </div>
            ))}
          </div>

          <div className={`card credentials-card reveal reveal-delay-1 ${visible ? "is-visible" : ""}`}>
            <TbSchool className="credentials-icon" />
            <h3>Education</h3>
            <div className="credentials-item">
              <p className="credentials-item-title">{education.degree}</p>
              <p className="credentials-item-sub">{education.school}</p>
              <div className="credentials-edu-footer">
                <span className="credentials-item-sub mono">{education.duration}</span>
                <span className="cgpa-badge mono">{education.detail}</span>
              </div>
            </div>
          </div>

          <div className={`card credentials-card reveal reveal-delay-2 ${visible ? "is-visible" : ""}`}>
            <TbLanguage className="credentials-icon" />
            <h3>Languages</h3>
            <div className="credentials-languages">
              {languages.map((l) => (
                <div key={l.name} className="credentials-language">
                  <span>{l.name}</span>
                  <span className="mono credentials-language-level">{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
