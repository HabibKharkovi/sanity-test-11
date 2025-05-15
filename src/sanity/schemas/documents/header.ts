import { BsMenuButtonWideFill } from 'react-icons/bs';
import { defineType } from 'sanity';

const header = defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  icon: BsMenuButtonWideFill,
  fields: [
    {
      name: 'title',
      title: 'Section Name',
      type: 'string',
    },
    {
      name: 'desktopLogo',
      title: 'Desktop Logo',
      type: 'img',
    },
    {
      name: 'mobileLogo',
      title: 'Mobile Logo',
      type: 'img',
    },
    {
      name: 'buttonContents',
      title: 'Header Right Side Button',
      type: 'buttonContents',
    }
  ],
});

export default header;