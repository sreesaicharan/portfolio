import { SiGithub } from "react-icons/si"
import { FaLinkedin } from "react-icons/fa"
import { Mail } from "lucide-react"
import { useNavigate } from "react-router-dom"
import "./Footer.css"

export function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="Pages">
        <p className="pages-tag">Pages</p><br />
        <span className="footer-page" onClick={() => navigate("/me")}>About</span><br />
        <span className = "footer-page" onClick={() => navigate("/blogs")}>Blogs</span>
      </div>
      <div className="footer-links">
        <a href="https://github.com/sreesaicharan" target="_blank" rel="noreferrer" className="footer-link">
          <SiGithub />
        </a>
        <a href="https://www.linkedin.com/in/sree-sai-charan-e-26aa3a30b/" target="_blank" rel="noreferrer" className="footer-link">
          <FaLinkedin />
        </a>
        <a href="mailto:saicharanlogi@gmail.com" className="footer-link">
          <Mail size={22} strokeWidth={1.5} />
        </a>
      </div>
    </footer>
  )
}