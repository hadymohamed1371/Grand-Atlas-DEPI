import React from 'react'

import SliderComponent from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import './Future_Landmarks.css'

import Title from '../../../components/Title'

import Project_Card from '../../../components/Project_Card'

import Palm_Hills from '../../../assets/images/Frame_5.png'
import Palm_Hills_Logo from '../../../assets/images/PALM_HILLS_Logo.png'
import Hayah_City from '../../../assets/images/Frame_6.png'
import Hayah_City_Logo from '../../../assets/images/Hayah_City_Logo.png'

const Slider = SliderComponent.default || SliderComponent;

export default function Future_Landmarks() {

    const landmarks = [
    {
        id: 'palm-hills-1',
        card_image: Palm_Hills,
        cardAltText: 'Palm Hills',
        logo: Palm_Hills_Logo,
        logoAltText: 'Palm Hills Developments',
        status: true,
        statusContent: 'New Cairo',
        statusColor: 'bg-red-100'
    },
    {
        id: 'hayah-city',
        card_image: Hayah_City,
        cardAltText: 'Hayah City',
        logo: Hayah_City_Logo,
        logoAltText: 'Hayah City Development',
        status: true,
        statusContent: 'New Cairo',
        statusColor: 'bg-red-100'
    },
    {
        id: 'palm-hills-2',
        card_image: Palm_Hills,
        cardAltText: 'Palm Hills',
        logo: Palm_Hills_Logo,
        logoAltText: 'Palm Hills Developments',
        status: true,
        statusContent: 'New Cairo',
        statusColor: 'bg-red-100'
    },
    {
        id: 'hayah-city-2',
        card_image: Hayah_City,
        cardAltText: 'Hayah City',
        logo: Hayah_City_Logo,
        logoAltText: 'Hayah City Development',
        status: true,
        statusContent: 'New Cairo',
        statusColor: 'bg-red-100'
    }
    ];

    const sliderSettings = {
        className: "future-landmarks-slider",

        centerMode: false,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,

        dots: true,
        dotsClass: "slick-dots future-landmarks-dots",

        arrows: true,

        prevArrow: (
            <button
                type="button"
                className="future-arrow future-prev flex justify-center"
                aria-label="Previous landmarks"
            >
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        ),

        nextArrow: (
            <button
                type="button"
                className="future-arrow future-next"
                aria-label="Next landmarks"
            >
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        ),

        customPaging: (index) => (
            <button
                type="button"
                aria-label={`Go to project ${index + 1}`}
            >
                <span className="future-landmarks-dot"></span>
            </button>
        ),

        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

  return (
    <div>
        <Title
        text={'Future Landmarks'}
        />
        <div className="w-full px-9.25 mt-9.5">
            <Slider {...sliderSettings}>
                {landmarks.map((project) => (
                    <div key={project.id}>
                        <Project_Card
                        cardWidthClass="w-95"
                        card_image={project.card_image}
                        cardAltText={project.cardAltText}
                        logo={project.logo}
                        logoAltText={project.logoAltText}
                        status={project.status}
                        statusContent={project.statusContent}
                        statusColor={project.statusColor}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    </div>
  )
}
