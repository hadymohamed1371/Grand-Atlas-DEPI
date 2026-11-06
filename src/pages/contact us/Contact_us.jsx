import React from 'react'

import Hero from '../../components/Hero'
import contactUsHero from '../../assets/images/contactUsHero.png'
import Contact_Information from './sections/Contact_Information'
import Form from './sections/Form'

export default function Contact_us() {
  return (
    <div>
        <Hero
                background= {contactUsHero}
                title= {'Connected Globally. Available Locally.'}
                description= {`With experts positioned in the world’s most influential markets, we are never more than a conversation away.
                            Reach out to our team to experience a new standard of real estate advisory.`}
                button={false}
                icons={false}
        />

        <div className="mt-29.5 flex gap-5 px-9">
            <Contact_Information />
            <Form />
        </div>
    </div>
  )
}
