import './App.css'
import mossOakImage from './assets/moss-oak-preview.png'

function App() {
  return (
    <div className="site">

      {/* Navigation */}
      <nav className="navbar">
        <a href="#" className="logo">MAHEEN<span>.</span></a>

        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's talk
        </a>
      </nav>


      {/* Hero */}
      <main>

        <section className="hero">
          <div className="hero-content">

            <p className="eyebrow">
              WEB DESIGN & DEVELOPMENT
            </p>

            <h1>
              I build websites
              <br />
              <span>that feel right.</span>
            </h1>

            <p className="hero-description">
              I'm Maheen, a Computer Science student creating
              clean, modern websites for small businesses and
              personal brands.
            </p>

            <div className="hero-buttons">
              <a href="#work" className="primary-button">
                View my work <span>↗</span>
              </a>

              <a href="#about" className="text-button">
                More about me
              </a>
            </div>

          </div>

          <div className="hero-number">
            <span>01</span>
            <span>2026</span>
          </div>
        </section>


        {/* Work */}
        <section className="section work-section" id="work">

          <div className="section-heading">
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2>A few things I've built.</h2>
            </div>

            <p className="section-intro">
              A collection of projects exploring design,
              development and digital experiences.
            </p>
          </div>


          <article className="project-card">

            <div className="project-image">
              <div className="project-preview">
  <img
    src={mossOakImage}
    alt="Moss & Oak Café website"
  />
</div>
            </div>

            <div className="project-info">

              <div>
                <p className="project-number">01 / 01</p>

                <h3>Moss & Oak</h3>

                <p className="project-description">
                  A warm, responsive café website designed to
                  showcase the brand, menu and customer experience.
                </p>
              </div>

              <div className="project-bottom">
                <div className="tags">
                  <span>React</span>
                  <span>Vite</span>
                  <span>CSS</span>
                </div>

                <a
                  href="https://moss-and-oak-53gv.vercel.app/"
                  target="moss and oak website"
                  rel="noreferrer"
                  className="project-link"
                >
                  View live site ↗
                </a>
              </div>

            </div>

          </article>


          <div className="coming-soon">
            <span>02</span>
            <p>More projects coming soon.</p>
          </div>

        </section>


        {/* About */}
        <section className="section about-section" id="about">

          <div className="section-label">
            <p className="eyebrow">ABOUT ME</p>
          </div>

          <div className="about-content">

            <h2>
              I'm a Computer Science student
              <span> building my way into web development.</span>
            </h2>

            <div className="about-text">
              <p>
                I enjoy turning ideas into websites that are
                simple, useful and visually polished.
              </p>

              <p>
                I'm currently studying Computer Science at DCU
                and building projects that help me develop my
                skills in modern web development.
              </p>

              <p>
                I'm also exploring freelance web development,
                with a focus on helping small businesses build
                a stronger online presence.
              </p>
            </div>

          </div>

        </section>


        {/* Services */}
        <section className="section services-section" id="services">

          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT I DO</p>
              <h2>Simple websites.<br />Thoughtfully built.</h2>
            </div>
          </div>

          <div className="services-grid">

            <div className="service">
              <span>01</span>
              <h3>Business websites</h3>
              <p>
                Clean websites that give small businesses
                a professional online presence.
              </p>
            </div>

            <div className="service">
              <span>02</span>
              <h3>Responsive design</h3>
              <p>
                Websites designed to look and work properly
                across phones, tablets and desktops.
              </p>
            </div>

            <div className="service">
              <span>03</span>
              <h3>Landing pages</h3>
              <p>
                Focused pages designed to clearly present
                a product, service or idea.
              </p>
            </div>

            <div className="service">
              <span>04</span>
              <h3>Website updates</h3>
              <p>
                Keeping existing websites fresh with new
                content, images and improvements.
              </p>
            </div>

          </div>

        </section>


        {/* Contact */}
        <section className="contact-section" id="contact">

          <div className="contact-inner">

            <p className="eyebrow">HAVE A PROJECT IN MIND?</p>

            <h2>
              Let's build something
              <span> great together.</span>
            </h2>

            <a href="mailto:maheenmemon73@gmail.com" className="contact-button">
              Get in touch <span>↗</span>
            </a>

          </div>

        </section>

      </main>


      {/* Footer */}
      <footer className="footer">

        <div>
          <a href="#" className="logo">MAHEEN<span>.</span></a>
          <p>Web Design & Development</p>
        </div>

        <div className="footer-right">
          <p>© 2026 Maheen</p>
          <p>Built with React</p>
        </div>

      </footer>

    </div>
  )
}

export default App