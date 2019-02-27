import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
    return (
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Projects">Projects</Link></li>
        </ul>
    )
}

export default navbar;