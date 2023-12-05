import React from 'react'
import { Link } from 'react-router-dom'
import "./../App.css"
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Fullstack Application</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <button className='btn  btn-outline-light'>
                        <Link className='hover-add' style={{ textDecoration: "none" }} to="/adduser">Add User</Link></button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar