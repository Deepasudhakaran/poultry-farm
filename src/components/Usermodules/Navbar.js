import React from 'react';
import './Navbar.css'



const Navbar = () => {
  return (
    <div>
      <div className='topnav1'>
        <div>
        <h2>Poultry Farm</h2>
          <img src="D:\deepa\My project\frontend\src\Images\poutry2.webp" alt='' />
        </div>
      <div className='cd'>
      <a className="ab" href='/userhome'> HOME</a>
      <a className="ab" href='/order'> ORDER</a>
          <a className="ab" href='/About'> ABOUT</a>
            <a className="ab" href='/contact'> CONTACT</a>
            </div>
           
            
      </div>
    </div>
  );
}

export default Navbar;
