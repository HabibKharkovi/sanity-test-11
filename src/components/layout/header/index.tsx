
import { sanityFetch } from '@/sanity/lib/client';
import { HEADER_QUERY } from '@/sanity/lib/queries';
import type { Header } from '@/sanity/types';
import SanityImageBlock from '@/components/utility/SanityImageBlock';
import Link from 'next/link';
import CustomLink from '@/components/utility/CustomLink';
import './header.css';

export default async function Header() {
  const header_data: Header = await sanityFetch({
    query: HEADER_QUERY,
    tags: ['header'],
  });

  const { desktopLogo, mobileLogo, buttonContents } = header_data;

  return (
    <header className="header">
      <div className="page-width">
        <div className="header__wrapper">
          <div className="header__content">
            <div className="header__menu--icon desktop">
              <svg width="50" height="7" viewBox="0 0 50 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="50" height="1" fill="white" />
                <rect y="6" width="50" height="1" fill="white" />
              </svg>
            </div>
            <div className="header__menu--icon mobile">
              <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="22" height="1" fill="white" />
                <rect y="5" width="22" height="1" fill="white" />
                <rect y="10" width="22" height="1" fill="white" />
              </svg>
            </div>
            <Link href="/" className="header__logo desktop">
              {desktopLogo ? <SanityImageBlock image={desktopLogo} /> : ''}
            </Link>
            <Link href="/" className="header__logo mobile">
              {mobileLogo ? <SanityImageBlock image={mobileLogo} /> : ''}
            </Link>

            <CustomLink buttonContents={buttonContents} className={'header__right--text'} />

          </div>
        </div>
      </div>
    </header>
  );
}
