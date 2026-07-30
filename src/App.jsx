import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from "./hooks/useTheme.jsx";
import Home from "./pages/Home.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [hash, pathname]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      {/* basename is read from Vite's `base` config (vite.config.js), not
          hardcoded here — so renaming the repo/subpath again only ever
          requires editing one file.
      <BrowserRouter basename="/loki-portfolio"> */}
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
