import { useEffect } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  useEffect(() => {
    // Nav Menu functionality
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          document.querySelector('.nav-link.active')?.classList.remove('active');
          this.classList.add('active');

          // Smooth scroll to the section
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Activate/show sections on load with hash links
    const initialNav = window.location.hash;
    if (initialNav) {
      const target = document.querySelector(initialNav);
      if (target) {
        document.querySelector('.nav-link.active')?.classList.remove('active');
        document.querySelector(`a[href="${initialNav}"]`).classList.add('active');
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 350);
      }
    }

    return () => {
      navLinks.forEach(link => link.removeEventListener('click', () => {}));
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav">
          <div className="logo">Rian Tiwari</div>
          <ul className="nav-links">
            <li><a className="nav-link active" href="#about"><i className="fas fa-user"></i> About</a></li>
            <li><a className="nav-link" href="#education"><i className="fas fa-graduation-cap"></i> Education</a></li>
            <li><a className="nav-link" href="#skills"><i className="fas fa-laptop-code"></i> Skills</a></li>
            <li><a className="nav-link" href="#experience"><i className="fas fa-briefcase"></i> Experience</a></li>
            <li><a className="nav-link" href="#projects"><i className="fas fa-project-diagram"></i> Projects</a></li>
            <li><a className="nav-link" href="#contact"><i className="fas fa-envelope"></i> Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Rian Tiwari</h1>
          <p>Aspiring Software Developer & Machine Learning Enthusiast</p>
          <a href="#about" className="btn-primary">Learn More</a>
        </div>
      </section>

      <main>
        <section id="about" className="about">
          <h1>About Me</h1>
          <p>I am Rian Tiwari, a Computer Science & Applied Mathematics student with a concentration in Machine Learning at the University of Maryland, College Park.</p>
        </section>

        <section id="education" className="education">
          <h2>Education</h2>
          <p><i className="fas fa-university"></i> B.S. in Computer Science & Applied Mathematics, University of Maryland, College Park Expected 2027</p>
          <p><i className="fas fa-flask"></i> Concentration in Machine Learning</p>
        </section>

        <section id="skills" className="skills">
          <h2>Technical Skills</h2>
          <ul>
            <li><i className="fas fa-code"></i> Python, Java, JavaScript, C, HTML/CSS</li>
            <li><i className="fas fa-cloud"></i> AWS, Azure, Flask, React, Node.js, LangChain, Qdrant, DynamoDB, TensorFlow, Android Studio</li>
          </ul>
        </section>

        <section id="experience" className="experience">
          <h2>Experience</h2>
          <p><strong><i className="fas fa-briefcase"></i> Machine Learning/Generative AI Intern</strong> (June 2024 - Current)</p>
          <p><i className="fas fa-building"></i> Johnson & Johnson, New Brunswick, NJ</p>
          <ul>
            <li><i className="fas fa-tasks"></i> Contributed to a $10 million project to develop a Generative AI platform for answering JnJ enterprise policy queries.</li>
            <li><i className="fas fa-cogs"></i> Engineered a scalable vector retrieval system using Azure OpenAI ada-002 embeddings with Qdrant and DynamoDB.</li>
            <li><i className="fas fa-chart-line"></i> Enhanced enterprise and non-enterprise responses by 15% using Bedrock-based LLaMA 3-70B and GPT-3.5 Turbo.</li>
          </ul>
        </section>

        <section id="projects" className="projects">
          <h2>Projects</h2>
          <ul>
            <li><strong><i className="fas fa-rocket"></i> AI-Curated Learning Playlists Website:</strong> Engineered a dynamic web application that utilizes Large Language Models (LLMs) to customize YouTube playlists for structured learning experiences.</li>
          </ul>
        </section>

        <section id="contact" className="contact">
          <h2>Contact</h2>
          <a href="mailto:rtiwari3@terpmail.umd.edu"><i className="fas fa-envelope"></i> rtiwari3@terpmail.umd.edu</a>
          <a href="https://www.linkedin.com/in/rian-tiwari"><i className="fab fa-linkedin"></i> LinkedIn</a>
          <a href="https://github.com/riantiwari"><i className="fab fa-github"></i> GitHub</a>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Rian Tiwari. All rights reserved.</p>
        <a href="#about"><i className="fas fa-arrow-up"></i> Back to top</a>
      </footer>
    </div>
  );
}

export default App;

