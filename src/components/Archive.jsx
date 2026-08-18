
import { useState } from 'react'
import Home from './Home'
import { Link } from 'react-router-dom';
import './Archive.css'

function Archive() {

    return (
      <div className="Archive">
        <div id='back-btn'>
        <Link to="/" className="nav">back</Link>
        </div>
      </div>
    )
}
export default Archive;