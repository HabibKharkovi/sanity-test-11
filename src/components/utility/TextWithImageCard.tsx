import CustomLink from "./CustomLink";
import SectionHeadings from "./SectionHeadings";
import Picture from "./Picture";

interface TextWithImageCardProps {
  data: {
    desktopBackgroundImage?: string;
    mobileBackgroundImage?: string;
    cardContents?: any;
  };
}

const TextWithImageCard = ({ data }: TextWithImageCardProps) => {

  const { desktopBackgroundImage, mobileBackgroundImage, cardContents } = data;
  const { title, subtitle, buttonContents } = cardContents;

  return (
    <div className="image-with-text__item">
      <div className="image-with-text__texts-wrap">
        <SectionHeadings title={title} subTitle={subtitle} />
        <CustomLink
          className="primary-btn"
          buttonContents={buttonContents}
          hoverIconEnable={true}
        />
      </div>
      <Picture className="image-with-text__image" desktopImage={desktopBackgroundImage} mobileImage={mobileBackgroundImage} />
    </div>
  )
}

export default TextWithImageCard;