import type { Work } from '../data/content'

type WorkCardProps = {
  work: Work
}

function WorkCard({ work }: WorkCardProps) {
  return (
    <article className="work-card">
      <div className="work-card__image-frame">
        <img className="work-card__image" src={work.image} alt={work.imageAlt} />
        <span className="work-card__index" aria-hidden="true">
          {work.id === 'mood' ? '01' : work.id === 'yuzuki' ? '02' : '03'}
        </span>
      </div>
      <div className="work-card__body">
        <p className="work-card__category">{work.category}</p>
        <h3 className="work-card__title">{work.title}</h3>
        <p className="work-card__description">{work.description}</p>
        <dl className="work-card__details">
          <div>
            <dt>DESIGN FOCUS</dt>
            <dd>{work.focus.join(' / ')}</dd>
          </div>
          <div>
            <dt>TECHNOLOGIES</dt>
            <dd>{work.technologies.join(' / ')}</dd>
          </div>
        </dl>
        <a
          className="work-card__link"
          href={work.url}
          target="_blank"
          rel="noreferrer"
          aria-label={work.title + 'の公開サイトを新しいタブで開く'}
        >
          公開サイトを見る <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  )
}

export default WorkCard
