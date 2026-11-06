import React, { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom';

import api from '../../helpers/api';
import Title from '../../components/Title';
import Project_Card from '../../components/Project_Card';

export default function DeveloperProjects() {

    const {id} = useParams();

    const [developer, setDeveloperProjects] = useState(null);

    const [loading, setLoading] = useState(true);

    const navigate = useNavigate()

    const getDeveloperProjects = async () => {
        try {
            const response = await api.get(`/developer/${id}`);
            setDeveloperProjects(response.data);
        } catch (error) {
            console.log("Error fetching projects: ", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getDeveloperProjects();
    }, [id])

    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <span className="loading loading-spinner text-red-100 w-20"></span>
            </div>
        )
    }

    if (!developer) {
        return <p className="text-[22px] text-dark-100 font-lato font-semibold text-center">Projects Not Found</p>
    }

  return (
    <div className='px-9'>
        <Title
        text={'Developers Projects'}
        marginTop={'mt-10'}
        />
        <div className="w-full mt-12">
            <img
            src={developer.images[0]}
            className='w-full object-cover rounded-3xl'
            />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-15 items-stretch">
            {
                    developer.projects.map((project) => {
                    return (
                        <Project_Card 
                        key={project.id}
                        cardWidthClass='w-full'
                        card_image={project.images[0]}
                        developer={project.name_en}
                        description={project.description_en}
                        buttonAction={() => navigate(`/developers/${id}/${project.id}`)}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}
