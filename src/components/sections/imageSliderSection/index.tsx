'use client';
import type { Button, SanityImage } from '@/sanity/types';

import SectionHeadings from '@/components/utility/SectionHeadings';
import CustomLink from '@/components/utility/CustomLink';
import SanityImageBlock from '@/components/utility/SanityImageBlock';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import './imageSliderSection.css';
import 'swiper/css';

interface TextWithButton extends Button {
  title?: string;
  subtitle?: string;
  buttonContents?: Button;
}

interface ImageSliderSectionProps {
  imagesWithTitle?: SanityImage[];
  textAndButton?: TextWithButton;
  bgImage?: SanityImage;
}

const ImageSliderSection = ({ textAndButton, imagesWithTitle, bgImage }: ImageSliderSectionProps) => {

  const { title, subtitle, buttonContents } = textAndButton || {};

  return (
    <section className="image-slider">
      <div className="image-slider__bg--image">
        {
          bgImage ?
            <SanityImageBlock image={bgImage} /> : ''
        }
      </div>
      <div className="page-width">
        <div className="image-slider__wrapper">
          <SectionHeadings title={title} subTitle={subtitle} />
          {buttonContents && (
            <CustomLink
              className="primary-btn"
              buttonContents={buttonContents}
              hoverIconEnable={true}
            />
          )}
        </div>
      </div>


      <Swiper
        modules={[Navigation, Pagination, Mousewheel]}
        slidesPerView={4}
        spaceBetween={16}
        navigation
        pagination={{ clickable: true }}
        mousewheel={true}
        grabCursor={true}
        allowTouchMove={true}
        simulateTouch={true}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween: 12,
            centeredSlides: true
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 12
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 14
          },
          1279: {
            slidesPerView: 3.9,
            spaceBetween: 16
          }
        }}
      >

        {
          imagesWithTitle?.map((image, index) => {
            return (
              <SwiperSlide key={index} className="swiper-slide" >

                <div className="card__image">
                  <SanityImageBlock image={image} />
                </div>
                {
                  image?.title && <p className="image-slider__text">{image?.title}</p>
                }

              </SwiperSlide>
            )
          })
        }

      </Swiper>

    </section >
  )
}

export default ImageSliderSection;