type SectionHeadingsProps = {
  title?: string;
  subTitle?: string;
};

const SectionHeadings = ({ title, subTitle }: SectionHeadingsProps) => {
  return (
    <div className="section-titles">
      {title ? <h3 className="section-sub-title">{subTitle}</h3> : ''}
      {subTitle ? <h2 className="section-title">{title}</h2> : ''}
    </div>
  )
}

export default SectionHeadings;