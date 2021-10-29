import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import journalImage from '../images/Journal.webp';
import previousImage from '../images/viewprevious.jpg';

function Cards() {
  return (
    <div className='cards'>
    {/* <video src='/videos/b.jpg'/>  */}
      <h1>Pen down your thoughts!</h1>
      {/* <h2>Pen down your thoughts!</h2> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={journalImage}
              text='Write a new journal'
              // label=''
              path='/text-editor'
            />
          
          {/* <ul className='cards__items'> */}
            <CardItem
              src={previousImage}
              text='View previous journals'
              // text='Travel through the islands of Bali in our private island'
              // label=''
              path='/notes-list'
            />
          </ul>
          {/* <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;