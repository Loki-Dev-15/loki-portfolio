import { useState } from "react";
import { TbMail, TbPhone, TbMapPin, TbBrandLinkedin, TbCheck } from "react-icons/tb";
import { useReveal } from "../hooks/useReveal.js";
import "./Contact.css";

const FORM_ACTION = "https://formspree.io/f/meobragp";

export default function Contact() {
  const { ref, visible } = useReveal();
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch(FORM_ACTION, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className={`section-head reveal ${visible ? "is-visible" : ""}`} ref={ref}>
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Let's talk about your next system.</h2>
          <p className="section-sub">
            Open to full-stack .NET roles and freelance engineering work. I usually reply within
            a day.
          </p>
        </div>

        <div className="contact-grid">
          <form className={`card contact-form reveal ${visible ? "is-visible" : ""}`} onSubmit={handleSubmit}>
            <label>
              Full name
              <input type="text" name="name" placeholder="Jane Doe" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="jane@company.com" required />
            </label>
            <label>
              Message
              <textarea name="message" rows={5} placeholder="Tell me about the project or role..." required />
            </label>

            <div className="form-actions">
              <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : status === "sent" ? "Sent — thank you!" : "Send message"}
              </button>
              <a
                className="btn btn-ghost"
                href="/Lokeshkumar_D_Software_Engineer_DotNet_Resume_2025.pdf"
                download
              >
                Download CV
              </a>
            </div>

            {status === "sent" && (
              <p className="form-status form-status-success">
                <TbCheck /> Message delivered. I'll get back to you shortly.
              </p>
            )}
            {status === "error" && (
              <p className="form-status form-status-error">
                Something went wrong — please email me directly instead.
              </p>
            )}
          </form>

          <aside className={`card contact-info reveal reveal-delay-1 ${visible ? "is-visible" : ""}`}>
            <h3>Get in touch directly</h3>
            <ul className="contact-info-list">
              <li>
                <TbMail />
                <a href="mailto:lokeshkumardhanapalan@gmail.com">lokeshkumardhanapalan@gmail.com</a>
              </li>
              <li>
                <TbPhone />
                <a href="tel:+919087457182">+91 90874 57182</a>
              </li>
              <li>
                <TbMapPin />
                <span>Chennai, India</span>
              </li>
              <li>
                <TbBrandLinkedin />
                <a href="https://www.linkedin.com/in/lokeshkumar-d-5993ba228" target="_blank" rel="noreferrer">
                  LinkedIn profile
                </a>
              </li>
            </ul>

            <div className="contact-seal seal">
              <span className="seal-dot" />
              Currently open to opportunities
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
