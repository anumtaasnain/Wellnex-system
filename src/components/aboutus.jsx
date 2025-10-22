import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const aboutSections = [
  {
    title: "Our Philosophy",
    text: "At Wellnex Systems, we believe the future of health and fitness lies in intelligent, integrated, and deeply human-centered technology.",
    icon: "assets/images/leadership.png",
  },
  {
    title: "Our Mission",
    text: "Our platform elevates how people connect with their bodies, minds, and communities—anytime, anywhere, empowering holistic wellness.",
    icon: "assets/images/rating.png",
  },
  {
    title: "Our Vision",
    text: "We’re not just building apps. We’re building a movement that transforms wellness for the next generation.",
    icon: "assets/images/visionary.png",
  },
];

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      className="py-5 position-relative"
      style={{ background: "#fdfdfd", overflow: "hidden" }}
    >
      {/* Subtle gradient overlays for modern vibe */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          background:
            "radial-gradient(circle at top right, rgba(255,90,90,0.05), transparent 70%), radial-gradient(circle at bottom left, rgba(183,28,28,0.04), transparent 70%)",
          zIndex: 0,
        }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* === Heading === */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">
            About <em className="text-danger">Wellnex</em>
          </h2>
          <p
            className="text-muted w-75 mx-auto mt-3"
            style={{ fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            Where Wellness Meets What’s Next. At Wellnex Systems, we combine
            cutting-edge technology with human-centered design to redefine how
            people connect with their fitness, wellness, and community.
          </p>
        </div>

        {/* === About Cards === */}
        <div className="row g-4 justify-content-center">
          {aboutSections.map((section, i) => (
            <div
              key={i}
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <div
                className="p-5 text-center rounded-5 shadow-lg h-100 about-card"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(250,250,250,0.95))",
                  border: "1px solid rgba(220,53,69,0.1)",
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                  boxShadow: "0 15px 35px rgba(220,53,69,0.08)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-12px)";
                  e.currentTarget.style.boxShadow =
                    "0 25px 50px rgba(220,53,69,0.15)";
                  e.currentTarget.querySelector(".pulse-icon").style.animation =
                    "pulse 1.5s infinite";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 35px rgba(220,53,69,0.08)";
                  e.currentTarget.querySelector(".pulse-icon").style.animation =
                    "none";
                }}
              >
                <div
                  className="pulse-icon d-flex justify-content-center align-items-center mb-4 mx-auto"
                  style={{
                    width: "95px",
                    height: "95px",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(220,53,69,0.12), rgba(220,53,69,0.03))",
                    boxShadow: "0 0 25px rgba(220,53,69,0.15)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <img
                    src={section.icon}
                    alt={section.title}
                    width="48"
                    height="48"
                    style={{
                      transition: "transform 0.4s ease",
                      filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.15))",
                    }}
                  />
                </div>
                <h5
                  className="fw-bold text-danger mb-3"
                  style={{ fontSize: "1.25rem" }}
                >
                  {section.title}
                </h5>
                <p className="text-secondary mb-0" style={{ fontSize: "1rem" }}>
                  {section.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* === Closing Statement === */}
        <div
          className="text-center mt-5"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p
            className="text-muted w-75 mx-auto"
            style={{ fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            Wellnex isn’t just about apps. We’re shaping a movement that
            transforms wellness, empowers communities, and inspires a healthier
            generation.
          </p>
        </div>
      </div>

      {/* Pulse Animation */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(220,53,69,0.3); }
            50% { transform: scale(1.1); box-shadow: 0 0 0 15px rgba(220,53,69,0); }
            100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(220,53,69,0); }
          }
        `}
      </style>
    </section>
  );
} 