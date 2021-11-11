import React, {Component} from 'react';
import {connect} from 'react-redux';

import './review-entry.css';
import analysis2 from '../images/analysis2.png';
import stress from '../images/stress.png';
import eating from '../images/eating.png';
import sleepImg from '../images/sleep.png';

export class ReviewEntry extends Component{

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        let AverageValue = (this.props.newEntry.mood + this.props.newEntry.sleep + this.props.newEntry.eating + this.props.newEntry.exercise ) / 4;
        let Average;

        let moodDescriptionValue = this.props.newEntry.mood;
        let moodDescription;

        let moodTypesDescriptionValue = this.props.newEntry.moodTypes;
        let moodTypesDescription;

        let sleepDescriptionValue = this.props.newEntry.sleep;
        let sleepDescription;

        let eatingDescriptionValue = this.props.newEntry.eating;
        let eatingDescription;

        let exerciseDescriptionValue = this.props.newEntry.exercise;
        let exerciseDescription;

        // let notesDescriptionValue = this.props.newEntry.notes;
        // let notesDescription;

        if (moodDescriptionValue == null) {
            moodDescription = "not entered";
        } else if (moodDescriptionValue === 5) {
            moodDescription = "Amazing";
        } else if (moodDescriptionValue === 4) {
            moodDescription = "Great";
        } else if (moodDescriptionValue === 3) {
            moodDescription = "Good";
        } else if (moodDescriptionValue === 2) {
            moodDescription = "Okay";
        } else if (moodDescriptionValue === 1) {
            moodDescription = "Bad";
        }

        if (moodTypesDescriptionValue.length === 0) {
            moodTypesDescription = "not entered";
        } else if (moodTypesDescriptionValue !== null) {
            moodTypesDescription = moodTypesDescriptionValue.join(", ");
        }

        if (sleepDescriptionValue == null) {
            sleepDescription = "not entered";
        } else if (sleepDescriptionValue === 2.5) {
            sleepDescription = "Oversleeping isn't good for your health";
        } else if (sleepDescriptionValue === 4) {
            sleepDescription = "Good sleep";
        } else if (sleepDescriptionValue === 3) {
            sleepDescription = "Adequate sleep";
        } else if (sleepDescriptionValue === 2) {
            sleepDescription = "Poor sleep";
        } else if (sleepDescriptionValue === 1) {
            sleepDescription = "No sleep at all";
        }

        if (eatingDescriptionValue == null) {
            eatingDescription = "not entered";
        } else if (eatingDescriptionValue === 5) {
            eatingDescription = "Amazing";
        } else if (eatingDescriptionValue === 4) {
            eatingDescription = "Great";
        } else if (eatingDescriptionValue === 3) {
            eatingDescription = "Good";
        } else if (eatingDescriptionValue === 2) {
            eatingDescription = "Okay";
        } else if (eatingDescriptionValue === 1) {
            eatingDescription = "Bad";
        }

        if (exerciseDescriptionValue == null) {
            exerciseDescription = "not entered";
        } else if (exerciseDescriptionValue === 5) {
            exerciseDescription = "not at all";
        }else if (exerciseDescriptionValue === 4) {
            exerciseDescription = "rarely";
        } else if (exerciseDescriptionValue === 2) {
            exerciseDescription = "sometimes";
        } else if (exerciseDescriptionValue === 1) {
            exerciseDescription = "most of the time"
        }

        // if (notesDescriptionValue == null) {
        //     notesDescription = "not entered";
        //   } else if (notesDescriptionValue !== null) {
        //       notesDescription = notesDescriptionValue;
        //   }
        
        if (AverageValue < 2) {
            Average = 'You seem glum today :('
        }
        else if (AverageValue >= 2 & AverageValue < 3) {
            Average = "Your mood seems average"
        }
        else if (AverageValue >= 3 & AverageValue < 4) {
            Average = "Glad to see that you are happy :)"
        }
        else {
            Average = "You seem amazing today! Keep it up!"
        }

        return (
            <div className="review">

                <h1>Review your entry</h1>

                <h2 className="box">

                    <h2 className="box">
                    <img src={analysis2} alt="Analysis icon" className="sleepimg"/>
                    <p>{Average}</p>

                </h2>

                
               
                    <p>Your Description of your mood today :</p>
                    <p>{moodDescription}</p>
                    <p>{moodTypesDescription}</p>
                </h2>
                
                <h2 className="box">
                    <img src={sleepImg} alt="Sleep icon" className="sleepimg"/>
                    <p>{sleepDescription}</p>
                </h2>
                <h2 className="box">
                    <img src={eating} alt="Eating icon" className="sleepimg"/>
                    <p>{eatingDescription}</p>
                </h2>
                <h2 className="box">
                    <img src={stress} alt="Stress icon" className="sleepimg"/>
                    <p>{exerciseDescription}</p>
                </h2>
                {/* <h2 className="box">Notes <br/>
                    {notesDescription}
                </h2> */}

                {/* <p className="icons">Icons made by <a href="https://www.flaticon.com/authors/freepik" className="icons" target="_blank" rel="noopener noreferrer">Freepik</a>, <a href="http://www.baianat.com/" className="icons" target="_blank" rel="noopener noreferrer">Baianet</a>, and Cursor Creative from <a href="http://www.flaticon.com" className="icons" target="_blank" rel="noopener noreferrer">www.flaticon.com</a></p> */}

            </div>
        )
    }
}

const mapStateToProps = state => ({
    newEntry: state.entry.newEntry,
})

export default connect(mapStateToProps)(ReviewEntry);
