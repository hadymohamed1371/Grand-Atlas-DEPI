import React from 'react'

import Arrow from '../assets/icons/Arrow_Vector.svg'

export default function Button({buttonContent, arrow, onClick, fullWidth, fontPlayfair, fontSemiBold}) {
  return (
    <button 
    className={`${ fullWidth ? 'w-full' : 'w-64.5'} h-10 text-[18px] ${ fontSemiBold ? 'font-semibold' : 'font-bold'} rounded-[5px] bg-linear-to-r from-red-100 to-red-50 ${ fontPlayfair ? 'font-playfair' : 'font-lato'} text-white cursor-pointer flex flex-row justify-center items-center gap-2`}
    onClick={onClick}
    >
        {buttonContent}
        {arrow && <img src={Arrow} className='w-4 mt-0.5'/>}
    </button>
  )
}
