import { defineField, defineType } from 'sanity';

const imageWithTitle = defineType({
  name: 'imgWithTitle',
  type: 'image',
  title: 'Image With Title',
  options: {
    hotspot: true
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'alt',
      title: 'Alt',
      type: 'string',
    }),
    defineField({
      name: 'caption',
      type: 'string',
    })
  ],
});

export default imageWithTitle;
