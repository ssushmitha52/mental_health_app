import React from 'react';

import './Infodisplay.css'
import Learnmore from './Learnmore';

function Infodisplay() {
  return (
    <div className='learn'>
   
      <div className='learn__container'>
        <div className='learn__wrapper'>
          <ul className='learn__items'>
           
            <Learnmore
              src='images/doc1.jpg'
              text='Hi my name is Dr. Susan'
              path = '/services'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Infodisplay;