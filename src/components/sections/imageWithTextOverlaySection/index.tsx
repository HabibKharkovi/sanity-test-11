import React from "react";
import './imageWithTextOverlaySection.css';
import TextWithImageCard from "@/components/utility/TextWithImageCard";

interface ImageWithTextOverlaySectionProps {
  imageWithTextCards: any; // Replace 'any' with the correct type if known
}

const ImageWithTextOverlaySection = ({ imageWithTextCards }: ImageWithTextOverlaySectionProps) => {

  return (
    <section className="image-with-text">
      <div className="page-width">
        <div className="image-with-text__wrapper">
          {
            imageWithTextCards.map((data: any, index: number) => {
              return <TextWithImageCard data={data} key={index} />
            })
          }
        </div>
      </div>
    </section>
  )
}

export default ImageWithTextOverlaySection;