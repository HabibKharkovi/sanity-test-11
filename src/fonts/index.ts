import type { url } from 'inspector';
import { Cormorant_Garamond } from 'next/font/google';
import localFont from 'next/font/local';
import type { format } from 'path';
import style from 'styled-jsx/style';

const brandonGrotesque = localFont({
  src: [
    {
      path: './BrandonGrotesque-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './BrandonGrotesque-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-primary',
  display: 'swap',
});

const karlGeoff = localFont({
  src: './KarlGeoff-Natural.woff2',
  weight: '400',
  style: 'normal',
  variable: '--font-Tertiary',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-secondary',
});

export { brandonGrotesque, cormorant, karlGeoff };

// --font-primary: 'Brandon Grotesque';
// --font-secondary: "Cormorant Garamond";
// --font-Tertiary: 'Karl Geoff';


// @font-face {
//   font-family: 'Brandon Grotesque';
//   src: url('../fonts/BrandonGrotesque-Light.woff2') format('woff2'),
//     url('../fonts/BrandonGrotesque-Light.woff') format('woff');
//   font-weight: 300;
//   font-style: normal;
//   font-display: swap;
// }

// @font-face {
//   font-family: 'Brandon Grotesque';
//   src: url('../fonts/BrandonGrotesque-Regular.woff2') format('woff2'),
//     url('../fonts/BrandonGrotesque-Regular.woff') format('woff');
//   font-weight: normal;
//   font-style: normal;
//   font-display: swap;
// }

// @font-face {
//   font-family: 'Karl Geoff';
//   src: url('../fonts/KarlGeoff-Natural.woff2') format('woff2'),
//     url('../fonts/KarlGeoff-Natural.woff2') format('woff');
//   font-weight: normal;
//   font-style: normal;
//   font-display: swap;
// }
