import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer mono">
      <span>© {new Date().getFullYear()} Dev Khatri</span>
      <span className="footer-dim">built with React · framer-motion · canvas</span>
    </footer>
  );
}
