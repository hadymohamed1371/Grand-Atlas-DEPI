import React from 'react'

// import LocationPin from '../../../assets/icons/akar-icons_location.svg'
import Mail from '../../../assets/icons/lucide_mail.svg'
import Phone from '../../../assets/icons/boxicons_mobile.svg'
import Telephone from '../../../assets/icons/line-md_phone.svg'
import Facebook from '../../../assets/icons/link_icons/FacebookContactUsIcon.svg'
import Twitter from '../../../assets/icons/link_icons/TwitterContactUsIcon.svg'
import Instagram from '../../../assets/icons/link_icons/InstagramContactUsIcon.svg'
import TikTok from '../../../assets/icons/link_icons/TikTokContactUsIcon.svg'

export default function Contact_Information() {
  return (
    <div className='w-168.25'>

            <p className="text-[34px] font-playfair font-semibold mb-3">
                Contact Information
            </p>

            <p className="text-[18px] font-lato text-dark-30 w-148 mb-8">
                Our team is available for private consultations and off-market inquiries. We operate with absolute discretion to ensure your real estate objectives are met with precision.
            </p>

            <div className="flex flex-col gap-9">
                <div className="text-[18px] text-red-100 font-lato font-medium flex flex-col gap-5">
                    {/* <div className="flex gap-2">
                        <img src={LocationPin} className='w-6' />
                        <p>Minusio, Lake Maggiore, Switzerland — ref. LOC1771</p>
                    </div> */}
                    <div className="flex gap-2">
                        <img src={Mail} className='w-6' />
                        <a href="mailto:grand.atlas.support@gmail.com">Grand.Atlas.Support@gmail.com</a>
                    </div>
                    <div className="flex gap-2">
                        <img src={Phone} className='w-6' />
                        <p>01247859622</p>
                    </div>
                    <div className="flex gap-2">
                        <img src={Telephone} className='w-6' />
                        <p>035987124</p>
                    </div>
                </div>

                <div className="text-[23px] text-dark-30 font-playfair font-semibold flex flex-col gap-4">
                    <p>Follow us on Social media</p>
                    <div className="flex gap-3.25">
                        <a href='https://facebook.com'><img src={Facebook} alt="Facebook" className='w-10.5' /></a>
                        <a href='https://x.com'><img src={Twitter} alt="Twitter" className='w-10.5' /></a>
                        <a href='https://instagram.com'><img src={Instagram} alt="Instagram" className='w-10.5' /></a>
                        <a href='https://tiktok.com'><img src={TikTok} alt="TikTok" className='w-10.5' /></a>
                    </div>
                </div>

                <div>
                    <p className="text-[22px] text-dark-30 font-playfair font-semibold mb-4">Working Hours</p>
                    <div className="text-[20px] font-lato font-medium flex gap-2">
                        <div className="text-red-100">
                            <p className="">Saturday :</p>
                            <p className="">Sunday :</p>
                            <p className="">Monday :</p>
                            <p className="">Tuesday :</p>
                            <p className="">Wednesday :</p>
                        </div>
                        <div className="text-dark-30">
                            <p className="">9:00AM - 5:00 PM</p>
                            <p className="">9:00AM - 5:00 PM</p>
                            <p className="">9:00AM - 5:00 PM</p>
                            <p className="">9:00AM - 5:00 PM</p>
                            <p className="">9:00AM - 5:00 PM</p>
                        </div>
                    </div>
                </div>

            </div>
            

    </div>
  )
}
