import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'
// import './Events.css'
const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br1 shadow-2" options={{ max : 55 }} style={{ height: 400, width: 400 }} >
            <div className="Tilt-inner"></div>
            </Tilt>
        </div>
    );
}

export default Logo;