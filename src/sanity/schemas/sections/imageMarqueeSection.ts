import { defineType } from 'sanity';

const imageMarqueeSection = defineType({
  name: 'imageMarqueeSection',
  title: 'Image Marquee Section',
  type: 'object',
  fields: [
    {
      name: 'sectionContents',
      title: 'Section Contents',
      type: 'textAndButton'
    },
    {
      name: 'bgImage',
      title: 'Background Image',
      type: 'img'
    },
    {
      name: 'icon',
      title: 'Image',
      type: 'img'
    },
    {
      name: 'images',
      title: 'Image',
      type: 'array',
      of: [
        {
          type: 'img',
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Image Marquee Section',
      };
    },
  },
});

export default imageMarqueeSection;
