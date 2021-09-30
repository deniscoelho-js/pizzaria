import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg'
import '../styles/Contact.css'


const Contact = () => {
    return (
        <div className="contact">
            <div className="leftside" 
                   style={{backgroundImage: `url(${PizzaLeft})`}}
            ></div>
            <div className="rightside">
                <h1>Contact Us</h1>
                <form id="contact-from" method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name="name" placeholder="Enter full name:" />
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" placeholder="Enter Email:" />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" cols="30" rows="10"></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
            
        </div>
    )
}

export default Contact
