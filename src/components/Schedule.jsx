import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Schedule() {
  const [filter, setFilter] = useState("All");

  const schedule = [
    {
      class: "Strength & Conditioning",
      day: "Monday",
      time: "10:00AM - 11:30AM",
      trainer: "William",
      type: "Morning",
      icon: "/assets/images/strength-icon.png",
    },
    {
      class: "Cardio & Endurance",
      day: "Tuesday",
      time: "5:00PM - 6:30PM",
      trainer: "Emma",
      type: "Evening",
      icon: "/assets/images/cardio-icon.png",
    },
    {
      class: "Yoga & Flexibility",
      day: "Wednesday",
      time: "8:00AM - 9:00AM",
      trainer: "Sophia",
      type: "Morning",
      icon: "/assets/images/yoga-icon.png",
    },
    {
      class: "CrossFit Challenge",
      day: "Thursday",
      time: "6:00PM - 7:30PM",
      trainer: "James",
      type: "Evening",
      icon: "/assets/images/crossfit-icon.png",
    },
    {
      class: "Muscle Training",
      day: "Friday",
      time: "2:00PM - 3:30PM",
      trainer: "Paul",
      type: "Afternoon",
      icon: "/assets/images/muscle-icon.png",
    },
  ];

  const filters = ["All", "Morning", "Afternoon", "Evening"];

  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  const filteredSchedule =
    filter === "All" ? schedule : schedule.filter((s) => s.type === filter);

  return (
    <section
      id="schedule"
      className="py-5 position-relative"
      style={{
        backgroundImage: "url('/assets/images/4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      {/* Transparent Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(to bottom right, rgba(49, 35, 35, 0.75), rgba(51, 39, 39, 0.4))",
          backdropFilter: "blur(1px)",
          zIndex: -1,
        }}
      ></div>

      <div className="container">
        {/* Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold display-6 text-dark">
            Class <em className="text-danger">Schedule</em>
          </h2>
          <p className="text-light w-75 mx-auto">
            Plan your wellness journey with our interactive timetable. From
            strength to mindfulness — find your ideal session.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className="d-flex justify-content-center gap-3 flex-wrap mb-5"
          data-aos="zoom-in"
        >
          {filters.map((tab) => (
            <button
              key={tab}
              className={`btn fw-semibold rounded-pill px-4 py-2 ${
                filter === tab ? "btn-danger text-white" : "btn-outline-danger"
              }`}
              style={{
                transition: "all 0.3s ease",
                boxShadow:
                  filter === tab
                    ? "0 8px 20px rgba(220,53,69,0.35)"
                    : "0 0 0 rgba(0,0,0,0)",
                transform: filter === tab ? "scale(1.08)" : "scale(1)",
              }}
              onClick={() => setFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Schedule Cards */}
        <div className="row g-4 justify-content-center">
          {filteredSchedule.map((s, i) => (
            <div
              key={i}
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div
                className="p-4 text-center rounded-4 h-100"
                style={{
                  background: "rgba(255, 255, 255, 0.96)",
                  border: "1px solid rgba(220,53,69,0.1)",
                  backdropFilter: "blur(10px)",
                  boxShadow:
                    "0 8px 25px rgba(0,0,0,0.08), 0 4px 10px rgba(220,53,69,0.1)",
                  transition: "all 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 40px rgba(220,53,69,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  className="d-flex justify-content-center align-items-center mb-3"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, rgba(220,53,69,0.25), rgba(255,255,255,0.2))",
                    boxShadow: "0 0 25px rgba(220,53,69,0.25)",
                    margin: "0 auto",
                  }}
                >
                  <img
                    src={s.icon}
                    alt={s.class}
                    width="42"
                    height="42"
                    style={{
                      filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.25))",
                    }}
                  />
                </div>

                <h5 className="fw-bold text-danger mb-2">{s.class}</h5>
                <p className="text-secondary mb-1">
                  <strong>Day:</strong> {s.day}
                </p>
                <p className="text-secondary mb-1">
                  <strong>Time:</strong> {s.time}
                </p>
                <p className="fw-semibold text-dark mb-0">
                  <span className="text-danger">Trainer:</span> {s.trainer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-5" data-aos="zoom-in">
          <a
            href="#contact"
            className="btn px-5 py-2 rounded-pill fw-semibold text-white"
            style={{
              background: "linear-gradient(90deg, #dc3545 0%, #b71c1c 100%)",
              boxShadow: "0 8px 25px rgba(220,53,69,0.35)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 10px 30px rgba(220,53,69,0.45)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 8px 25px rgba(220,53,69,0.35)")
            }
          >
            Join a Class
          </a>
        </div>
      </div>
    </section>
  );
}
