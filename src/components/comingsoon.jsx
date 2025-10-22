import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Activity, Apple, Brain } from "lucide-react";

export default function ComingNext() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="coming-next"
      className="position-relative text-white py-5 overflow-hidden"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(120deg, #242121ff, #b83030ff, #0a0a0a)",
        backgroundSize: "400% 400%",
        animation: "gradientFlow 12s ease infinite",
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
        {/* === Title === */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2
            className="fw-bold display-6 mb-3"
            style={{
              letterSpacing: "1px",
              textShadow: "0 0 25px rgba(255,60,60,0.4)",
            }}
          >
            What’s <em style={{ color: "#ff3c3c" }}>Coming Next</em>
          </h2>
          <p
            className="text-light mx-auto"
            style={{ maxWidth: "720px", opacity: 0.9 }}
          >
            We’re building a unified <strong>Wellnex Platform</strong> that
            combines <strong>fitness</strong>, <strong>nutrition</strong>,{" "}
            <strong>mental health</strong>, and <strong>diagnostics</strong> into
            one intelligent system — your all-in-one{" "}
            <em>digital wellness command center</em>.
          </p>
        </div>

        {/* === Coming Features Cards === */}
        <div className="row g-4 text-center">
          {[
            {
              icon: <Activity size={45} color="#ff3c3c" />,
              title: "Wearable Integration",
              desc: "Seamlessly connect smartwatches and bands to visualize your performance, heart rate, and progress live.",
            },
            {
              icon: <Apple size={45} color="#ff3c3c" />,
              title: "Nutrition & Meal Planning",
              desc: "AI-based personalized meal plans and macro tracking designed for your unique fitness goals.",
            },
            {
              icon: <Brain size={45} color="#ff3c3c" />,
              title: "Corporate Wellness Dashboards",
              desc: "Empower organizations with data-driven insights to enhance employee health and productivity.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="col-md-4"
              data-aos="zoom-in"
              data-aos-delay={200 * (i + 1)}
            >
              <div
                className="p-4 rounded-4 h-100 shadow-lg"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(6px)",
                  transition: "all 0.4s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = "rgba(255,60,60,0.15)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
                }
              >
                <div className="mb-3">{feature.icon}</div>
                <h5 className="fw-bold mb-2">{feature.title}</h5>
                <p className="text-light small mb-0">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* === CTA Button === */}
        <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="800">
          <a
            href="#"
            className="btn fw-semibold px-5 py-3 rounded-pill"
            style={{
              background:
                "linear-gradient(90deg, #ff3c3c 0%, #b71c1c 100%)",
              color: "white",
              fontSize: "1rem",
              boxShadow: "0 0 25px rgba(255,60,60,0.4)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 45px rgba(255,60,60,0.8)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 25px rgba(255,60,60,0.4)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Get Early Access
          </a>
        </div>
      </div>

      {/* === Animated Gradient Keyframes === */}
      <style>
        {`
          @keyframes gradientFlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </section>
  );
}
