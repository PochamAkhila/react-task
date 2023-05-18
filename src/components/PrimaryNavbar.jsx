import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const PrimaryNavbar = () => {

    const [expanded, setExpanded] = useState(false);

    const toggleNav = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <div className='container'>
                    <h1>Resume Builder</h1>
                    <button className="navbar-toggler" type="button" onClick={toggleNav}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}>
                        <ul className="navbar-nav ms-auto rounded">
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="form">Form</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default PrimaryNavbar