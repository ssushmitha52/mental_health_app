import React from 'react';
import '../../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Infodisplay from '../Infodisplay';

export default function Therapistinfo() {
  return ( 
     <div classname="therapist">
     
            <Infodisplay />
        
    
   </div>
 );
}

