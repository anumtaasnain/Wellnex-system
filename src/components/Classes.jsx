import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Classes() {
  const [activeTab, setActiveTab] = useState(0);

  const classes = [
    {
      title: "Strength & Conditioning",
      img: "assets/images/training-image-01.jpg",
      icon: "assets/images/strength-icon.png", // 🏋️ weightlifting icon
      desc: "Build endurance, power, and balance with expert-guided strength training that improves your overall fitness performance.",
    },
    {
      title: "Cardio & Endurance",
      img: "assets/images/training-image-03.jpg",
      icon: "assets/images/cardio-icon.png", // ❤️ cardio heart icon
      desc: "Boost stamina and heart health through intensive cardio workouts designed to energize your body and mind.",
    },
    {
      title: "Yoga & Flexibility",
      img: "assets/images/training-image-02.jpg",
      icon: "assets/images/yoga-icon.png", // 🧘 yoga pose icon
      desc: "Enhance your flexibility and mindfulness through calming yoga sessions guided by experienced instructors.",
    },
    {
      title: "CrossFit Challenge",
      img: "assets/images/training-image-04.jpg",
      icon: "assets/images/crossfit-icon.png", // 🔥 dumbbell or kettlebell icon
      desc: "Experience the ultimate full-body challenge with CrossFit-inspired workouts that push your limits safely and effectively.",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section id="classes" className="py-5 bg-light position-relative">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">
            Our <em className="text-danger">Classes</em>
          </h2>
          <p className="text-muted w-75 mx-auto">
            Train smarter with our diverse range of professional fitness
            programs designed to fit your goals and lifestyle.
          </p>
        </div>

        {/* Tabs & Content */}
        <div className="row align-items-stretch g-4">
          {/* Left Tabs */}
          <div className="col-lg-4" data-aos="fade-right">
            <ul className="list-group shadow-lg rounded-4 overflow-hidden h-97">
              {classes.map((c, index) => (
                <li
                  key={index}
                  className={`list-group-item d-flex align-items-center justify-content-start py-4 px-3 ${
                    activeTab === index
                      ? "active bg-danger text-white shadow-lg"
                      : "bg-white"
                  }`}
                  style={{
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    transform: activeTab === index ? "scale(1.02)" : "scale(1)",
                    border: "none",
                  }}
                  onClick={() => setActiveTab(index)}
                >
                  <div
                    className="d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor:
                        activeTab === index ? "rgba(255,255,255,0.2)" : "#f8f9fa",
                      borderRadius: "50%",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <img
                      src={c.icon}
                      alt={c.title}
                      width="28"
                      height="28"
                      style={{
                        filter:
                          activeTab === index ? "brightness(200%)" : "none",
                      }}
                    />
                  </div>
                  <span className="fw-semibold fs-6">{c.title}</span>
                </li>
              ))}
               <div className="text-center mt-4" data-aos="zoom-in">
              <a
                href="#schedule"
                className="btn btn-outline-danger rounded-pill  fw-semibold mb-3"
                style={{
                  transition: "all 0.3s ease",
                  boxShadow: "0 3px 10px rgba(255, 0, 0, 0.15)",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(255, 0, 0, 0.35)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 3px 10px rgba(255, 0, 0, 0.15)")
                }
              >
                View All Schedules
              </a>
            </div>
            </ul>

           
          </div>

          {/* Right Content */}
          <div
            className="col-lg-8"
            data-aos="fade-left"
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <div
              className="card shadow-lg border-0 rounded-4 h-100"
              style={{
                transition: "all 0.5s ease",
                overflow: "hidden",
              }}
            >
              <img
                src={classes[activeTab].img}
                alt={classes[activeTab].title}
                className="card-img-top"
                style={{
                  height: "300px",
                  objectFit: "cover",
                  transition: "transform 0.6s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
              <div className="card-body text-start p-4">
                <h4 className="fw-bold text-danger mb-3">
                  {classes[activeTab].title}
                </h4>
                <p className="text-muted mb-4">{classes[activeTab].desc}</p>
                <a
                  href="#schedule"
                  className="btn btn-danger px-6 rounded-pill"
                >
                  View Schedule
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
