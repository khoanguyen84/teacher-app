import React from "react";
import { Link } from "react-router-dom";
import logo from '../../asset/images/logo.jpg';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center text-warning" to={"/"}>
                    <img className="rounded-circle logo-sm" src={logo} alt="" />
                    Teacher App
                </Link>
            </div>
        </nav>
    )
}

export default Header;