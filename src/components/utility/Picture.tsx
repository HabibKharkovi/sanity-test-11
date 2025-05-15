import SanityImageBlock from "./SanityImageBlock"
import decodeSanityImage from '@/sanity/lib/decodeSanityImage';

interface PictureProps {
  desktopImage: any; // Replace 'any' with the actual type if known
  mobileImage: any; // Replace 'any' with the actual type if known
  className?: string;
}

const Picture = ({ desktopImage, mobileImage, className }: PictureProps) => {

  let sourceDesktopImage;
  let sourceMobileImage;

  if (desktopImage) {
    sourceDesktopImage = decodeSanityImage(desktopImage);
  } else {
    sourceDesktopImage = decodeSanityImage(mobileImage);
  }

  if (mobileImage) {
    sourceMobileImage = decodeSanityImage(mobileImage);
  } else {
    sourceMobileImage = decodeSanityImage(desktopImage);
  }

  return (
    <picture className={className}>
      <source media="(max-width: 767px)" srcSet={sourceMobileImage.url} />
      <source srcSet={sourceDesktopImage.url} />
      <SanityImageBlock image={desktopImage} />
    </picture>
  );
}

export default Picture;