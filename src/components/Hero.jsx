import React from 'react'

import Facebook from '../assets/icons/link_icons/FacebookHeroIcon.svg'
import Twitter from '../assets/icons/link_icons/TwitterHeroIcon.svg'
import Instagram from '../assets/icons/link_icons/InstagramHeroIcon.svg'
import Tiktok from '../assets/icons/link_icons/TiktokHeroIcon.svg'
import Button from './Button'

export default function Hero({background, title, description, button, buttonContent, icons}) {
    return (

        <div className='relative w-full h-auto'>
            
            <img 
            src={background} 
            alt="Hero background" 
            className="w-full h-auto block" 
            />

            <div className="absolute inset-0 flex flex-col justify-center items-center">
                <p className='text-[48px] text-white font-playfair font-bold w-124 text-center leading-14 mt-22.5 mb-8.25'>{title}</p>

                <p className=' text-dark-10 text-[20px] font-lato font-bold w-247 text-center mb-8'>{description}</p>

                {button && <Button buttonContent={buttonContent} fullWidth={false} /> }
                
                {icons &&
                <div className='absolute w-12.5 flex flex-col left-9 bottom-14.75 gap-5.5'>
                    <img src={Facebook} alt="Facebook" className='cursor-pointer' />
                    <img src={Twitter} alt="Twitter" className='cursor-pointer' />
                    <img src={Instagram} alt="Instagram" className='cursor-pointer' />
                    <img src={Tiktok} alt="Tiktok" className='cursor-pointer' />
                </div>
                }
            </div>

        </div>

    )
}
