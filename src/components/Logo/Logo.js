import React from 'react';
import Tilt from 'react-tilt';
import scan from './scan2.png'
import './Logo.css';



const Logo = () => {
  return (
      <div className='ma4 mt0'>
        <Tilt className="bd Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa2">
          <img alt="www.flaticon.com" src={scan}>
          </img>
        </div>
          
        </Tilt>
      </div>
    );
}


export default Logo;