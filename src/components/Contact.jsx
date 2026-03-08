
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-wrapper">

        {/* LEFT */}
        <div className="contact-info">
          <h2>Let’s talk</h2>
          <p>
            Making every customer feel valued — no matter the size of your
            audience.
          </p>

          <div className="contact-item">
            <Mail size={20} />
            <span>support@resumebuilder.com</span>
          </div>

          <div className="contact-item">
            <Phone size={20} />
            <span>+91 98765 43210</span>
          </div>

          <div className="contact-item">
            <MapPin size={20} />
            <span>India</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-glass">
          <h3>Send us a message</h3>

          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
}

