import React from 'react';
import {Element} from 'react-scroll';
import './AboutContent.css'

const About=()=>{
  return(
    <Element name="about">
      <div className="AboutName">
        
      <p><h1 className="bout">About</h1><span>Hi,<br/>I'm Mohana Prasad.V.B</span><br/> Developer</p>
      <a href="https://github.com/MOHANAPRASAD23/First-Repository/raw/main/V.B.Mohana%20Prasad.pdf"><button>Download CV</button></a>
      
    </div>
    </Element>
  )
}

export default About;