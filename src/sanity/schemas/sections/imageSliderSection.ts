import { defineType } from 'sanity';

const imageSliderSection = defineType({
  name: 'imageSliderSection',
  title: 'Image Slider Section',
  type: 'object',
  fields: [
    {
      name: 'textAndButton',
      title: 'Text and Button',
      type: 'textAndButton'
    },
    {
      name: 'bgImage',
      title: 'Background Image',
      type: 'img'
    },
    {
      name: 'imagesWithTitle',
      title: 'Images With Title',
      type: 'array',
      of: [
        {
          type: 'imgWithTitle',
        }
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Image Slider Section',
      };
    },
  },
});

export default imageSliderSection;
