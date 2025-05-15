import { BsMenuButtonWideFill } from 'react-icons/bs';
import { defineType } from 'sanity';

const footer = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  icon: BsMenuButtonWideFill,
  fields: [
    {
      name: 'title',
      title: 'Section Name',
      type: 'string',
    },
    {
      name: 'footerNav',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'navigation'
        }
      ]
    },
    {
      name: 'footerBottomLinks',
      title: 'Footer Bottom Links',
      type: 'array',
      of: [
        {
          type: 'buttonContents'
        }
      ]
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          name: "instagram",
          title: "Instagram",
          type: 'url',
        },
        {
          name: "facebook",
          title: "Facebook",
          type: 'url',
        }
      ]
    },
  ],
});

export default footer;