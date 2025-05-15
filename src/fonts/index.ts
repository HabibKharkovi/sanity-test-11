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
