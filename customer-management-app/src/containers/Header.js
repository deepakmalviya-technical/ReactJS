import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                    Customer Management
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/"> Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add">Add</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/list">List</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Header;