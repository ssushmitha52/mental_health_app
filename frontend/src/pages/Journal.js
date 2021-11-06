import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TextEditor from "./TextEditor";
import Textsave from "./Textsave";
import Navbar from './Navbar';

function Journal() {
  return (
  <div>
    <Navbar />
    <div classname="journal">

        <Router>

            <TextEditor />
            <Textsave />
        </Router>

    </div>
  </div>
 );
}

export default Journal;
