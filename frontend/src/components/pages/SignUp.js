import React from 'react';
import '../../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TextEditor from "../TextEditor";
import Textsave from "../Textsave";
import Journal from "./Journal";
import Navbar from '../Navbar';
import Cards from '../Cards';
import './SignUp.css'

export default function SignUp() {
  return (
  
  <div className='sign-up'>
    
    <>
        {/* <Navbar /> */}
        <Cards />
        {/* <Switch>
            <Route path='/journal' component={Journal} />  
         </Switch>  */}

        
    </>

    </div>
  );
}





