import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Textsave() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
   const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='textsave'>
        <div className='textsave-container'>
          {/* <Link to='/' className='textsave-logo' onClick={closeMobileMenu}>
            Amigo
            <i class='fab fa-typo3' />
          </Link> */}
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          
            {/* <li className='text-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
               Home
              </Link>
            </li> */}
            {/* <li className='text-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link> */}
            {/* </li> 
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li> */}

             {/* <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                SAVE
              </Link>
            </li> */}
          </ul>
         
          {button && <Button buttonStyle='btn--outline'>SAVE</Button>}
          {button && <Button buttonStyle='btn--outline'>DISCARD</Button>}
        </div>
      </nav>
    </>
  );
}

export default Textsave;