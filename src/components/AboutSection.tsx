import { content } from '../data/content'
import SectionHeading from './SectionHeading'

function AboutSection() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="section__inner about-section__layout">
        <SectionHeading
          eyebrow="ABOUT EN STUDIO"
          title="About EN STUDIO"
          titleId="about-title"
        />
        <div className="about-section__copy">
          <p>
            EN STUDIOは、AIを制作の相棒として活用しながら、企画・情報設計・デザイン・フロントエンド実装まで一つずつ丁寧に進めるWeb制作スタジオです。
          </p>
          <p>
            つくりたいものがまだ言葉になっていなくても、目的や届けたい相手を整理しながら、見る人に伝わる形へ一緒に整えていきます。
          </p>
          <ul className="skill-list" aria-label="使用できる技術">
            {content.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
