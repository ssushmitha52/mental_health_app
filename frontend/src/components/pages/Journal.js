import React from 'react';
import '../../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TextEditor from "../TextEditor";
import Textsave from "../Textsave";
import Navbar from '../Navbar';

export default function Journal() {
  return ( 
     <div classname="journal">
     
        <TextEditor />
        <Textsave />     

    
   </div>
 );
}

