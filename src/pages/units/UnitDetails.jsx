import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../helpers/api'
import Details from '../../components/Details';


export default function UnitDetails() {

    const {id} = useParams();

    const [unit, setUnit] = useState(null);

    const [loading, setLoading] = useState(true);

    const getUnitDetails = async () => {
        try {
            const response = await api.get(`/unit/${id}`);
            setUnit(response.data);
        } catch (error) {
            console.log("Error fetching unit: ", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getUnitDetails();
    }, [id])

    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <span className="loading loading-spinner text-red-100 w-20"></span>
            </div>
        )
    }

    if (!unit) {
        return <p className="text-[22px] text-dark-100 font-lato font-semibold text-center">Unit Not Found</p>
    }

    return (
        <div className='px-7.25 pt-1.25 flex flex-col gap-16'>
            <div className="flex flex-col gap-3">
                <div className="w-full">
                    <img
                    src={unit.images[0]}
                    className='w-full object-cover rounded-3xl'
                    />
                </div>
                <div className="flex gap-2">
                    {unit.images.slice(1).map((image, index) => {
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
            title={unit.title_en}
            price={unit.price}
            specs={true}
            size={unit.size}
            bedrooms={unit.bedrooms}
            bathrooms={unit.bathrooms}
            description={unit.description_en}
            buttons={true}
            />

        </div>
    )
}
