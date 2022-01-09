import React from 'react'
import Map from './Map'
import { forwardRef } from 'react'
import './styles/contact.css'
const Contact = forwardRef((props:any,ref:any) => {
    return (
        <div className='contact_section' ref={ref}>
            <Map/>
            <div className='contact'>
                <div className='contact_info'>
                    <div className='paragraph'>
                    <p className='info'>Contact Info</p>
                    <p><i className="fas fa-map-marker-alt"></i>Address: Warsaw, Poland</p>
                    <p><i className="fas fa-phone"></i>Phone: 999 888 777</p>
                    <p><i className="fas fa-at"></i>Email: testemail@gmail.com</p>
                    <p><i className="fab fa-safari"></i>Website: wiktormaciazek.pl</p>
                    </div>
                </div>
                <div className='contact_form'>
                    <p className='info'>Contact Form</p>
                    <div>
                        <input placeholder='Your Name*'/>
                        <input className='email' placeholder='Your Email*'/>
                    </div>
                    <div>
                        <input placeholder='Title*'/>
                    </div>
                    <div>
                        <input placeholder='Message...'/>
                    </div>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
})

export default Contact