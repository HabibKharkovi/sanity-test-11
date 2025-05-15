import type { SanityImage } from '@/sanity/types';
import './heroSection.css';
import Picture from '@/components/utility/Picture';

export default function HeroSection({ desktopBackgroundImage, mobileBackgroundImage, titleContents }: { mobileBackgroundImage: SanityImage, desktopBackgroundImage: SanityImage, titleContents: string[] }) {

  return (
    <section className="hero-banner">
      <Picture className="hero__image" desktopImage={desktopBackgroundImage} mobileImage={mobileBackgroundImage} />
      <h1 className="hero__bottom-content">
        {
          titleContents.map((text, index) => {
            return (
              <span key={index} className="hero__bottom--content-inner">
                {
                  index === 0 ?
                    <>
                      {text}
                      <svg width="322" height="7" viewBox="0 0 322 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 3.5L321 3.49998" stroke="#C5A288" strokeWidth="0.5" />
                        <path d="M6.27138 6.6834L8.72109 3.8254C8.88158 3.63815 8.88158 3.36185 8.72109 3.1746L6.27137 0.316604C6.1142 0.133235 5.84842 0.0884197 5.63981 0.21011L0.740382 3.06811C0.409629 3.26105 0.409628 3.73895 0.740381 3.93189L5.63981 6.78989C5.84842 6.91158 6.1142 6.86676 6.27138 6.6834Z" fill="#C5A288" />
                        <path d="M315.729 0.316604L313.279 3.1746C313.118 3.36185 313.118 3.63815 313.279 3.82539L315.729 6.6834C315.886 6.86676 316.152 6.91158 316.36 6.78989L321.26 3.93189C321.59 3.73895 321.59 3.26105 321.26 3.06811L316.36 0.21011C316.152 0.0884194 315.886 0.133235 315.729 0.316604Z" fill="#C5A288" />
                      </svg>
                    </> : ''
                }

                {
                  index === 1 ?
                    <>
                      <svg width="322" height="7" viewBox="0 0 322 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 3.5L321 3.49998" stroke="#C5A288" strokeWidth="0.5" />
                        <path d="M6.27138 6.6834L8.72109 3.8254C8.88158 3.63815 8.88158 3.36185 8.72109 3.1746L6.27137 0.316604C6.1142 0.133235 5.84842 0.0884197 5.63981 0.21011L0.740382 3.06811C0.409629 3.26105 0.409628 3.73895 0.740381 3.93189L5.63981 6.78989C5.84842 6.91158 6.1142 6.86676 6.27138 6.6834Z" fill="#C5A288" />
                        <path d="M315.729 0.316604L313.279 3.1746C313.118 3.36185 313.118 3.63815 313.279 3.82539L315.729 6.6834C315.886 6.86676 316.152 6.91158 316.36 6.78989L321.26 3.93189C321.59 3.73895 321.59 3.26105 321.26 3.06811L316.36 0.21011C316.152 0.0884194 315.886 0.133235 315.729 0.316604Z" fill="#C5A288" />
                      </svg>
                      {text}
                    </> : ''
                }

                {
                  index === 2 ? text : ''
                }
              </span>
            )
          })
        }
      </h1>
    </section>
  );
}
