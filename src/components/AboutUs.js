import React from 'react';
import './AboutUs.css';

function AboutUs(props) {
  return (
    <div className='aboutus'>

      <div className='aboutus_img'>
        <img src='img/홍보1.jpg'></img>
      </div>


      <div className='aboutus_img'>
        <img src='img/상세설명.jpg'></img>
      </div>

      <div className='aboutus_img'>
        <img src='img/배송안내.jpg'></img>
      </div>

    </div>
  );
}

export default AboutUs;