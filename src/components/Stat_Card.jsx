import React from 'react'

export default function Stat_Card({icon, altText,  amount, stat}) {
  return (
    <div className="w-69 p-3 border border-dark-10 border-solid rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex flex-col justify-center items-center gap-2">
        <img src={icon} alt={altText} className='scale-90' />
        <p className="font-lato font-bold text-[21px] text-dark-100">{amount}</p>
        <p className="font-lato font-normal text-[14.5px] text-dark-50">{stat}</p>


    </div>
  )
}
