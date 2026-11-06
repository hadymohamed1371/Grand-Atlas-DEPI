import React from 'react'

export default function Masterpieces_Card({image, altText, number, content}) {
  return (
    <div className='w-full h-89.5 px-2.5 outline-none'>
        <img src={image} alt={altText} className='w-full h-74.5 rounded-2xl' />
        <div className="flex mt-6.25 ml-1.75">
            <p className="font-playfair font-semibold text-[26px] mr-2">{number}</p>
            <p className="font-playfair font-semibold text-[24px] w-auto">{content}</p>
        </div>
    </div>
  )
}
