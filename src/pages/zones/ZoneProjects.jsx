import React, { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom';

import api from '../../helpers/api';

import Title from '../../components/Title';
import Project_Card from '../../components/Project_Card';

export default function ZoneProjects() {

    const {id} = useParams();

    const [zone, setZone] = useState(null);

    const [loading, setLoading] = useState(true);

    const navigate = useNavigate()

    const getZoneProjects = async () => {
        try {
            const response = await api.get(`/zone/${id}`);
            setZone(response.data);
        } catch (error) {
            console.log("Error fetching zone: ", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getZoneProjects();
    }, [id])

    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <span className="loading loading-spinner text-red-100 w-20"></span>
            </div>
        )
    }

    if (!zone) {
        return <p className="text-[22px] text-dark-100 font-lato font-semibold text-center">Zone Not Found</p>
    }

  return (
    <div className='px-9'>
        <Title
        text={'Zone Projects'}
        marginTop={'mt-10'}
        />
        <div className="w-full mt-12">
            <img
            src={zone.images[0]}
            className='w-full object-cover rounded-3xl'
            />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-15 items-stretch">
            {
                    zone.projects.map((project) => {
                    return (
                        <Project_Card 
                        key={project.id}
                        cardWidthClass='w-full'
                        card_image={project.images[0]}
                        developer={project.name_en}
                        description={project.description_en}
                        buttonAction={() => navigate(`/zones/${id}/${project.id}`)}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}
