import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="home"
      className="position-relative text-center text-white overflow-hidden"
      style={{ height: "100vh" }}
    >
      {/* === Background Video === */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          objectFit: "cover",
          filter: "brightness(55%) contrast(110%) saturate(120%)",
          zIndex: "-1",
        }}
      >
        <source src="assets/images/gym-video.mp4" type="video/mp4" />
      </video>

      {/* === Gradient Overlay === */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "linear-gradient(to bottom right, rgba(0,0,0,0.75), rgba(0,0,0,0.35))",
          zIndex: "-1",
        }}
      ></div>

      {/* === Hero Content === */}
      <div
        className="d-flex flex-column justify-content-center align-items-center h-100 px-3"
        data-aos="fade-up"
      >
        {/* === Headline === */}
        <h1
          className="fw-bold display-4 mb-3"
          style={{
            fontSize: "3.5rem",
            textShadow: "0 5px 30px rgba(0,0,0,0.6)",
            lineHeight: "1.3",
            animation: "slideInUp 1.5s ease",
          }}
        >
          Wellnex <em style={{ color: "#ff3c3c" }}>Systems</em> <br />
          <span style={{ fontWeight: 500, color: "#fff" }}>
            Wellness, Reimagined for the Next Generation
          </span>
        </h1>

        {/* === Subheadline === */}
        <p
          className="text-light mb-4"
          style={{
            maxWidth: "700px",
            fontSize: "1.05rem",
            lineHeight: "1.7",
            color: "rgba(255,255,255,0.85)",
          }}
        >
          A unified digital ecosystem empowering individuals, gyms, and wellness providers through cutting-edge HealthTech and fitness innovation.
        </p>

        {/* === CTA Buttons === */}
        <div className="d-flex gap-3 flex-wrap justify-content-center">
          <a
            href="#join"
            className="btn fw-semibold px-5 py-2 rounded-pill"
            style={{
              background: "linear-gradient(90deg, #ad0c0cff 0%, #971f1fff 100%)",
              color: "white",
              fontSize: "1rem",
              letterSpacing: "0.5px",
              boxShadow: "0 0 25px rgba(255,60,60,0.5)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = "0 0 45px rgba(255,60,60,0.9)";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = "0 0 25px rgba(255,60,60,0.5)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Join the Movement
          </a>
          <a
            href="#apps"
            className="btn btn-outline-light fw-semibold px-5 py-2 rounded-pill"
            style={{
              fontSize: "1rem",
              letterSpacing: "0.5px",
              borderWidth: "2px",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background =
                "rgba(255,255,255,0.1)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Explore Our Apps
          </a>
        </div>
      </div>

      {/* === Scroll Indicator === */}
      <div
        className="position-absolute bottom-3 start-50 translate-middle-x"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <div
          style={{
            width: "30px",
            height: "50px",
            border: "2px solid white",
            borderRadius: "25px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "white",
              position: "absolute",
              top: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              animation: "scrollDown 1.5s infinite",
            }}
          ></div>
        </div>
      </div>

      {/* === Animations === */}
      <style>
        {`
          @keyframes slideInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes scrollDown {
            0% { top: 10px; opacity: 1; }
            50% { top: 25px; opacity: 0.5; }
            100% { top: 10px; opacity: 1; }
          }
        `}
      </style>
    </section>
  );
}
