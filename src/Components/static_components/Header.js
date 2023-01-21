import React from 'react';
import {Link} from 'react-router-dom'

const Header = (props) => {
    return (
    <>
        <img className="imgheader" src={process.env.PUBLIC_URL +"../image-hero.jpg"} alt='hey'></img>
        <div className="header">
        <h3 >loopstudios</h3>
            <ul className="listitems">

                <li className="listitem">
                    <Link to='/' className='nav-links' >home</Link>
                </li>
                <li className="listitem">
                    <Link to='/about' className='nav-links' >about</Link>
                </li>
                <li className="listitem">
                    <Link to='/products' className='nav-links' >products </Link>
                </li>
                <li className="listitem">
                    <Link to='/support' className='nav-links' >support </Link>
                </li>
            </ul>
        </div> 
    </>
    );
}

export default Header;