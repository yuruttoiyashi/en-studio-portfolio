import { content } from '../data/content'

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL?.trim() ?? ''

function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-section__inner">
        <p className="contact-section__eyebrow">{content.contact.eyebrow}</p>
        <h2 id="contact-title">Contact</h2>
        <p className="contact-section__headline">{content.contact.title}</p>
        <p className="contact-section__description">{content.contact.description}</p>
        {contactEmail ? (
          <a className="button button--light" href={'mailto:' + contactEmail}>
            メールで相談する <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <p className="contact-section__status">お問い合わせ先は公開時に設定します。</p>
        )}
      </div>
    </section>
  )
}

export default ContactSection
