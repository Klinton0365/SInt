'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  mainHeading?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  linkUrl?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title = "About",
  subtitle = "Archipix",
  mainHeading = "Archipix is a team of experienced architects and interior designers",
  description = "who are passionate about creating beautiful, functional spaces. We believe that good design should be accessible to everyone, and we work hard to make sure that our client's vision become reality.",
  imageSrc = "/image/pexels-jvdm-1457842.jpg",
  imageAlt = "Modern architectural design",
  linkUrl = "/about"
}) => {
  return (
    <section id="about-two" className="about-section">
      <div className="container">
        {/* Title Row */}
        <div className="title-row">
          <div className="title-column">
            <div className="section-title">
              <div className="heading-animation">
                <h2>
                  {title} <span>/</span>
                  <br />
                  {subtitle}
                </h2>
              </div>
            </div>
          </div>
          <div className="button-column">
            <Link href={linkUrl}>
              <div className="circle-button">
                <div className="arrow">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Content Row */}
        <div className="content-row">
          <div className="image-column">
            <div className="about-bg-wrapper">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1200}
                height={700}
                className="about-image"
              />
            </div>
          </div>
          <div className="text-column">
            <div className="about-content-wrapper">
              <div className="heading-animation">
                <h3>{mainHeading}</h3>
              </div>
              <div className="p-animation">
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          padding: 100px 0;
          background: #fff;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Title Row */
        .title-row {
          display: grid;
          grid-template-columns: 75% 25%;
          align-items: center;
          margin-bottom: 60px;
        }

        .title-column {
          padding-right: 40px;
        }

        .section-title h2 {
          font-size: 75px;
          font-weight: 500;
          line-height: 80px;
          letter-spacing: -1px;
          color: rgb(23, 23, 23);
          margin: 0;
        }

        .section-title h2 span {
          color: rgb(23, 23, 23);
        }

        .button-column {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .circle-button {
          width: 100px;
          height: 100px;
          border: 1px solid rgb(23, 23, 23);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .circle-button:hover {
          background: rgb(23, 23, 23);
          transform: scale(1.05);
        }

        .circle-button:hover .arrow {
          color: #fff;
        }

        .arrow {
          color: rgb(23, 23, 23);
          transition: color 0.3s ease;
        }

        .arrow svg {
          width: 24px;
          height: 24px;
        }

        /* Content Row */
        .content-row {
          display: grid;
          grid-template-columns: 66.66% 25%;
          gap: 2.33%;
          align-items: start;
        }

        .image-column {
          width: 100%;
          margin-left: 150px;
        }

        .about-bg-wrapper {
          width: calc(100% - 200px);
          position: relative;
          overflow: hidden;
          border-radius: 8px;
        }

        .about-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        .text-column {
          padding-top: 0;
        }

        .about-content-wrapper h3 {
          color: rgb(99, 99, 99);
          font-size: 26px;
          line-height: 36px;
          margin: 0 0 30px 0;
          font-weight: 400;
        }

        .about-content-wrapper p {
          font-size: 18px;
          margin-top: 50px;
          text-align: justify;
          padding-right: 15px;
          color: rgb(99, 99, 99);
          line-height: 1.6;
          margin: 0;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .title-row {
            grid-template-columns: 70% 30%;
            margin-bottom: 40px;
          }

          .content-row {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .image-column {
            margin-left: 0;
          }

          .about-bg-wrapper {
            width: 100%;
          }

          .section-title h2 {
            font-size: 60px;
            line-height: 65px;
          }

          .circle-button {
            width: 80px;
            height: 80px;
          }
        }

        @media (max-width: 768px) {
          .title-row {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .button-column {
            justify-content: flex-start;
          }

          .section-title h2 {
            font-size: 48px;
            line-height: 52px;
          }

          .about-content-wrapper h3 {
            font-size: 22px;
            line-height: 32px;
          }

          .about-content-wrapper p {
            font-size: 16px;
            margin-top: 30px;
            padding-right: 0;
          }

          .about-section {
            padding: 60px 0;
          }

          .circle-button {
            width: 70px;
            height: 70px;
          }

          .arrow svg {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;