import React, { useState } from "react";
import { Star, Mail, Phone, MapPin, HeartPulse } from "lucide-react";

export default function StayConnected() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! You’ve joined our waitlist successfully.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="stay-connected"
      className="py-5 position-relative"
      style={{
        background: "#fff",
        overflow: "hidden",
        padding: "80px 20px",
      }}
    >
      {/* Background Gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top right, rgba(220,53,69,0.08), transparent 70%), radial-gradient(circle at bottom left, rgba(183,28,28,0.05), transparent 70%)",
          zIndex: 0,
        }}
      ></div>

      <div
        className="container position-relative"
        style={{
          zIndex: 1,
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Centered Heading */}
        <h2
          className="fw-bold mb-3"
          style={{
            fontSize: "2.8rem",
            color: "#111",
            lineHeight: "1.2",
          }}
        >
          Stay <span style={{ color: "#dc3545" }}>Connected</span> with{" "}
          <span style={{ color: "#111" }}>Wellnex</span>
        </h2>

        <p
          className="text-muted mb-5"
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.7",
            maxWidth: "650px",
            margin: "0 auto",
          }}
        >
          Be the first to experience <strong>Wellnex</strong> — a unified platform for{" "}
          <strong>fitness</strong>, <strong>nutrition</strong>, and{" "}
          <strong>wellness diagnostics</strong>. Join our waitlist to unlock early access and personalized health insights!
        </p>

        {/* Ratings */}
        <div
          className="d-flex justify-content-center align-items-center mb-4"
          style={{ gap: "6px" }}
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={22} color="#dc3545" fill="#dc3545" />
          ))}
          <span className="ms-2 fw-semibold text-muted" style={{ fontSize: "0.95rem" }}>
            Rated 4.9/5 by early users
          </span>
        </div>

        {/* Contact Info + Form */}
        <div
          className="d-flex flex-wrap align-items-start justify-content-center gap-5"
          style={{ marginTop: "40px" }}
        >
          {/* Contact Info Card */}
          <div
            style={{
              flex: "1 1 40%",
              background: "rgba(255,255,255,0.9)",
              border: "1px solid rgba(220,53,69,0.15)",
              boxShadow: "0 8px 25px rgba(220,53,69,0.1)",
              borderRadius: "16px",
              padding: "30px",
              textAlign: "left",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <h4 className="fw-bold mb-3" style={{ color: "#111" }}>
              Get in Touch
            </h4>
            <p className="text-muted mb-4" style={{ fontSize: "1rem" }}>
              Have a question? Reach out to us anytime — we’d love to hear from you!
            </p>

            <p className="d-flex align-items-center mb-3">
              <Mail size={18} color="#dc3545" className="me-2" /> support@wellnex.ai
            </p>
            <p className="d-flex align-items-center mb-3">
              <Phone size={18} color="#dc3545" className="me-2" /> +92 300 1234567
            </p>
            <p className="d-flex align-items-center mb-3">
              <MapPin size={18} color="#dc3545" className="me-2" /> Karachi, Pakistan
            </p>

            <div className="mt-4">
              <button
                className="btn fw-semibold px-4 py-2 me-3"
                style={{
                  background: "linear-gradient(90deg, #dc3545 0%, #b71c1c 100%)",
                  color: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0 6px 20px rgba(220,53,69,0.3)",
                  transition: "all 0.3s ease",
                }}
              >
                Join Waitlist
              </button>
              <button
                className="btn fw-semibold px-4 py-2"
                style={{
                  border: "2px solid #dc3545",
                  color: "#dc3545",
                  borderRadius: "10px",
                  background: "transparent",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "#dc3545";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(220,53,69,0.4)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#dc3545";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Waitlist Form Card */}
          <form
            onSubmit={handleSubmit}
            style={{
              flex: "1 1 40%",
              background: "linear-gradient(145deg, rgba(255,255,255,0.97), rgba(250,250,250,0.95))",
              border: "1px solid rgba(220,53,69,0.15)",
              boxShadow: "0 10px 25px rgba(220,53,69,0.1)",
              borderRadius: "16px",
              padding: "30px",
              textAlign: "left",
            }}
          >
            <div className="text-center mb-3">
              <HeartPulse size={32} color="#dc3545" className="mb-2" />
              <h4 className="fw-bold" style={{ color: "#111" }}>
                Join Our Waitlist
              </h4>
              <p className="text-muted mb-0" style={{ fontSize: "0.95rem" }}>
                Get early access to Wellnex and start your wellness journey today.
              </p>
            </div>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="form-control mb-3"
              value={form.name}
              onChange={handleChange}
              required
              style={{
                borderRadius: "10px",
                border: "1px solid rgba(220,53,69,0.2)",
                padding: "10px 14px",
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="form-control mb-3"
              value={form.email}
              onChange={handleChange}
              required
              style={{
                borderRadius: "10px",
                border: "1px solid rgba(220,53,69,0.2)",
                padding: "10px 14px",
              }}
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              className="form-control mb-3"
              value={form.message}
              onChange={handleChange}
              style={{
                borderRadius: "10px",
                border: "1px solid rgba(220,53,69,0.2)",
                padding: "10px 14px",
                resize: "none",
              }}
            ></textarea>

            <button
              type="submit"
              className="btn fw-semibold w-100 py-2"
              style={{
                background: "linear-gradient(90deg, #dc3545 0%, #b71c1c 100%)",
                color: "#fff",
                borderRadius: "10px",
                boxShadow: "0 6px 20px rgba(220,53,69,0.35)",
                transition: "all 0.3s ease",
              }}
            >
              Join Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
