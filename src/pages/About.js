import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

const About = () => {
    return (
        <div className="about">
            <div className="aboutTop" 
                   style={{backgroundImage: `url(${MultiplePizzas})`}}
            ></div>
            <div className="aboutBottom">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident optio assumenda eius fugiat vel labore error. Esse ipsum recusandae soluta quaerat sapiente sunt deleniti possimus suscipit accusantium labore qui repellendus, modi cumque fugiat quam voluptatibus excepturi commodi nam id, nostrum aperiam, natus eligendi quas. Necessitatibus beatae facilis est non, et illo minima consequuntur cumque harum doloremque hic officiis commodi quae consequatur ipsum ipsa atque nihil doloribus recusandae nam natus vero! Ipsam architecto quia ducimus enim illo ipsum? At iure itaque deleniti? Vel possimus velit fuga rerum vero recusandae expedita libero aperiam omnis earum officia ullam, quas ducimus delectus laborum ut. Provident optio assumenda eius fugiat vel labore error.Provident optio assumenda eius fugiat vari.</p>
            </div>
        </div>
    )
}

export default About
