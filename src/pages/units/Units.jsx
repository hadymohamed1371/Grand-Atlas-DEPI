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
        <div className="mx-9 mt-51.5 flex justify-between items-center border border-red-100 rounded-lg">

            {/* Title */}
            <div className="relative flex rounded-l-lg w-81.5 justify-center items-center">
                <input
                type="text"
                id='search-property'
                placeholder='Search Property'
                
                className="p-3 rounded-l-lg w-full focus:outline-none focus:ring-0"
                value ={search}
                onChange={(e) => {setSearch(e.target.value)}}
                />
                <label for='search-property' className='absolute w-8 right-[5%]'>
                    <img src={Lens}/>
                </label>
            </div>

            <div className="w-px h-12 bg-red-100"></div>
            
            {/* Bedrooms */}
            <select
            className='p-3 w-43.5 focus:outline-none focus:ring-0'
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            >
                <option className='text-[#BEBEBE]' value="">All Bedrooms</option>
                <optgroup>
                    {[...new Set(units.map((unit) => unit.bedrooms).filter((bedrooms) => bedrooms !== null && bedrooms !== undefined && bedrooms !== ''))]
                    .sort((a, b) => Number(a) - Number(b))
                    .map((bedrooms) => (
                        <option key={bedrooms} value={bedrooms}>
                            {bedrooms} Bedrooms
                        </option>
                    ))}
                </optgroup>
            </select>

            <div className="w-px h-10 bg-red-100"></div>

            {/* Developer */}
            <select
            className='p-3 w-43.5 focus:outline-none focus:ring-0'
            value={developer}
            onChange={(e) => setDeveloper(e.target.value)}
            >
                <option className='text-[#BEBEBE]' value="">All Developers</option>
                <optgroup>
                    {[...new Set(units.map((unit) => unit.developerName_en).filter(Boolean))].map((devName) => (
                    <option key={devName} value={devName}>
                        {devName}
                    </option>
))}
                </optgroup>
                
            </select>
            
            <div className="w-px h-10 bg-red-100"></div>
            
            {/* Zone */}
            <select
            className='p-3 w-43.5 focus:outline-none focus:ring-0'
            value={zone}
            onChange={(e) => setZone(e.target.value)}
            >
                <option className='text-[#BEBEBE]' value="">All Zones</option>
                <optgroup>
                    {[...new Set(units.map((unit) => unit.zoneName_en).filter(Boolean))].map((zone) => (
                        <option key={zone} value={zone}>
                            {zone}
                        </option>
                    ))}
                </optgroup>
                
            </select>

            <div className="w-px h-10 bg-red-100"></div>

            {/* Project */}
            <select
            className='p-3 w-43.5 focus:outline-none focus:ring-0'
            value={project}
            onChange={(e) => setProject(e.target.value)}
            >
                <option className='text-[#BEBEBE]' value="">All Projects</option>
                <optgroup>
                    {[...new Set(units.map((unit) => unit.projectName_en).filter(Boolean))].map((projectName) => (
                        <option key={projectName} value={projectName}>
                            {projectName}
                        </option>
                    ))}
                </optgroup>
                
            </select>

            <div className="w-px h-10 bg-red-100"></div>
            
            {/* Status */}
            <select
            className='p-3 w-43.5 focus:outline-none focus:ring-0'
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            >
                <option className='text-[#BEBEBE]' value="">All Statuses</option>
                <optgroup>
                    <option className='' value="AVAILABLE">Available</option>
                    <option className='' value="UNAVAILABLE">Unavailable</option>
                </optgroup>

            </select>
            
            <div className="w-px h-10 bg-red-100"></div>

            {/* Price */}
            <select
            className='p-3 rounded-r-lg w-43.5 focus:outline-none focus:ring-0'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            >
                <option className='text-[#BEBEBE]' value="">All Prices</option>
                <optgroup>
                    <option value="1000000">Up to 1000000EGP</option>
                    <option value="5000000">Up to 5000000EGP</option>
                    <option value="10000000">Up to 10000000EGP</option>
                    <option value="15000000">Up to 15000000EGP</option>
                    <option value="20000000">Up to 20000000EGP</option>
                    <option value="25000000">Up to 25000000EGP</option>
                    <option value="30000000">Up to 30000000EGP</option>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-33 px-9 items-stretch relative">
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
                (<div className="w-full flex justify-center items-center absolute">
                    <p className='text-[22px] text-dark-100 font-lato font-semibold'>
                        No units found.
                    </p>
                </div>)
            }
                
        </div>}

    </div>
  )
}
