import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addSleep} from '../actions/index';
import sleepImg from '../images/sleep.png';


import './sleep-entry.css';

export class SleepEntry extends Component{

    selectSleep(sleep){
        this.props.dispatch(addSleep(sleep));
    }

    render() {

        const sleeps = this.props.sleeps.map((sleep, key) => {
            return (
                <li className="sleeps" key={key}>
                    <input type="radio" id={sleep.id} className="hide" name="sleep"
                    value={sleep.value} onClick={() => this.selectSleep(sleep.value)} defaultChecked={this.props.sleep === sleep.value} />
                    <label htmlFor={sleep.id}><i className="fa fa-fw fa-circle" id={sleep.colour}></i>{sleep.name}</label>
                </li>
            )
        });

        return (
            <div className="sleep">

                <div className="card">

                    <img src={sleepImg} alt="Sleep icon" className="sleepimg"/>

                    <h1>What was the quality level of your sleep last night?</h1>

                    <ul className="choices">
                        {sleeps}
                    </ul>

                </div>

                {/* <p className="icons">Icons made by Cursor Creative from <a href="http://www.flaticon.com" className="icons" target="_blank" rel="noopener noreferrer">www.flaticon.com</a></p> */}

            </div>
        );
    }
}

const mapStateToProps = state => ({
    sleep: state.entry.newEntry.sleep,
    sleeps: state.entry.sleeps
});

export default connect(mapStateToProps)(SleepEntry);
