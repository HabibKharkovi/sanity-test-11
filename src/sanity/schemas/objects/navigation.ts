import { defineType } from 'sanity';

const navigation = defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Navigation Name',
      type: 'string',
    },
    {
      name: 'navigation',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'buttonContents',
        }
      ]
    },
  ],
});

export default navigation

