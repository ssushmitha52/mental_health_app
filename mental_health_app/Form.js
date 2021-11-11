import React, {Component } from 'react';
import './Form.css';

class Form extends Component {

  handleSubmit = event => {
    alert('Your response has been recorded');
    event.preventDefault()
  }
      render (){
        return(
          <div className="background">
            <div className="form-box">
              <h1>Answer these questions to help us suggest therapists according to your preference</h1> 
              <form onSubmit={this.handleSubmit}>

                <label>Select gender preference for your therapist</label>
                  <div class="select">
                    <select id="gender-select">
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Doesn't Matter">Doesn't Matter</option>
                      <span class="focus"></span>
                    </select>
                  </div>

                <label>Select age group preference for your therapist</label>
                  <div class="select">
                    <select id="age-select">
                      <option value="25-30">25-30</option>
                      <option value="30-40">30-40</option>
                      <option value="40+">40+</option>
                      <span class="focus"></span>
                    </select>
                  </div>


                <label>Select specialization of your preferred therapist</label>
                  <div class="select">
                    <select id="spl-select">
                      <option value="Depression">Depression</option>
                      <option value="OCD">OCD</option>
                      <option value="Anger Management">Anger Management</option>
                      <span class="focus"></span>
                    </select>
                  </div>
                <div>
                  <button type="submit">
                    Submit
                  </button>  
                </div>

              </form>
            </div>
          </div>
        )
      }
}

export default Form