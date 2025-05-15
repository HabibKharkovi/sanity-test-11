import CustomLink from '@/components/utility/CustomLink';
import './imageMarqueeSection.css';
import SanityImageBlock from '@/components/utility/SanityImageBlock';
import SectionHeadings from '@/components/utility/SectionHeadings';
import Marquee from "react-fast-marquee";
import type { SanityImage } from '@/sanity/types';

interface ImageMarqueeSectionProps {
  images: SanityImage[]; // Replace 'any' with your actual image type if available
  bgImage: SanityImage;
  icon: SanityImage;
  sectionContents: {
    buttonContents: any; // Replace 'any' with the actual type
    title: string;
    subtitle: string;
  };
}

const ImageMarqueeSection = ({ images, sectionContents, bgImage, icon }: ImageMarqueeSectionProps) => {

  const { buttonContents, title, subtitle } = sectionContents;

  return (
    <section className="image-marquee">
      <div className="image-marquee__bg--image">
        {
          bgImage ? <SanityImageBlock image={bgImage} /> : ''
        }
      </div>
      <div className="page-width">
        <div className="image-marquee__content flex">
          <SectionHeadings title={title} subTitle={subtitle} />
          <CustomLink buttonContents={buttonContents} className={'primary-btn'} hoverIconEnable={true} iconEnable={true} />
          <div className="image-marquee__divider--image">
            {
              icon ? <SanityImageBlock image={icon} /> : ''
            }
          </div>
        </div>
      </div>
      <div className="image-marquee__marquee">
        <Marquee className={"image-marquee__track"} >
          {
            images.map((image, index) => {
              return (
                <div key={index} className="image-marquee__image">
                  <SanityImageBlock image={image} />
                </div>
              )
            })
          }
        </Marquee>
      </div>
    </section>
  )
}

export default ImageMarqueeSection;