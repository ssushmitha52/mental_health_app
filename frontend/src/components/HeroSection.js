import React from 'react';
import '../App.css';
import  { Button }  from './Button';
import './HeroSection.css';
// import { useHistory } from "react-router-dom";


function HeroSection() {

  // let history = useHistory();

  return (
    <div className='hero-container'>
      <video src='/videos/bg3.mp4' autoPlay loop muted/>
      <h1>AMIGO</h1> 
      <p>Your Personal Mental Health Tracker</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Happiness Tracker
          {/* <p><h5></h5></p> */}
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick= {console.log('hey')}
          
        >
          Journaling <i className='far fa-play-circle' />
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('hey')}
          
        >
          Connect to a therapist <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;