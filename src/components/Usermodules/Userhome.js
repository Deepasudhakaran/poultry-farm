import React from 'react';
import Navbar from './Navbar';
import Carousel from 'react-bootstrap/Carousel';


const Userhome = () => {
  return (
    <div>
        <Navbar/>
        <div className='main'>
          <div className='chicken'>

          </div>
          
           <h1>hello</h1>
           <Carousel data-bs-theme="dark"  style={{color:'blue'}} >
      <Carousel.Item>
        <p>hi</p>
        <img src='https://tse4.mm.bing.net/th?id=OIP.aihq9RsoA3eZkR64PXTikAHaEL&pid=Api&P=0&h=180' alt=''/>
      </Carousel.Item>

      <Carousel.Item>
        <p>hello</p>
      </Carousel.Item>

      <Carousel.Item>
        <p>hello</p>
      </Carousel.Item>
    </Carousel>
      </div>
    </div>
  );
}

export default Userhome;
