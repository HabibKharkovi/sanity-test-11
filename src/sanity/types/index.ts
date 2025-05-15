import type { SanityImageObject } from '@sanity/image-url/lib/types/types';

export type SanityImage = SanityImageObject & {
  alt?: string;
  title?: string;
};

export type Header = {
  desktopLogo: SanityImage;
  mobileLogo: SanityImage;
  buttonContents: Button;
};

export type Footer = {
  footerNav: Navigation[];
  footerBottomLinks: Button[];
  socialLinks: Navigation[];
}

export type Navigation = {
  navigation: Button[];
};

export type Button = {
  text: string;
  isExternal: boolean;
  isNewWindow: boolean;
  external?: string;
  internal?: Route;
  className?: string;
};

export type Route = {
  slug: {
    current: string;
  };
} & (
    | {
      isRedirect: true;
      redirectRoute: Route;
      page?: never;
    }
    | {
      isRedirect: false;
      page: Page;
      redirectRoute?: never;
    }
  );

export type Page = {
  title: string;
  sections: Section[];
};

type BaseSection = {
  _type: string;
  _key: string;
};

type HomeHeroSection = BaseSection & {
  _type: 'homeHeroSection';
  backgroundImage: SanityImage;
};

export type Section = HomeHeroSection;
