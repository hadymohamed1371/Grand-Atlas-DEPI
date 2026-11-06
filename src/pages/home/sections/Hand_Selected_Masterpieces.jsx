import React from 'react'
import SliderComponent from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import './Hand_Selected_Masterpieces.css'

import Title from '../../../components/Title'

import Masterpieces_Card from '../../../components/Masterpieces_Card'

import Masterpiece_Frame1 from '../../../assets/images/Frame_2.png'
import Masterpiece_Frame2 from '../../../assets/images/Frame_3.png'
import Masterpiece_Frame3 from '../../../assets/images/Frame_4.png'

const Slider = SliderComponent.default || SliderComponent;

export default function Hand_Selected_Masterpieces() {

    const masterpieces = [
    {
        image: Masterpiece_Frame1,
        altText: 'Palm Hills Office No.3',
        number: '01.',
        content: 'Palm Hills Office No.3'
    },
    {
        image: Masterpiece_Frame2,
        altText: 'Hacienda Duplex No.4',
        number: '02.',
        content: 'Hacienda Duplex No.4'
    },
    {
        image: Masterpiece_Frame3,
        altText: 'Sawary Family Villa',
        number: '03.',
        content: 'Sawary Family Villa'
    },
    {
        image: Masterpiece_Frame3,
        altText: 'Sawary Family Villa',
        number: '04.',
        content: 'Sawary Family Villa'
    }
];

    const sliderSettings = {
    className: "center masterpieces-slider",

    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    
    dots: true,
    dotsClass: "slick-dots masterpieces-dots",
    
    arrows: true,

    prevArrow: (
        <button
            type="button"
            className="masterpieces-arrow masterpieces-prev"
            aria-label="Previous masterpieces"
        >
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    ),

    nextArrow: (
        <button
            type="button"
            className="masterpieces-arrow masterpieces-next"
            aria-label="Next masterpieces"
        >
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    ),
    
    customPaging: (index) => (
        <button
            type="button"
            aria-label={`Go to masterpiece ${index + 1}`}
        >
            <span className="masterpieces-dot"></span>
        </button>
    )
  };

  return (
    <div>
        <Title
        text={'Hand-Selected Masterpieces'}
        />
        <div className="flex flex-col pr-9.25 pl-9.25">
            <div className="mt-9.75">
            <Slider {...sliderSettings}>
                {masterpieces.map((masterpiece) => (
                    <Masterpieces_Card
                    key={masterpiece.number}
                    image={masterpiece.image}
                    altText={masterpiece.altText}
                    number={masterpiece.number}
                    content={masterpiece.content}
                    />
                ))}
            </Slider>
            </div>
            
        </div>
    </div>
  )
}
