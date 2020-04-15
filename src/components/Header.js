import React from 'react';
import Hamburger from '../components/images/hamburge.png';

const Header = () =>{
    
    return(
        <div className='navbar'>
                <div className='hamburger'>
                <img src={Hamburger} alt='hamburger' className='hamburger-img'/>
                </div>
                <div className='nav'>
                    <div className='logo'>My-Logo</div>
                    <ul className = 'nav-link'>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Service</li>
                    <li>About</li>
                    <li>Contact</li>
                   </ul>
                </div>
                
                          
            
        </div>
    )
}

export default Header;