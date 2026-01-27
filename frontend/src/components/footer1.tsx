'use client';
import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const message = encodeURIComponent(
  "Hello,\n\nI visited your website and would like to enquire about your services.\nPlease share more details and let me know a convenient time to connect.\n\nThank you."
);
interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  const text = String(children).split("");

  return (
    <a href={href || "#"} className="footer-link-animated">
      <span className="span-mother">
        {text.map((char, i) => (
          <span key={i}>{char}</span>
        ))}
      </span>
      <span className="span-mother2">
        {text.map((char, i) => (
          <span key={i}>{char}</span>
        ))}
      </span>
    </a>
  );
}

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* Fixed Background */}
      <div className="footer-background"></div>

      {/* Content */}
      <div className="footer-content">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-left">
            {/* Logo */}
            <div className="footer-logo">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M8 32V8H24L32 16V32M24 8V16H32" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" fill="none" />
              </svg>
              <span>Subhash Interior</span>
            </div>

            {/* Description */}
            <p className="footer-description">
              Subhash Interior designs timeless, functional spaces with aesthetic clarity and material harmony.
            </p>

            {/* Social Links */}
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Right Section - Contact Info */}
          <div className="footer-right">
            <div className="contact-section">
              <h4>GET IN TOUCH</h4>
              <div className="contact-info">
                <p className="contact-item">0665 Broadway st. 10234 NY, USA</p>
                <p className="contact-item">+1 123 567 8910</p>
                <a href="mailto:design@subhashinterior.com" className="contact-item contact-email">
                  design@subhashinterior.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-nav">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/services">Services</NavItem>
            <NavItem href="/portfolio">Portfolio</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </div>
          {/* <p className="footer-copyright">Copyright 2026 by DuruThemes</p> */}
          {/* <p className="footer-copyright">
            © 2026. Designed &amp; Developed by{" "}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              KLINTON 
            </a>
          </p> */}

          <a
            href={`https://wa.me/91XXXXXXXXXX?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            KLINTON
          </a>


        </div>
      </div>

      <style jsx global>{`
        .footer {
          position: relative;
          width: 100%;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          margin-top: 50px;
        }

        .footer-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&q=80');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          z-index: -1;
        }

        .footer-background::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(2px);
        }

        .footer-content {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          padding: 40px 40px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 60px;
          margin-bottom: 50px;
        }

        .footer-left {
          flex: 1;
          max-width: 400px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 30px;
        }

        .footer-logo span {
          font-size: 18px;
          font-weight: 500;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.9);
        }

        .footer-description {
          font-size: 15px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.65);
          margin: 0 0 30px 0;
        }

        .social-links {
          display: flex;
          gap: 20px;
        }

        .social-icon {
          width: 45px;
          height: 45px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.6);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .social-icon:hover {
          background: rgba(210, 180, 140, 0.2);
          border-color: rgba(210, 180, 140, 0.6);
          color: rgba(210, 180, 140, 0.9);
          transform: translateY(-3px);
        }

        .footer-right {
          flex: 1;
          display: flex;
          justify-content: flex-end;
        }

        .contact-section {
          text-align: right;
        }

        .contact-section h4 {
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.8);
          margin: 0 0 25px 0;
          text-transform: uppercase;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .contact-item {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          line-height: 1.6;
          transition: all 0.3s ease;
        }

        .contact-email {
          color: rgba(210, 180, 140, 0.8);
          text-decoration: none;
          cursor: pointer;
        }

        .contact-email:hover {
          color: rgba(210, 180, 140, 1);
          text-decoration: underline;
        }

        .footer-divider {
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          margin: 40px 0;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
        }

        .footer-nav {
          display: flex;
          gap: 40px;
          color: white;
        }

        /* Animated Footer Links - EXACT same as header */
        .footer-link-animated {
          font-weight: bold;
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          display: flex;
          position: relative;
          overflow: hidden;
          text-transform: uppercase;
          text-decoration: none;
          font-size: 14px;
          letter-spacing: 0.5px;
        }

        .footer-link-animated .span-mother,
        .footer-link-animated .span-mother2 {
          display: flex;
          overflow: hidden;
        }

        .footer-link-animated .span-mother span {
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .footer-link-animated .span-mother2 {
          position: absolute;
          color: rgba(210, 180, 140, 0.9);
        }

        .footer-link-animated .span-mother2 span {
          transform: translateY(-1.2em);
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Hover Effect */
        .footer-link-animated:hover .span-mother span {
          transform: translateY(1.2em);
        }

        .footer-link-animated:hover .span-mother2 span {
          transform: translateY(0);
        }

        /* Delay each character - smoother progression */
        .footer-link-animated span:nth-child(1) { transition-delay: 0s; }
        .footer-link-animated span:nth-child(2) { transition-delay: 0.05s; }
        .footer-link-animated span:nth-child(3) { transition-delay: 0.1s; }
        .footer-link-animated span:nth-child(4) { transition-delay: 0.15s; }
        .footer-link-animated span:nth-child(5) { transition-delay: 0.2s; }
        .footer-link-animated span:nth-child(6) { transition-delay: 0.25s; }
        .footer-link-animated span:nth-child(7) { transition-delay: 0.3s; }
        .footer-link-animated span:nth-child(8) { transition-delay: 0.35s; }
        .footer-link-animated span:nth-child(9) { transition-delay: 0.4s; }
        .footer-link-animated span:nth-child(10) { transition-delay: 0.45s; }

        .footer-copyright {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
          letter-spacing: 0.3px;
        }

        @media (max-width: 1024px) {
          .footer-top {
            flex-direction: column;
            gap: 40px;
          }

          .footer-right {
            justify-content: flex-start;
          }

          .contact-section {
            text-align: left;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            padding: 50px 20px;
          }

          .footer-nav {
            flex-direction: column;
            gap: 15px;
          }

          .social-links {
            margin-top: 20px;
          }

          .footer-copyright {
            font-size: 12px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;