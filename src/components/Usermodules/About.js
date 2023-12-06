import React from 'react';
import Navbar from './Navbar';
import './About.css'

const About = () => {
  return (
    <div>
        <Navbar/>
        <div className='abou'>
          <div className='hero'>
            <div className='hero-content '>
      <h1>Welcome to Poultry Farm</h1>
      <p>Your Trusted Farm Partner</p>
      </div>
      </div>


      <div className='about-section'>
        <div className='contain'>
      <h1>About Us</h1>
        <p>The Poultry Farm Management System, developed using the MERN stack, is a vital tool for
efficient and well-managed poultry farming operations. This system streamlines poultry farm
operations, improves data accuracy, and fosters effective communication between
administrators and users, ultimately enhancing the overall health and productivity of the

poultry farm. The MERN stack's capabilities in web development ensure a responsive, feature-
rich, and user-.friendly experience for all stakeholders involved in poultry farm management.</p>
      </div>
      </div>
      
      </div>
    </div>
  );
}

export default About;
