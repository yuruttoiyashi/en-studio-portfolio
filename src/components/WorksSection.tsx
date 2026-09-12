import { content } from '../data/content'
import SectionHeading from './SectionHeading'
import WorkCard from './WorkCard'

function WorksSection() {
  return (
    <section className="section works-section" id="works" aria-labelledby="works-title">
      <div className="section__inner">
        <SectionHeading
          eyebrow="SELECTED WORKS"
          title="つくったもの"
          titleId="works-title"
          description="業種ごとの目的と雰囲気に合わせて、情報の見せ方から実装まで設計した制作例です。"
        />
        <div className="works-grid">
          {content.works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorksSection
