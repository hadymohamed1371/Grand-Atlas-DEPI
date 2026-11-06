import React from 'react'

import Hero from '../../components/Hero'
import homeHero from '../../assets/images/homeHero.png'

import Benchmarks_of_Success from './sections/Benchmarks_of_Success'

import About_Grand_Atlas from './sections/About_Grand_Atlas'

import Hand_Selected_Masterpieces from './sections/Hand_Selected_Masterpieces'

import Strategic_Locations from './sections/Strategic_Locations'

import Future_Landmarks from './sections/Future_Landmarks'

export default function Home() {
  return (
    <div className='max-w-full'>

        <Hero
        background= {homeHero}
        title= {'Redefining the Horizon of Modern Luxury Living'}
        description= {`We believe a home should be a sanctuary of innovation and an extension of your personal brand. By combining
             cutting-edge market data with a keen eye for world-class design, we help you navigate the complexities of the
             luxury market to find a space that inspires your best work and your deepest rest`}
        button={true}
        buttonContent= {'Explore'}
        icons={true}
        />

        <Benchmarks_of_Success />

        <About_Grand_Atlas />

        <Hand_Selected_Masterpieces />

        <Strategic_Locations />

        <Future_Landmarks />
        
    </div>
  )
}
