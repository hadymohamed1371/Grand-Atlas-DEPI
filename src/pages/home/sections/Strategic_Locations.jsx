import React from 'react'

import Title from '../../../components/Title'

import Strategic_Locations_Map from '../../../assets/images/image_6.png'


export default function Strategic_Locations() {
  return (
    <>
        <Title
        text={'Strategic Locations'}
        />
        <div className="flex flex-col justify-center items-center w-full">
            <img src={Strategic_Locations_Map} alt="Strategic Locations Map" className='mt-7.25' />
        </div>
    </>
  )
}
