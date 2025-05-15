import type { Button } from "@/sanity/types";
import Link from "next/link"

interface CustomLinkProps {
  buttonContents: Button;
  className?: string;
  hoverIconEnable?: boolean;
  iconEnable?: boolean;
}

const CustomLink = ({ buttonContents, className, hoverIconEnable, iconEnable }: CustomLinkProps) => {

  if (!buttonContents) return;

  const { text, isExternal, isNewWindow, external, internal } = buttonContents;

  let buttonLink: string = "#";
  if (isExternal) {
    buttonLink = external || "#";
  } else {
    buttonLink = internal?.slug?.current ? `/${internal.slug.current}` : "#";
  }
  const buttonTarget = isNewWindow ? '_blank' : '_self';

  if (!text || !buttonLink) {
    return null;
  }

  return (
    <Link href={buttonLink} className={className} target={buttonTarget}>
      {
        iconEnable ?
          <div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1605_29349)">
                <path d="M11.3359 1.33594H4.66927C2.82832 1.33594 1.33594 2.82832 1.33594 4.66927V11.3359C1.33594 13.1769 2.82832 14.6693 4.66927 14.6693H11.3359C13.1769 14.6693 14.6693 13.1769 14.6693 11.3359V4.66927C14.6693 2.82832 13.1769 1.33594 11.3359 1.33594Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.6678 7.5802C10.75 8.13503 10.6553 8.70168 10.3969 9.19954C10.1386 9.69741 9.72987 10.1011 9.22886 10.3533C8.72784 10.6055 8.16007 10.6933 7.6063 10.6042C7.05252 10.515 6.54095 10.2536 6.14433 9.85697C5.74772 9.46036 5.48626 8.94878 5.39715 8.39501C5.30804 7.84124 5.39582 7.27346 5.64799 6.77245C5.90017 6.27144 6.3039 5.86269 6.80176 5.60436C7.29963 5.34603 7.86628 5.25126 8.42111 5.33353C8.98706 5.41746 9.51101 5.68118 9.91557 6.08574C10.3201 6.4903 10.5839 7.01425 10.6678 7.5802Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.6641 4.33594H11.6703" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_1605_29349">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div> : ''
      }
      {text}
      {
        hoverIconEnable ?
          <span>
            <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.72862 0.316604L0.27891 3.1746C0.118415 3.36185 0.118415 3.63815 0.27891 3.82539L2.72862 6.6834C2.8858 6.86676 3.15158 6.91158 3.36019 6.78989L8.25962 3.93189C8.59037 3.73895 8.59037 3.26105 8.25962 3.06811L3.36019 0.21011C3.15158 0.0884194 2.8858 0.133235 2.72862 0.316604Z" fill="#C5A288" />
            </svg>
          </span> : ''
      }
    </Link>
  )
}

export default CustomLink;