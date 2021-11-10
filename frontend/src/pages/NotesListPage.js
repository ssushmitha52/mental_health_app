import React, {useState,useEffect} from 'react'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'
import './notes.css';
import axios from 'axios';


const NotesListPage = () => {

    let [notes, setNotes] =useState([])


    useEffect(()=>{
        getNotes()
    },[])

    let getNotes= async () => {
        let t = localStorage.getItem('token');
        console.log(t);
        let response = await fetch(`http://localhost:8000/api/notes`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        let data = await response.json();
        console.log(data);
        setNotes(data);
    }

    return (
    <div className="journal">
        <div className="container dark journal">
            <div className="app journal">
                <div className="notes">
                    <div className="notes-header">
                        <h2 className="notes-title">&#9782; Journal Entries</h2>
                        <p className="notes-count">{notes.length}</p>
                    </div>

                    <div className="notes-list">
                        {notes.map((note, index) => (
                            <ListItem key={index} note={note} />
                        ))}
                    </div>
                    <AddButton/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default NotesListPage