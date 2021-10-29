import React, {useState,useEffect} from 'react'
import { ReactComponent as ArrowLeft } from '../imagess/arrow-left.svg'
import { Link } from 'react-router-dom'
import './notes.css'

const Notepage = ({match,history}) => {

    let noteid = match.params.id
    let [note, setNote]=useState(null)

    useEffect(() => {
        getNote()
    }, [noteid])

    let getNote = async () => {
        if (noteid === 'new') return
        let response = await fetch(`/Journal/notes/${noteid}/`)
        let data = await response.json()
        setNote(data)
    }
    let updateNote = async () => {
        fetch(`/Journal/notes/${noteid}/update/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }
    let createNote = async () => {
        fetch(`/Journal/notes/create/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let deleteNote = async () => {
        fetch(`/Journal/notes/${noteid}/delete/`, {
            method: 'DELETE',
            'headers': {
                'Content-Type': 'application/json'
            }
        })
        history.push('/')
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
        history.push('/')
    }

    let handleChange = (value) => {
        setNote(note => ({ ...note, 'body': value }))
        console.log('Handle Change:', note)
    }

    return (
        <div className="note">
            <div className="note-header">
                <h3>

                    <ArrowLeft onClick={handleSubmit} />

                </h3>
                {noteid !== 'new' ? (
                    <button onClick={deleteNote}>Delete</button>
                ) : (
                    <button onClick={handleSubmit}>Done</button>
                )}
            </div>
            <textarea onChange={(e) => { handleChange(e.target.value) }} value={note?.body}></textarea>
        </div>
    )
}

export default Notepage