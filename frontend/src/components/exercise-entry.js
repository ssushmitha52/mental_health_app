import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addExercise} from '../actions/index';
import stressImg from '../images/stress.png';

import './exercise-entry.css';

export class ExerciseEntry extends Component{

    selectExercise(exercise){
        this.props.dispatch(addExercise(exercise));
    }

    render() {

        const exercises = this.props.exercises.map((exercise, key) => {
            return (
                <li className="exercises" key={key}>
                      <input type="radio" id={exercise.id} className="hide" 
                             name="exercise" value={exercise.value} onClick={() => this.selectExercise(exercise.value)} defaultChecked={this.props.exercise === exercise.value} />
                      <label htmlFor={exercise.id}><i className="fa fa-fw fa-circle" id={exercise.colour}></i>{exercise.name}</label>
                </li>
            )
        });

        return (
            <div className="exercise">

                <div className="card">

                    <img src={stressImg} alt="Stress icon" className="sleepimg"/>

                    <h1>How often do you feel stressed?</h1>

                    <ul className="choices">
                        {exercises}
                    </ul>

                </div>

                {/* <p className="icons">Icons made by <a href="https://www.flaticon.com/authors/freepik" className="icons" target="_blank" rel="noopener noreferrer">Freepik</a> from <a href="http://www.flaticon.com" className="icons" target="_blank" rel="noopener noreferrer">www.flaticon.com</a></p> */}

            </div>
        );
    }
}

const mapStateToProps = state => ({
    exercise: state.entry.newEntry.exercise,
    exercises: state.entry.exercises
});

export default connect(mapStateToProps)(ExerciseEntry);
