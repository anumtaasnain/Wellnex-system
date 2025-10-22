import React, { useEffect, useRef, useState } from "react";

export default function Footer() {
  const footerRef = useRef(null);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.3 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer
        ref={footerRef}
        className="footer text-center text-white py-4 position-relative"
        style={{
        background: "linear-gradient(120deg, #242121ff, #b83030ff, #0a0a0a)",
        backgroundSize: "400% 400%",
        animation: "gradientFlow 12s ease infinite",
          overflow: "hidden",
          opacity: 0,
          transform: "translateY(40px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
      {/* === Background Overlay Glow === */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(255,60,60,0.15), transparent 70%)",
          zIndex: 0,
        }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
          {/* Logo */}
          <div className="logo-wrapper mb-3">
            <h2 className="footer-logo mb-1">
              Wellnex <span style={{ color: "#e63946" }}>Systems</span>
            </h2>
            <p className="tagline mb-4">
              Empowering <span style={{ color: "#e63946" }}>Wellness</span> Through Technology
            </p>
          </div>

          {/* Social Icons */}
          <div className="d-flex justify-content-center gap-3 mb-4">
            {["facebook", "twitter", "linkedin", "instagram"].map((icon, i) => (
              <a
                key={i}
                href={`https://${icon}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon"
              >
                <i className={`fa fa-${icon}`}></i>
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="footer-info">
            <p> info@wellnexsystems.com</p>
            <p>
              {" "}
              <a
                href="https://www.wellnexsystems.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                www.wellnexsystems.com
              </a>
            </p>
          </div>

          {/* Divider */}
          <div className="footer-divider"></div>

          {/* Copyright */}
          <p className="footer-copy">
            © 2025 <span style={{ color: "#fff" }}>Wellnex Systems</span>. All rights reserved.
          </p>
        </div>

        <style>
          {`
            .footer.visible {
              opacity: 1 !important;
              transform: translateY(0) !important;
            }

            .footer-glow {
              position: absolute;
              bottom: -120px;
              left: 50%;
              width: 600px;
              height: 300px;
              transform: translateX(-50%);
              background: radial-gradient(circle, rgba(230, 57, 71, 0.92), transparent 70%);
              filter: blur(100px);
              animation: glowMove 8s infinite ease-in-out alternate;
            }

            @keyframes glowMove {
              0% { transform: translate(-50%, 0) scale(1); opacity: 0.7; }
              100% { transform: translate(-48%, -10px) scale(1.1); opacity: 1; }
            }

            .footer-logo {
              font-size: 1.8rem;
              font-weight: 700;
              letter-spacing: 1px;
              color: #fff;
            }

            .tagline {
              font-size: 1rem;
              color: #ddd;
              font-weight: 400;
            }

            .footer-icon {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              width: 42px;
              height: 42px;
              border-radius: 50%;
              background: rgba(255, 255, 255, 0.05);
              color: #fff;
              font-size: 1.2rem;
              border: 1px solid rgba(255, 255, 255, 0.1);
              transition: all 0.3s ease;
            }

            .footer-icon:hover {
              background: rgba(230, 57, 71, 0.87);
              color: #fff;
              transform: translateY(-4px);
              box-shadow: 0 0 15px rgba(230,57,70,0.4);
            }

            .footer-info {
              color: #ccc;
              font-size: 0.95rem;
              line-height: 1.8;
            }

            .footer-link {
              color: #e63946;
              text-decoration: none;
              transition: color 0.3s ease;
            }

            .footer-link:hover {
              color: #fff;
              text-shadow: 0 0 8px rgba(230,57,70,0.8);
            }

            .footer-divider {
              width: 65%;
              height: 1px;
              background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
              margin: 25px auto;
            }

            .footer-copy {
              font-size: 0.85rem;
              color: #aaa;
              margin-bottom: 0;
            }

            /* Back to Top */
            .back-to-top {
              position: fixed;
              bottom: 30px;
              right: 30px;
              width: 50px;
              height: 50px;
              border-radius: 50%;
              border: none;
              background: linear-gradient(135deg, #110f0fff, #e42b2bff);
              color: white;
              font-size: 1.3rem;
              cursor: pointer;
              box-shadow: 0 0 15px rgba(235, 28, 45, 0.9);
              z-index: 1000;
              transition: all 0.3s ease;
            }

            .back-to-top:hover {
              transform: scale(1.1);
              box-shadow: 0 0 25px rgba(230,57,70,0.6);
            }

            @media (max-width: 768px) {
              .footer-logo { font-size: 1.5rem; }
              .tagline { font-size: 0.9rem; }
              .footer-icon { width: 38px; height: 38px; font-size: 1rem; }
              .back-to-top { bottom: 20px; right: 20px; width: 45px; height: 45px; }
            }
          `}
        </style>
      </footer>

      {/* Back-to-Top Button */}
      {showTopBtn && (
        <button onClick={scrollToTop} className="back-to-top">
          ↑
        </button>
      )}
    </>
  );
}