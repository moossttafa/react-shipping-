import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {FaShippingFast} from 'react-icons/fa';
import { FaBars , FaTimes } from 'react-icons/fa';
import {Button} from './Button';
import './Navbar.css'


const Navbar = () => {
    const [click , setClick ] =  useState(false);
    const [button, setButton] = useState(true);
    const [nav, setNav] = useState(false);
 
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960 ){
            setButton(false)
        }else{
            setButton(true)
        }
    }
    useEffect(() =>{
        showButton();
    }, []);

    const changeBackground = () => {
        if(window.scrollY >= 50){
            setNav(true)
        }else{
            setNav(false)
        }
    }
window.addEventListener("scroll" , changeBackground);
    return (
               <>
            <div className={nav ? 'navbar active' : 'navbar'}>
                <div className="navbar-container container">
                  <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                      <FaShippingFast className="navbar-icon " />
                    FE ELENGAZ
                  </Link>
                  <div className='menu-icon' onClick={handleClick}>
                      {click ? <FaTimes className="icons-nav"/> : <FaBars className="icons-nav"/>}
                  </div>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                    <li className="nav-item ">
                        <Link to="/" className="nav-links"  onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links"  onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className ="nav-item">
                        <Link to='/contactus' className="nav-links"  onClick={closeMobileMenu}>
                          Contact US 
                        </Link>
                    </li>
                    <li className ="nav-item">
                        <Link to='/shapping' className="nav-links"  onClick={closeMobileMenu}>
                           Shapping
                        </Link>
                    </li>
                    <li className ="nav-btn">
                        {button ? (
                            <Link to="/" className="btn-link">
                                <Button  buttonStyle="btn--outline">   SignUp
                                </Button>
                            </Link>
                        ): (
                            <Link to="/" className="btn-link"  onClick={closeMobileMenu}>
                                <Button buttonStyle="btn--outline" 
                                        buttonSize="btn--mobile">
                                SignUp
                                </Button>
                            </Link>
                        )}
                    </li>
                  </ul>
                </div>
            </div>   
        </>   
     )
}

export default Navbar
