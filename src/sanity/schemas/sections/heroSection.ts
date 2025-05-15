import { defineType } from 'sanity';

const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    {
      name: 'desktopBackgroundImage',
      type: 'img',
      title: 'Desktop Background Image',
    },
    {
      name: 'mobileBackgroundImage',
      type: 'img',
      title: 'Mobile Background Image',
    },
    {
      name: 'titleContents',
      title: 'Title',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Hero Section',
      };
    },
  },
});

export default heroSection;
