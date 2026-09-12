import { content } from '../data/content'
import SectionHeading from './SectionHeading'

function ProcessSection() {
  return (
    <section className="section process-section" id="process" aria-labelledby="process-title">
      <div className="section__inner">
        <SectionHeading
          eyebrow="HOW WE WORK"
          title="Process"
          titleId="process-title"
          description="わからないことが多い段階からでも、順番に整理して進められるようにします。"
        />
        <ol className="process-list">
          {content.process.map((step) => (
            <li className="process-item" key={step.number}>
              <span className="process-item__number">{step.number}</span>
              <div>
                <h3 className="process-item__title">{step.title}</h3>
                <p className="process-item__description">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default ProcessSection
