import { useState } from "react";
import heroPhoto from "../assets/images/hero-screenshot.jpg";
import SystemsTicker from "./SystemsTicker.jsx";
import { useReveal } from "../hooks/useReveal.js";
import { useCountUp } from "../hooks/useCountUp.js";
import "./Hero.css";

const STATS = [
  { value: 4, suffix: "+", label: "Years in production .NET" },
  { value: 100, suffix: "+", label: "Users on live systems" },
  { value: 50, suffix: "%", label: "Faster approval cycles" },
  { value: 40, suffix: "%", label: "Query performance gained" },
];

function Stat({ value, suffix, label, start }) {
  const count = useCountUp(value, { start });
  return (
    <div className="hero-stat">
      <span className="hero-stat-value mono">
        {count}
        {suffix}
      </span>
      <span className="hero-stat-label">{label}</span>
    </div>
  );
}

export default function Hero() {
  const { ref, visible } = useReveal();
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <header id="home" className="hero">
      <div className="container hero-inner" ref={ref}>
        <div className={`hero-left reveal ${visible ? "is-visible" : ""}`}>
          <span className="eyebrow">Full-Stack .NET Developer · Chennai, India</span>
          <h1 className="hero-title">
            Enterprise systems that keep <span className="hero-title-accent">approvals moving</span> and
            audits clean.
          </h1>
          <p className="hero-sub">
            Results-driven .NET Core developer with 4+ years building secure, production-grade
            enterprise applications — from encrypted APIs to the finance and operations workflows
            that run internal businesses.
          </p>

          <div className="hero-ctas">
            <a className="btn btn-primary" href="#projects">
              View my work
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
          </div>

          <div className="hero-stats">
            {STATS.map((s) => (
              <Stat key={s.label} {...s} start={visible} />
            ))}
          </div>
        </div>

        <div className={`hero-right reveal reveal-delay-1 ${visible ? "is-visible" : ""}`}>
          <div className="hero-badge">
            <div className="hero-badge-ring">
              <img
                src={heroPhoto}
                alt="Lokeshkumar D"
                className={`hero-photo ${imgLoaded ? "loaded" : ""}`}
                onLoad={() => setImgLoaded(true)}
              />
            </div>
            <div className="hero-seal seal">
              <span className="seal-dot" />
              Open to opportunities
            </div>
          </div>
        </div>
      </div>

      <div className={`reveal reveal-delay-2 ${visible ? "is-visible" : ""}`}>
        <SystemsTicker />
      </div>
    </header>
  );
}
