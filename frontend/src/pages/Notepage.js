import React, {useState,useEffect} from 'react'
import { ReactComponent as ArrowLeft } from '../images/arrow-left.svg'
import { Link } from 'react-router-dom'
import './notes.css'

const NotePage = ({match,history}) => {

    let noteid = match.params.id
    let [note, setNote]=useState(null)

    useEffect(() => {
        getNote()
    }, [noteid])

    let getNote = async () => {
        let t = localStorage.getItem('token');
        console.log(t);
        let response = await fetch(`http://localhost:8000/api/notes/${noteid}/`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        let data = await response.json();
        console.log(data);
        setNote(data);
    }

    let updateNote = async () => {
        let t = localStorage.getItem('token');
        console.log(t);
        let response = await fetch(`http://localhost:8000/api/notes/${noteid}/update/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(note)
        })
    }


    let updateNte = async () => {
        let response = await fetch(`http://localhost:8000/api/notes/${noteid}/update/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let createNote = async () => {
        let t = localStorage.getItem('token');
        console.log(t);
        let response = await fetch(`http://localhost:8000/api/notes/create/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(note)
        })
        let data = await response.json();
        console.log(data);
    }



    let createNot = async () => {
        let response = await fetch(`http://localhost:8000/api/notes/create/`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
        let data = await response.json()
        console.log(data)
    }

    let deleteNote = async () => {
        let t = localStorage.getItem('token');
        console.log(t);
        let response = await fetch(`http://localhost:8000/api/notes/${noteid}/delete/`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        let data = await response.json();
        console.log(data);
        history.push('/notes');
    }

    let deleteNoe = async () => {
        let response= await fetch(`http://localhost:8000/api/notes/${noteid}/delete/`, {
            method: 'DELETE',
            'headers': {
                'Content-Type': 'application/json'
            }
        })
        let data = await response.json()
        console.log(data)
        history.push('/notes')

    }

    let handleSubmit = () => {
        console.log('NOTE:', note)
        if (noteid !== 'new' && note.body == '') {
            deleteNote()
        } else if (noteid !== 'new') {
            updateNote()
        } else if (noteid === 'new' && note.body !== null) {
            createNote()
        }
        history.push('/notes')
    }

    let handleChange = (value) => {
        setNote(note => ({ ...note, 'body': value }))
        console.log('Handle Change:', note)
    }

    return (
    <div className="journal">
        <div className="container dark journal">
            <div className="app journal">
                <div className="note">
                    <div className="note-header">
                        <h3> <ArrowLeft onClick={handleSubmit} /> </h3>
                        {noteid !== 'new' ? (
                            <button onClick={deleteNote}>Delete</button>
                        ) : (
                            <button onClick={handleSubmit}>Done</button>
                        )}
                    </div>
                    <textarea className="journal" onChange={(e) => { handleChange(e.target.value) }} value={note?.body}></textarea>
                </div>
            </div>
        </div>
    </div>
    )
}

export default NotePage;