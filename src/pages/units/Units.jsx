import React, { useEffect, useState } from 'react'
import api from '../../helpers/api'

import { useNavigate } from 'react-router-dom'

import Hero from '../../components/Hero'
import unitsHero from '../../assets/images/unitsHero.png'

import Lens from '../../assets/icons/lucide_search.svg'

import Project_Card from '../../components/Project_Card'
import Button from '../../components/Button'

export default function Units() {

    const [units, setUnits] = useState([])

    const [loading, setLoading] = useState(true)

    const [search, setSearch] = useState("")
    const [bedrooms, setBedrooms] = useState("")
    const [developer, setDeveloper] = useState("")
    const [zone, setZone] = useState("")
    const [project, setProject] = useState("")
    const [status, setStatus] = useState("")
    const [price, setPrice] = useState("")

    const navigate = useNavigate()


    const getUnits = async () => {

        try {
            const response = await api.get("/unit");
            setUnits(response.data);
            setLoading(false);
        } catch (error) {
            console.log("Error fetching units", error);
        } finally {
            setLoading(false);
        }
    }
    
    useEffect(() => {
        console.log(units);
    }, [units])

    useEffect(() => {
        getUnits()
    }, [])

    const filteredUnits = units.filter((unit => {
        return (
            unit.title_en.toLowerCase().includes(search.toLowerCase()) &&
            (bedrooms === "" || unit.bedrooms == bedrooms) &&
            (developer === "" || unit.developerName_en == developer) &&
            (zone === "" || unit.zoneName_en == zone) &&
            (project === "" || unit.projectName_en == project) &&
            (status === "" || unit.status == status) &&
            (price === "" || unit.price <= price)
        )
    }))


    // const result = filteredUnits(units, search, price, bedrooms)




  return (
    <div>
        <Hero
            background= {unitsHero}
            title= {'Where Visionary Design Meets Daily Life'}
            description= {`Experience a collection of residences designed as personal sanctuaries. Each unit balances expansive city
                views with artisanal textures and quiet, light-filled interiors to create the ultimate retreat from the world`}
            button={false}
            icons={true}
        />

        {/* Search */}
        <div className="px-9 mt-51.5 flex justify-center items-center">

            {/* Title */}
            <div className="flex border border-red-100 rounded-l-lg w-81.5 justify-center items-center">
                <input
                type="text"
                placeholder='Search Property'
                className="p-3 rounded-l-lg w-full"
                value ={search}
                onChange={(e) => {setSearch(e.target.value)}}
                />
            </div>
            
            {/* Bedrooms */}
            <select
            className='p-3 border border-red-100 w-43.5'
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            >
                <option className='text-[#BEBEBE]' value="">All Bedrooms</option>
                <optgroup>
                    {units.map((unit) => {
                    return (
                        <option className='' value={unit.bedrooms}>{unit.bedrooms} Bedrooms</option>
                    )
                    })}
                </optgroup>
            </select>

            {/* Developer */}
            <select
            className='p-3 border border-red-100 w-43.5'
            value={developer}
            onChange={(e) => setDeveloper(e.target.value)}
            >
                <option className='text-[#BEBEBE]' value="">All Developers</option>
                <optgroup>
                    {units.map((unit) => {
                    return (
                        <option className='' value={unit.developerName_en}>{unit.developerName_en}</option>
                    )
                    })}
                </optgroup>
                
            </select>
            
            {/* Zone */}
            <select
            className='p-3 border border-red-100 w-43.5'
            value={zone}
            onChange={(e) => setZone(e.target.value)}
            >
                <option className='text-[#BEBEBE]' value="">All Zones</option>
                <optgroup>
                    {units.map((unit) => {
                    return (
                        <option className='' value={unit.zoneName_en}>{unit.zoneName_en}</option>
                    )
                    })}
                </optgroup>
                
            </select>

            {/* Project */}
            <select
            className='p-3 border border-red-100 w-43.5'
            value={project}
            onChange={(e) => setProject(e.target.value)}
            >
                <option className='text-[#BEBEBE]' value="">All Projects</option>
                <optgroup>
                    {units.map((unit) => {
                    return (
                        <option className='' value={unit.projectName_en}>{unit.projectName_en}</option>
                    )
                    })}
                </optgroup>
                
            </select>
            
            {/* Status */}
            <select
            className='p-3 border border-red-100 w-43.5'
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            >
                <option className='text-[#BEBEBE]' value="">All Statuses</option>
                <optgroup>
                    <option className='' value="AVAILABLE">Available</option>
                    <option className='' value="UNAVAILABLE">Unavailable</option>
                </optgroup>

            </select>

            {/* Price */}
            <select
            className='p-3 border border-red-100 rounded-r-lg w-43.5'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            >
                <option className='text-[#BEBEBE]' value="">All Prices</option>
                <optgroup>
                    <option value="5000000">Up to 5000000EGP</option>
                    <option value="10000000">Up to 10000000EGP</option>
                    <option value="15000000">Up to 15000000EGP</option>
                    <option value="20000000">Up to 20000000EGP</option>
                </optgroup>

            </select>

        </div>
            
        <div className="flex justify-center items-center mt-14">
            <Button
            buttonContent={'Clear Search'}
            fontPlayfair={false}
            onClick={() => {
                setSearch("")
                setBedrooms("")
                setDeveloper("")
                setZone("")
                setProject("")
                setStatus("")
                setPrice("")
            }}
            />
        </div>


        {loading ? <div className='flex justify-center items-center h-screen'>
                        <span className="loading loading-spinner text-red-100 w-20"></span>
                    </div>
                    :
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-33 px-9 items-stretch">
            {filteredUnits.length > 0 ? (
                filteredUnits.map((unit) => {
                    return (
                        <Project_Card 
                        key={unit.id}
                        cardWidthClass='w-full'
                        card_image={unit.images[0]}
                        title={unit.title_en}
                        developer={unit.developerName_en}
                        priceExist={true}
                        price={unit.price}
                        description={unit.description_en}
                        status={true}
                        statusContent={unit.status}
                        statusColor={unit.status == 'AVAILABLE' ? 'bg-[#21E008]' : 'bg-red-100'}
                        rooms={true}
                        bedrooms={unit.bedrooms}
                        bathrooms={unit.bathrooms}
                        size={unit.size}
                        buttonAction={() => navigate(`/units/${unit.id}`)}
                        />
                    )
                }))
                :
                (<p className='text-[22px] text-dark-100 font-lato font-semibold'>No units found.</p>)
            }
                
        </div>}

    </div>
  )
}
