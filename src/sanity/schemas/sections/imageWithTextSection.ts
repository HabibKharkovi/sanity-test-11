import { defineType } from 'sanity';

const imageWithTextSection = defineType({
  name: 'imageWithTextSection',
  title: 'Image With Text Section',
  type: 'object',
  fields: [
    {
      name: 'imageWithTextCards',
      title: 'Image With Overlay Text and Button',
      type: 'array',
      validation: (rule) => rule.required(),
      of: [
        {
          type: 'imageWithOverlayTextAndButton',
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Image With Text Section',
      };
    },
  },
});

export default imageWithTextSection;