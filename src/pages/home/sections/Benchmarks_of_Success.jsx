import React from 'react'

import Title from '../../../components/Title'

import Stat_Card from '../../../components/Stat_Card'
import Apartment from '../../../assets/icons/card_icons/Apartment.svg'
import Invest_Select from '../../../assets/icons/card_icons/streamline_investment-selection.svg'
import Award_Star from '../../../assets/icons/card_icons/material-symbols_award-star-outline-rounded.svg'
import Smile from '../../../assets/icons/card_icons/ant-design_smile-outlined.svg'

export default function Benchmarks_of_Success() {
  return (
    <div className='-mt-14.25'>

        <Title
            text={'Benchmarks of Success'}
        />
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row justify-center items-start gap-5.5 mt-14">
                <Stat_Card
                icon= {Apartment}
                altText={'Apartment'}
                amount= {'48'}
                stat={'Properties Managed'}
                />
                <Stat_Card
                icon= {Invest_Select}
                altText={'Apartment'}
                amount= {'90M'}
                stat={'Total Managed Investments'}
                />
                <Stat_Card
                icon= {Smile}
                altText={'Apartment'}
                amount= {'500'}
                stat={'Happy Clients'}
                />
                <Stat_Card
                icon= {Award_Star}
                altText={'Apartment'}
                amount= {'99%'}
                stat={'Client Satisfaction'}
                />
                
            </div>
        </div>
    </div>
  )
}
