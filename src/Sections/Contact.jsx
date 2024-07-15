import React from 'react'
import "./Contact.css"
import Heading from '../component/Heading/Heading'

function Contact() {
  return (
    <div id='contact' className='contact'>
    <div className="contact-us">
       
        <Heading subTitle={"Get in touch"} title ={"Contact us"}/>




        <p>Please fill out our form, call us, or email us – <br />
        and we will get back to you as soon as we can.</p>
        <span><p className='num'> (310) 472-7600 | sales@collarcard.com</p></span>

        <div className="input-container">
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />

            <input type="number" placeholder='Phone' />

            <textarea type="text" placeholder='Message' />
            <button>Submit</button>

        </div>
    </div>
    </div>
  )
}

export default Contact