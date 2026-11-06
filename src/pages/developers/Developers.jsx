import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from "../../helpers/api.jsx"

import Hero from '../../components/Hero'
import developersHero from '../../assets/images/developersHero.png'
import Project_Card from '../../components/Project_Card.jsx'


export default function Developers() {

    const [developers, setDevelopers] = useState([])
    const [loading, setLoading] = useState([true])

    const navigate = useNavigate()

    const getDevelopers = async () => {

        try {
            const response = await api.get("/developer");
            setDevelopers(response.data);
            console.log(response.data);
            console.log(developers);
            setLoading(false);

        } catch (error) {
            console.log("Error fetching developers", error);
            setLoading(false);
        }

    }


    useEffect(() => {
        
        getDevelopers();
    }, [])



  return (
      <div>
            <Hero
                    background= {developersHero}
                    title= {'Defining the Future Skyline.'}
                    description= {`Great developments require more than just capital; they require a narrative. We provide the elite marketing and
                        specialized brokerage services needed to position your landmark projects in front of the world’s most
                            discerning buyers.`}
                    button={false}
                    icons={true}  
            />
            {
                loading &&
                <div className='flex justify-center items-center h-screen'>
                        <span className="loading loading-spinner text-red-100 w-20"></span>
                </div>
            }

            <div className='flex gap-4 justify-center items-center mt-30'>
            {
                developers.map((developer) => {
                    return (

                            // <div key={developer.id} className='flex flex-col gap-2 w-auto border border-dark-30 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-2xl'>

                            //     <img src={developer.images[0]} alt="" className='size-48 w-full rounded-t-2xl' />
                            //     <div className="p-4">
                            //         <p className='text-[20px] text-dark-100 font-playfair'>{developer.name_en}</p>
                            //         <p className='text-[16px] text-dark-50 font-lato w-50'>{developer.description_en}</p>
                            //     </div>
                            // </div>
                            <Project_Card
                            card_image={developer.images[0]}
                            cardAltText={developer.name_en}
                            developer={developer.name_en}
                            description={developer.description_en}
                            buttonAction={() => navigate(`/developers/${developer.id}`)}
                            />

                    )
                })
            }
            </div>

    </div>
  )
}
