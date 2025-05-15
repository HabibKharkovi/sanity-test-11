import { defineField, defineType } from 'sanity';

const image = defineType({
  name: 'img',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: true
  },
  fields: [
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

export default image;
