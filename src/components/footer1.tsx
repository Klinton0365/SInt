'use client';
import React from 'react';
import Link from 'next/link';
import { Instagram, Twitter, Facebook } from 'lucide-react';

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
                <path d="M8 32V8H24L32 16V32M24 8V16H32" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" fill="none"/>
              </svg>
              <span>ORNAVA</span>
            </div>

            {/* Description */}
            <p className="footer-description">
              Ornava designs timeless, functional spaces with aesthetic clarity and material harmony.
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
                <a href="mailto:design@ornava.com" className="contact-item contact-email">
                  design@ornava.com
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
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <p className="footer-copyright">Copyright 2026 by DuruThemes</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          position: relative;
          width: 100%;
          min-height: 500px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          margin-top: 100px;
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
          padding: 80px 40px;
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
        }

        .footer-nav a {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
        }

        .footer-nav a:hover {
          color: rgba(210, 180, 140, 0.9);
        }

        .footer-copyright {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
          letter-spacing: 0.3px;
        }

        /* Scroll to top button */
        .scroll-to-top {
          position: fixed;
          bottom: 40px;
          right: 40px;
          width: 50px;
          height: 50px;
          background: transparent;
          border: 1px solid rgba(210, 180, 140, 0.6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: rgba(210, 180, 140, 0.8);
          transition: all 0.3s ease;
          z-index: 999;
        }

        .scroll-to-top:hover {
          background: rgba(210, 180, 140, 0.1);
          border-color: rgba(210, 180, 140, 0.9);
          color: rgba(210, 180, 140, 1);
          transform: translateY(-3px);
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