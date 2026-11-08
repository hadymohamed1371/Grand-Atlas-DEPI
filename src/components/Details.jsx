import React from 'react'
import { Link } from 'react-router-dom'

export default function Details({title, price, specs, size, bedrooms, bathrooms, description, buttons}) {
  return (
    <div>
        <div className='flex justify-between items-center'>
            <p className="text-[40px] text-red-100 font-lato font-bold">{title}</p>
            {price && <p className="text-[40px] text-beige-100 font-lato font-bold">{price} EGP</p>}
        </div>
        <div className="mt-17.25 flex justify-between">
            {specs && <div className="">
                <p className="text-[26px] text-dark-100 font-lato font-bold mb-6">At a glance</p>
                <div className="ml-10 flex flex-col gap-7.5">
                    <div className="flex items-center gap-4">
                        <div className="bg-dark-30 w-2.5 h-2.5 rounded-[50%]"></div>
                        <p className="text-[26px] text-dark-30 font-lato ">
                            Plot size ca.: {size} m²
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-dark-30 w-2.5 h-2.5 rounded-[50%]"></div>
                        <p className="text-[26px] text-dark-30 font-lato ">
                            Bedrooms: {bedrooms}
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-dark-30 w-2.5 h-2.5 rounded-[50%]"></div>
                        <p className="text-[26px] text-dark-30 font-lato ">
                            Bathrooms: {bathrooms}
                        </p>
                    </div>
                    <p className="text-[26px] text-dark-30 font-lato "></p>
                    <p className="text-[26px] text-dark-30 font-lato "></p>
                </div>
            </div>}
            <div className="w-180">
                <p className="text-[26px] text-dark-100 font-lato font-bold mb-6">Overview</p>
                <p className="text-[26px] text-dark-30 font-lato mb-6">{description}</p>
                {buttons &&
                <div className="flex justify-between">
                    <a href='https://wa.me/1247859622'><div className='w-87 h-14 bg-[#009500] rounded-lg text-[20px] text-[#EEEEEE] font-lato font-bold flex justify-center items-center cursor-pointer'>Contact via WhatsApp</div></a>
                    <Link to='/contact-us' ><div className="w-87 h-14 border border-red-100 rounded-lg text-[20px] text-red-100 font-lato font-bold flex justify-center items-center ">Call</div></Link>
                </div>
                }
            </div>
        </div>
    </div>
  )
}
