import SiteHeader from './components/SiteHeader'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import ProcessSection from './components/ProcessSection'
import ServicesSection from './components/ServicesSection'
import WorksSection from './components/WorksSection'

function App() {
  return (
    <div id="top">
      <a className="skip-link" href="#main-content">
        本文へ移動
      </a>
      <SiteHeader />
      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__content">
            <p className="hero__eyebrow">WEB DESIGN / FRONTEND / AI</p>
            <h1 id="hero-title">
              <span>EN</span> STUDIO
            </h1>
            <p className="hero__tagline">ご縁をつなぐ、Web制作。</p>
            <p className="hero__introduction">
              個人店から企業まで、届けたい想いと必要な情報を整理し、伝わるWebサイトに仕立てます。
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#contact">
                制作について相談する <span aria-hidden="true">↗</span>
              </a>
              <a className="button button--text" href="#works">
                制作実績を見る <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <div className="hero__motif" aria-hidden="true">
            <span className="hero__motif-ring hero__motif-ring--outer" />
            <span className="hero__motif-ring hero__motif-ring--inner" />
            <span className="hero__motif-line hero__motif-line--horizontal" />
            <span className="hero__motif-line hero__motif-line--vertical" />
            <span className="hero__motif-label">CONNECT / CREATE</span>
          </div>
        </section>
        <WorksSection />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
      </main>
      <footer className="site-footer">
        <p>EN STUDIO</p>
        <p>ご縁をつなぐ、Web制作。</p>
      </footer>
    </div>
  )
}

export default App
