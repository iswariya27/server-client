import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar(props) {
    return (
        <ul className="navbarss col-3">
                <div className="sidtext">Library</div>
            <div className="sidhead">
                Interface
            </div>
            <li className="nav-item">
                <Link className="nav-link" to="/books">
                    <i>Books Record</i></Link>
            </li>           
            <li className="nav-item">
                <Link className="nav-link" to="/authors">
                    <i>Author Record</i></Link>
            </li>
        </ul>
    );
}

export default Sidebar;