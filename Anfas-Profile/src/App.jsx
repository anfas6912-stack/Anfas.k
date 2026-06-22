import "./App.css";

function App() {
  const skills = {
    programming: ["JavaScript", "Python", "C"],
    frontend: ["HTML", "CSS", "React", "Tailwind CSS"],
    backend: ["Node.js", "Express.js"],
    databases: ["MySQL", "Supabase", "SQLite"],
    tools: ["Git", "GitHub", "VS Code", "Postman"],
    soft: ["Communication", "Teamwork", "Problem Solving", "Time Management"],
  };

  const projects = [
    {
      name: "BillSwift",
      description:
        "A mobile billing application supporting UPI QR payments, shop management, and sub-user roles.",
      tech: "React Native / React, Node.js, Supabase",
      features: [
        "Billing system for shops",
        "UPI QR payment support",
        "Sub-user management",
        "Business tracking",
      ],
      github: "#",
      demo: "#",
    },
    {
      name: "LocalDealz",
      description:
        "A local deals discovery platform that helps users find nearby offers, businesses, and promotions.",
      tech: "React, Node.js, Supabase",
      features: [
        "Browse local deals",
        "Business listings",
        "Offer management",
        "Location-based discovery",
      ],
      github: "#",
      demo: "#",
    },
    {
      name: "Mentora AI",
      description:
        "An AI-powered educational assistant platform for learning guidance and academic support.",
      tech: "React, Python, Supabase",
      features: [
        "Student guidance support",
        "AI-based interaction",
        "Learning assistance",
        "Modern dashboard",
      ],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <div className="portfolio">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>Anfas K</h1>
          <h2>Full Stack Developer | BCA Student | Internship Trainee</h2>
          <p>
            I am Anfas, a passionate BCA student and aspiring Full Stack
            Developer. I enjoy building web applications, solving real-world
            problems, and improving my technical skills through projects and
            internships.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn primary">
              Contact Me
            </a>
            <a href="#projects" className="btn secondary">
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <h2>About Me</h2>
        <p>
          I am currently pursuing BCA at Mentor Engineering College under KTU. I
          am passionate about full-stack development, practical learning, and
          building real-world software projects.
        </p>
        <p>
          My career goal is to become a skilled software developer who can build
          useful digital products and contribute to impactful projects. I am
          interested in coding, UI design, web development, and learning modern
          technologies.
        </p>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills">
        <h2>Skills</h2>

        <div className="skills-grid">
          <div className="card">
            <h3>Programming Languages</h3>
            <ul>
              {skills.programming.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3>Frontend Technologies</h3>
            <ul>
              {skills.frontend.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3>Backend Technologies</h3>
            <ul>
              {skills.backend.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3>Databases</h3>
            <ul>
              {skills.databases.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3>Tools & Platforms</h3>
            <ul>
              {skills.tools.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3>Soft Skills</h3>
            <ul>
              {skills.soft.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="card project-card" key={index}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>
                <strong>Technologies Used:</strong> {project.tech}
              </p>

              <div>
                <strong>Key Features:</strong>
                <ul>
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <h2>Experience / Internship</h2>
        <div className="card">
          <h3>ThoughtMinds Internship</h3>
          <p>
            <strong>Role:</strong> Internship Trainee / Developer
          </p>
          <p>
            <strong>Duration:</strong> Present
          </p>
          <p>
            <strong>Responsibilities:</strong> Working on React projects,
            portfolio development, practical coding tasks, and improving web
            development skills through hands-on training.
          </p>
          <p>
            <strong>Key Achievements:</strong> Built mini projects, improved
            frontend development knowledge, and gained practical exposure to
            real-world development workflows.
          </p>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section" id="education">
        <h2>Education</h2>
        <div className="card">
          <h3>Bachelor of Computer Applications (BCA)</h3>
          <p>
            <strong>College:</strong> Mentor Engineering College
          </p>
          <p>
            <strong>University:</strong> KTU
          </p>
          <p>
            <strong>Year of Completion:</strong> Ongoing
          </p>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section" id="certifications">
        <h2>Certifications</h2>
        <div className="card">
          <ul>
            <li>FutureSkills Prime – AI / Tech Course – 2026</li>
            <li>Add your other certifications here</li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <h2>Contact</h2>
        <div className="card contact-card">
          <p>
            <strong>Email:</strong> anfas6912@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> 9061330712
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/anfas-k-b4664a3a7"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/anfas-k-b4664a3a7
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/anfas6912-stack"
              target="_blank"
              rel="noreferrer"
            >
              github.com/anfas6912-stack
            </a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Anfas K. All Rights Reserved.</p>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/anfas-k-b4664a3a7"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/anfas6912-stack"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;