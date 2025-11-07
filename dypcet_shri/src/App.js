import React, { useState } from "react";
import "./App.css";

function App() {

  const [showForm, setShowForm] = useState(false);

  // APPLY FORM STATES
  const [applyName, setApplyName] = useState("");
  const [applyEmail, setApplyEmail] = useState("");
  const [applyPhone, setApplyPhone] = useState("");
  const [applyBranch, setApplyBranch] = useState("");
  const [applyMessage, setApplyMessage] = useState("");

  // CONTACT FORM STATES
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  // APPLY SUBMIT HANDLER
  const handleApplySubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: applyName,
        email: applyEmail,
        phone: applyPhone,
        branch: applyBranch,
        message: applyMessage
      }),
    });
    const data = await res.json();
    alert(data.message);
    setShowForm(false);
  };

  // CONTACT SUBMIT HANDLER
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: contactName,
        email: contactEmail,
        message: contactMessage
      }),
    });
    const data = await res.json();
    alert(data.message);
    setContactName(""); setContactEmail(""); setContactMessage("");
  };

  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">DYPCET</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#academics">Academics</a></li>
          <li><a href="#exam">Exam Cell</a></li>
          <li><a href="#research">Research</a></li>
          <li><a href="#office">E-Office</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button className="apply-btn" onClick={() => setShowForm(true)}>
          Apply Now
        </button>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <h1>Welcome to D. Y. Patil College of Engineering & Technology</h1>
        <p>Empowering Students to Build the Future</p>
        <button className="hero-apply-btn" onClick={() => setShowForm(true)}>
          Apply for Admission
        </button>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Us</h2>
        <p>
          Dr. D. Y. Patil College of Engineering & Technology (DYPCET) is a premier
          institution dedicated to academic excellence, innovation, and industry-based learning.
        </p>
        <p>
          Our campus provides advanced laboratories, research centers, and skilled faculty to guide students
          toward becoming innovators, leaders, and future-ready professionals.
        </p>
      </section>

      {/* ACADEMICS */}
      <section id="academics" className="section">
        <h2>Academics</h2>
        <p>
          Explore our departments designed to empower students with strong technical and professional foundations.
        </p>

        <div className="branches-container">
          {[
            { name: "Computer Science & Engineering (CSE)", details: "Software Development, AI, Cloud, Cybersecurity, Full-Stack Engineering." },
            { name: "Artificial Intelligence & Machine Learning (AIML)", details: "Deep Learning, Neural Networks, Automation & Smart Decision Systems." },
            { name: "Data Science (DS)", details: "Big Data, Statistics, ML Analytics, Predictive Analysis, Business Intelligence." },
            { name: "Electronics & Telecommunication (ENTC)", details: "Embedded Systems, IoT, Wireless Networks, VLSI & Communication Systems." },
            { name: "Mechanical Engineering", details: "Manufacturing, Robotics, Automotive Systems, CAD/CAM, Thermal Sciences." },
            { name: "Civil Engineering", details: "Structural Design, Surveying, Construction Materials & Environmental Engineering." }
          ].map((branch, index) => (
            <div key={index}
              className={`branch-card ${window.activeCard === index ? "active" : ""}`}
              onClick={() => {
                window.activeCard = window.activeCard === index ? null : index;
                document.querySelectorAll('.branch-card').forEach((card, i) => {
                  if (i !== index) card.classList.remove("active");
                });
                document.querySelectorAll('.branch-card')[index].classList.toggle("active");
              }}>
              <h3>{branch.name}</h3>
              <p className="branch-details">{branch.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXAM CELL */}
      <section id="exam" className="section">
        <h2>Exam Cell</h2>
        <p>The Examination Cell ensures fair and transparent conduct of examinations and assessments.</p>
        <div className="exam-board">
          <div className="notice-box">
            <h3>Latest Announcements</h3>
            <ul>
              <li>📌 Mid-Semester Exam Time-Table Released</li>
              <li>📌 Revaluation Form Submission Open</li>
              <li>📌 Hall Tickets Available on Student Portal</li>
              <li>📌 Practical Exam Schedule Updated</li>
            </ul>
          </div>
          <div className="exam-actions">
            <button>Download Time Table</button>
            <button>Download Hall Ticket</button>
            <button>Revaluation Form</button>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section id="research" className="section">
        <h2>Research & Innovation</h2>
        <p>We promote advanced research to solve real-world challenges.</p>
        <div className="research-grid">
          <div className="research-card"><h3>🔬 Innovation Lab</h3><p>Prototype development & Robotics innovation hub.</p></div>
          <div className="research-card"><h3>📡 IoT & Embedded Lab</h3><p>Wireless Smart Devices & Communication R&D.</p></div>
          <div className="research-card"><h3>🤖 AI & Data Science Center</h3><p>Machine Learning & Computer Vision Projects.</p></div>
          <div className="research-card"><h3>🧪 Material Testing Lab</h3><p>Advanced Structural & Composition Research.</p></div>
        </div>
      </section>

      {/* E OFFICE */}
      <section id="office" className="section">
        <h2>E-Office</h2>
        <p>Access Student Documents & Administrative Services Online.</p>
        <div className="office-grid">
          <div className="office-card">Bonafide Certificate</div>
          <div className="office-card">Fee Receipt Download</div>
          <div className="office-card">Scholarship Portal</div>
          <div className="office-card">Hostel Form</div>
          <div className="office-card">Grievance Cell</div>
          <div className="office-card">Document Verification</div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>

        <div className="contact-container">
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <input type="text" placeholder="Your Name" value={contactName} onChange={(e)=>setContactName(e.target.value)} required />
            <input type="email" placeholder="Your Email" value={contactEmail} onChange={(e)=>setContactEmail(e.target.value)} required />
            <textarea rows="4" placeholder="Your Message" value={contactMessage} onChange={(e)=>setContactMessage(e.target.value)}></textarea>
            <button type="submit">Send Message</button>
          </form>

          <div className="map-box">
            <iframe title="college-map" src="https://www.google.com/maps/embed?pb=!1m18..." allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} DYPCET | All Rights Reserved.</p>
        <p>Developed with ❤️ for Students & Education</p>
      </footer>

      {/* APPLY FORM MODAL */}
      {showForm && (
        <div className="form-overlay">
          <div className="form-box">
            <h2>Admission Form</h2>

            <form onSubmit={handleApplySubmit}>
              <input type="text" placeholder="Full Name" value={applyName} onChange={(e)=>setApplyName(e.target.value)} required />
              <input type="email" placeholder="Email Address" value={applyEmail} onChange={(e)=>setApplyEmail(e.target.value)} required />
              <input type="tel" placeholder="Phone Number" value={applyPhone} onChange={(e)=>setApplyPhone(e.target.value)} required />
              <input type="text" placeholder="Preferred Branch" value={applyBranch} onChange={(e)=>setApplyBranch(e.target.value)} required />
              <textarea rows="3" placeholder="Message (Optional)" value={applyMessage} onChange={(e)=>setApplyMessage(e.target.value)} />
              <button type="submit" className="submit-btn">Submit Application</button>
            </form>

            <button className="close-btn" onClick={() => setShowForm(false)}>Close</button>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
