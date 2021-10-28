import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TextEditor from "./TextEditor";
import Textsave from "./Textsave";

function Journal() {
  return ( 
    <div classname="journal">
    
    <Router>
       
        <TextEditor />
        <Textsave />
    </Router>

    </div>
 );
}

export default Journal;
