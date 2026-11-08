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
            setLoading(false);
        } catch (error) {
            console.log("Error fetching developers", error);
        } finally {
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
