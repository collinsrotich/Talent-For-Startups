import React from "react";
import contactus from './images/shane-rounce-1ZZ96uESRJQ-unsplash.jpg'
function Contact(){
    return(
        <div className="contact">
            <h2>Contact Us</h2>
        <img src={contactus}   width="900" height="600"/>
        
        <h4>Reach us on</h4>
        <p><strong>Number:</strong>  254717758527</p>
        <p><strong>Address :</strong>  t4sprogram@t4s.com</p>
        <p><strong>Location:</strong> Sample Building, Sample Road, Nairobi, Kenya</p>

        </div>
    )
}

export default Contact;