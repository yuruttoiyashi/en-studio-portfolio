import { content } from '../data/content'
import SectionHeading from './SectionHeading'

function ServicesSection() {
  return (
    <section className="section services-section" id="services" aria-labelledby="services-title">
      <div className="section__inner">
        <SectionHeading
          eyebrow="WHAT I CAN DO"
          title="Services"
          titleId="services-title"
          description="目的と規模に合わせて、必要な情報がきちんと届く構成を一緒に考えます。"
        />
        <ul className="services-list">
          {content.services.map((service, index) => (
            <li className="service-item" key={service.title}>
              <span className="service-item__number" aria-hidden="true">
                0{index + 1}
              </span>
              <div>
                <h3 className="service-item__title">{service.title}</h3>
                <p className="service-item__description">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ServicesSection
