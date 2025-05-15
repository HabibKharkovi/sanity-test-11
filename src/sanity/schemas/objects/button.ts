import { Link } from 'lucide-react';
import { defineField, defineType } from 'sanity';

const button = defineType({
  name: 'buttonContents',
  title: 'Button',
  type: 'object',
  icon: Link,
  fields: [
    defineField({
      name: 'text',
      title: 'Button Text',
      type: 'string',
    }),
    defineField({
      name: 'isExternal',
      title: 'External Link',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isNewWindow',
      title: 'Open in new window',
      type: 'boolean',
      initialValue: false,
      hidden: ({ parent }) => parent?.isExternal !== true,
    }),
    defineField({
      name: 'external',
      type: 'url',
      title: 'External URL',
      hidden: ({ parent }) => parent?.isExternal !== true,
      validation: (rule) =>
        rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    }),
    defineField({
      name: 'internal',
      type: 'reference',
      title: 'Internal Link',
      to: [{ type: 'route' }],
      hidden: ({ parent }) => parent?.isExternal === true,
      options: {
        disableNew: true,
      },
    }),
  ],
});

export default button;
