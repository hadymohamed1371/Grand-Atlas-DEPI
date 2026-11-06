import React from 'react'

export default function Title({text, marginTop}) {
  return (
    <div className={`flex flex-col justify-center items-center ${marginTop? marginTop : 'mt-45'}`}>
        <h2 className="font-playfair text-[32px] font-semibold">
            {text}
        </h2>

        <div className="bg-red-50 w-41 h-1.5 rounded-xs mt-1"></div>

        
    </div>
  )
}
