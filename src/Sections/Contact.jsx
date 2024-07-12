import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div id='contact' className='contact'>
    <div className="contact-us">
        <h1 className='h1-get'>Get in touch</h1>
        <h1 className='h1-contact'>Contact us</h1>
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