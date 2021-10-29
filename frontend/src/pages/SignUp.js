import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Cards from './Cards';
import './SignUp.css'

export default function SignUp() {
  return (
  <div>
      <Navbar />
      <div className='sign-up'>

            {/* <Navbar /> */}
            <Cards />
            {/* <Switch>
                <Route path='/journal' component={Journal} />
             </Switch>  */}



        </div>
    </div>
  );
}





