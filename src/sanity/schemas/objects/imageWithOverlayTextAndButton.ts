import { defineField, defineType } from 'sanity';

const imageWithOverlayTextAndButton = defineType({
  name: 'imageWithOverlayTextAndButton',
  type: 'object',
  title: 'Image with Overlay Text and Button',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Card Name',
    }),
    defineField({
      name: 'desktopBackgroundImage',
      type: 'img',
      title: 'Desktop Background Image'
    }),
    defineField({
      name: 'mobilebackgroundImage',
      type: 'img',
      title: 'Mobile Background Image'
    }),
    defineField({
      name: 'cardContents',
      type: 'textAndButton',
      title: 'Card Contents',
    }),
  ]
});

export default imageWithOverlayTextAndButton;
