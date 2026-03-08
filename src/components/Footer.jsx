import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"; // import icons

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
         


        <div className="footer-column">
          <h4>Product</h4>
          <ul>
            <li>Home</li>
            <li>Support</li>
            <li>Pricing</li>
            <li>Affiliate</li>
            <li>Resources</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>Blogs</li>
            <li>Community</li>
            <li>Careers <span className="hiring">We’re hiring!</span></li>
            <li>About</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>

      </div>


{/* Social Icons */}
        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
        </div>

      <div className="footer-bottom">
        <p>
  A professional platform designed to help you build structured, recruiter-ready resumes.
</p>
<span>© 2026 ResumeVita. All rights reserved.</span>

      </div>
    </footer>
  );
}



