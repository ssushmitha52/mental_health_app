import React from 'react';
import './Therapist.css';

import Doctorlist from './Doctorlist';

// import './CardItem.css'

function Therapist() {
  return (
    <div className='doc'>
    {/* <video src='/videos/b.jpg'/>  */}
      {/* <h1>Pen down your thoughts!</h1> */}
      {/* <h2>Pen down your thoughts!</h2> */}
      <div className='doc__container'>
        <div className='doc__wrapper'>
          <ul className='doc__items'>
            <Doctorlist
              src='images/Journal.webp'
              text='Write a new journal'
              label='Click to learn more'
              path='/journal'
            />
          
          {/* <ul className='cards__items'> */}
            <Doctorlist
              src='images/doc1.jpg'
              text='Write a new journal'
              // text='Travel through the islands of Bali in our private island'
              label='Click to learn more'
              path='/therapist'
            />

            <Doctorlist
              src='images/viewprevious.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              // text='Travel through the islands of Bali in our private island'
              label='Click to learn more'
              path='/services'
            />

          </ul>
           <ul className='doc__items'> 
            <Doctorlist
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Click to learn more'
              path='/services'
            />
            <Doctorlist
              src='images/img-4.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Click to learn more'
              path='/products'
            />
            <Doctorlist
              src='images/img-8.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Click to learn more'
              path='/sign-up'
            />
          </ul> 
        </div>
      </div>
    </div>
  );
}

export default Therapist;