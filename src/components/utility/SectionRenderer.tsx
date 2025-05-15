import type { Page } from '@/sanity/types';
import HeroSection from '../sections/heroSection';
import ImageSliderSection from '../sections/imageSliderSection';
import ImageWithTextOverlaySection from '../sections/imageWithTextOverlaySection';
import type { ComponentType } from 'react';
import ImageMarqueeSection from '../sections/imageMarqueeSection';

const sections: Record<string, ComponentType<any>> = {
  heroSection: HeroSection,
  imageSliderSection: ImageSliderSection,
  imageWithTextSection: ImageWithTextOverlaySection,
  imageMarqueeSection: ImageMarqueeSection,
};

export function SectionRenderer({ section }: { section: Page['sections'][number] }) {
  const { _type } = section;

  const SectionComponent = (_type in sections)
    ? sections[_type as keyof typeof sections]
    : undefined;

  if (!SectionComponent) {
    console.warn(`No component found for section type: ${_type}`);
    return null;
  }

  return <SectionComponent {...section} />;
}