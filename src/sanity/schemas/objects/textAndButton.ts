import { defineField, defineType } from 'sanity';

const textAndButton = defineType({
  name: 'textAndButton',
  type: 'object',
  title: 'Text and Button',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      title: 'Sub Title',
    }),
    defineField({
      name: 'buttonContents',
      type: 'buttonContents',
      title: 'Button Contents'
    }),
  ]
});

export default textAndButton;
