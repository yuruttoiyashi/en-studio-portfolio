type SectionHeadingProps = {
  eyebrow: string
  title: string
  titleId: string
  description?: string
}

function SectionHeading({ eyebrow, title, titleId, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="section-heading__eyebrow">{eyebrow}</p>
      <h2 className="section-heading__title" id={titleId}>
        {title}
      </h2>
      {description ? <p className="section-heading__description">{description}</p> : null}
    </div>
  )
}

export default SectionHeading
