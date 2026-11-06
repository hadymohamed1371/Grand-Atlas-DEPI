import React, { useEffect, useState } from 'react'

import Hero from '../../components/Hero'
import zonesHero from '../../assets/images/zonesHero.png'

import api from "../../helpers/api.jsx"

import { useNavigate } from 'react-router-dom'

export default function Zones() {    
    
    
    const [zones, setZones] = useState([])
    const [loading, setLoading] = useState([])

    const navigate = useNavigate()
    
    const getZones = async () => {

        try {
            const response = await api.get("/zone");
            setZones(response.data);
            console.log(response.data);
            console.log(zones);
            setLoading(false)

        } catch (error) {
            console.log("Error fetching zones", error);
            setLoading(true)
        }

    }

    useEffect(() => {
        
        getZones();
    }, [])
        

        
        
        
        return (
            <>
                <Hero
                background= {zonesHero}
                title= {'Destinations Defined by Distinction'}
                description= {`From the quiet pulse of the shoreline to the vibrant energy of the metropolitan center, explore our guide to the
                    neighborhoods that mirror your ambition and your aesthetic.rld`}
                button={false}
                icons={true}
                />
                {
                    loading &&
                    <div className='flex justify-center items-center h-screen'>
                        <span className="loading loading-spinner text-red-100 w-20"></span>
                    </div>
                }



                <div className="flex gap-4 justify-center items-center mt-30 mr-6 mb-6 ml-6">

                {
                    zones.map((zone) => {
                        return (
                            <div key={zone.id} className='flex flex-col justify-center items-center gap-2 w-auto'>
                                <img 
                                src={zone.images[0]}
                                className='size-48 w-full rounded-lg shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] cursor-pointer'
                                onClick={() => navigate(`/zones/${zone.id}`)}
                                />
                            </div>
                        )
                    })
                }
                </div>



        </>
    )
}
