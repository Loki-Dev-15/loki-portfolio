import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Lokeshkumar D — Built with care.</span>
        <span className="mono footer-tag">React · Vite</span>
      </div>
    </footer>
  );
}
