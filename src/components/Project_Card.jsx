import React from 'react'
// import { useNavigate } from 'react-router-dom'

import Bedroom from '../assets/icons/card_icons/cbi_rooms-bedroom.svg'
import Bathroom from '../assets/icons/card_icons/jam_bathtub-f.svg'
import Ruler_Pencil from '../assets/icons/card_icons/clarity_ruler-pencil-solid.svg'


export default function Project_Card({card_image, cardAltText, logo, logoAltText, title, rooms, bedrooms, bathrooms, size, developer, priceExist, price, status, statusContent, statusColor, description, buttonAction, cardWidthClass = "w-95"}) {
    // const navigate = useNavigate()
  return (
    <div className={`${cardWidthClass} h-full min-w-0 box-border border border-[#EAEAEA] border-solid rounded-2xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex flex-col items-start relative overflow-hidden`}>
        <div className="relative w-full aspect-4/3 overflow-hidden rounded-t-2xl">
            <img
            src={card_image}
            alt={cardAltText}
            className='block w-full h-full object-cover'
            />

            {status && (
                <div className={`w-26 h-6 ${statusColor} text-white text-center rounded-sm absolute top-6.25 right-3`}>
                    {statusContent}
                    </div>
                )}

        </div>
            {rooms && <div className="w-full p-2 text-beige-100 font-lato flex justify-around items-center border border-dark-10 shadow-[inset_0_6px_4px_-4px_rgba(0,0,0,0.25)]">
                <div className="flex justify-center items-center gap-2">
                <img src={Bedroom} />
                <p>{bedrooms} Bedrooms</p>
                </div>
                <div className="w-px h-5 bg-dark-10"></div>
                <div className="flex justify-center items-center gap-2">
                <img src={Bathroom} />
                <p>{bathrooms} Bathrooms</p>
                </div>
                <div className="w-px h-5 bg-dark-10"></div>
                <div className="flex justify-center items-center gap-2">
                <img src={Ruler_Pencil} />
                <p>{size} m</p>
                </div>
            </div>}

        <div className='px-3 pb-2.5 w-full flex flex-col flex-1 min-w-0'>
            <div className="flex w-full min-w-0 justify-between items-center gap-5">

                {logo && (
                    <img
                    src={logo}
                    alt={logoAltText}
                    className='object-contain shrink-0 scale-82 mt-2'
                    />
                )}
                {developer && (
                    <p className="min-w-0 flex-1 wrap-break-word text-[22px] font-playfair font-semibold text-red-100">
                        {developer}
                    </p>
                )}
                {priceExist && (
                    <p className='shrink-0 whitespace-nowrap ml-auto text-[26px] text-beige-100 font-lato font-bold'>
                        {price}EGP
                    </p>
                )}
            </div>
            <p className="font-lato font-bold text-[18px] text-dark-100">{title}</p>

            <p className="text-dark-30 font-lato w-full">{description}</p>
            <button
            type="button"
            className="w-full h-8.75 border border-red-100 border-solid rounded-lg text-red-100 mt-6 cursor-pointer"
            onClick={buttonAction}
            >
                View Details
            </button>
        </div>
        
    </div>
  )
}