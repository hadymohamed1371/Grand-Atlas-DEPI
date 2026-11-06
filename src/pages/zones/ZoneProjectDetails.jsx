import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import api from '../../helpers/api';
import Details from '../../components/Details';

export default function ZoneProjectDetails() {

    const {id: zoneId, projectId} = useParams();

    const [project, setProject] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const getProjectDetails = async () => {
        setLoading(true);
        setProject(null);

        try {
            const response = await api.get('/zone');

            // Find the parent zone
            const selectedZone = response.data.find(
                zone => zone.id === zoneId
            );

            // Find the project inside that zone
            const selectedProject = selectedZone?.projects?.find(
                project => project.id === projectId
            );

            setProject(selectedProject ?? null);

        } catch (error) {
            console.error("Error fetching zone project:", error);
            setProject(null);

        } finally {
            setLoading(false);
        }
    };

    getProjectDetails();

    }, [zoneId, projectId]);

    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <span className="loading loading-spinner text-red-100 w-20"></span>
            </div>
        )
    }

    if (!project) {
        return <p className="text-[22px] text-dark-100 font-lato font-semibold text-center">Project Not Found</p>
    }

  return (
    <div className='px-7.25 pt-1.25 flex flex-col gap-16'>
                <div className="flex flex-col gap-3">
                    <div className="w-full">
                        <img
                        src={project.images?.[0]}
                        className='w-full object-cover rounded-3xl'
                        />
                    </div>
                    <div className="flex gap-2">
                        {project.images?.slice(1).map((image, index) => {
                            return (
                                <div key={index} className="w-67.5 h-45">
                                    <img
                                    src={image}
                                    className="w-full h-full object-cover rounded-xl"
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
    
                <Details
                title={project.name_en}
                description={project.description_en}
                buttons={false}
                />
    
            </div>
  )
}
