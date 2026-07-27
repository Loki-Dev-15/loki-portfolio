import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { TbArrowLeft } from "react-icons/tb";
import { projects } from "../data/projects.js";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./ProjectDetail.css";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!project) return <Navigate to="/" replace />;

  return (
    <div className="project-detail-page">
      <Navbar />
      <main className="section project-detail">
        <div className="container">
          <Link to="/#projects" className="back-link">
            <TbArrowLeft /> Back to projects
          </Link>

          <div className="project-detail-head">
            <span className="eyebrow">Entry No. {project.entry}</span>
            <h1 className="project-detail-title">{project.name}</h1>
            <div className="project-detail-meta">
              <span className="mono">{project.duration}</span>
              <span className="project-status">{project.status}</span>
            </div>
          </div>

          {project.image && (
            <div className="project-detail-media" style={{ backgroundImage: `url(${project.image})` }} />
          )}

          <div className="project-detail-grid">
            <div className="project-detail-main">
              <section>
                <h2>Overview</h2>
                <p>{project.description}</p>
              </section>

              <section>
                <h2>My contributions</h2>
                <ul>
                  {project.contributions.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2>Impact summary</h2>
                <p>{project.impact}</p>
              </section>
            </div>

            <aside className="project-detail-side card">
              <h3>Tech stack</h3>
              <div className="project-detail-tags">
                {project.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
