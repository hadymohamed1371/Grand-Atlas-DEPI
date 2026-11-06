import React from 'react'

import Title from '../../../components/Title'

import About_Frame from '../../../assets/images/Frame_10.png'

import Button from '../../../components/Button'

export default function About_Grand_Atlas() {
  return (
    <>
        <Title
        text={'About Grand Atlas'}
        />
        <div className="flex flex-col justify-center items-center pr-9.25 pl-9.25 max-w-full">
            <div className="flex flex-row gap-13 mt-16.25">
                <img src={About_Frame} className='w-145 h-143.75' />
                <div>
                    <p className='w-128.5 font-lato text-dark-50 text-[20px] mt-6'>
                        We began with a singular, uncompromising vision: to bridge the gap between world-class architecture and the individuals who define our global culture. We recognized that for the discerning client, a home is rarely just a physical structure; it is a curated environment, a private gallery, and the ultimate expression of a life well-lived. Our journey started not in the pursuit of transactions, but in the pursuit of excellence. We set out to dismantle the traditional, high-volume real estate model in favor of a bespoke, 'private office' approach—one where quality always supersedes quantity, and where every client is treated as the sole focus of our firm,
                    </p>
                    <p className="w-128.5 font-lato text-dark-50 text-[20px] mb-23"> We don't just find you a home; we secure your peace of mind through a veil of absolute professional confidentiality.</p>
                    <Button
                    buttonContent={"Know More"}
                    arrow={true}
                    fullWidth={false}
                    />
                </div>
            </div>
        </div>
    </>
  )
}
