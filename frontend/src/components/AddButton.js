import React from 'react'
import {Link} from 'react-router-dom'
import { ReactComponent as AddIcon } from '../images/add.svg'
import '../pages/notes.css';


const AddButton = () => {
    return (
        <Link to="/note/new" className="floating-button">
            <AddIcon />
        </Link>
    )
}
export default AddButton