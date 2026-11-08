import React from 'react'
import Button from '../../../components/Button'

export default function Form() {
  return (
    <form method='POST' className='font-playfair border border-[#E2E2E2] p-7.5 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-3xl w-168.25 h-auto flex flex-col'>
        <p className="text-[26px] font-semibold">Send us a message</p>

        <div className="flex flex-col text-[20px] font-medium mt-9">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" className="bg-[#F7F7F7] border border-dark-10 block rounded-lg p-3 mt-1 mb-4 h-14.5" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className="bg-[#F7F7F7] border border-dark-10 block rounded-lg p-3 mt-1 mb-4 h-14.5" required />

            <label htmlFor="phone">Phone</label>
                <input type="number" id="phone" name="phone" className="bg-[#F7F7F7] border border-dark-10 block rounded-lg p-3 mt-1 mb-4 h-14.5" />

            <label htmlFor="message">Message</label>
            <textarea type="email" id="message" name="message" className="bg-[#F7F7F7] border border-dark-10 block text-start rounded-lg p-3 mt-1 mb-10.5 h-35" required></textarea>
        </div>
        <div className="mt-auto">
            <Button 
            buttonContent={"Send Message"}
            arrow={false}
            fullWidth={true}
            fontPlayfair={true}
            fontSemiBold={true}
            />
        </div>
    </form>
  )
}
