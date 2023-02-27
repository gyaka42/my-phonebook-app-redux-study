import React from "react";
import logo1 from "../assets/img/book.gif";
import "../styles/header.css";

const Header = () => {
    return(
        <div className="main-container">
            <nav className="nav-container">
            <h1>Redux Phone Book</h1>
            <img className="headerImg" src={logo1} alt="book" />
            </nav>
        </div>
    )
}

export default Header