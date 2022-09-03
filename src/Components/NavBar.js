import React from "react";

export default function NavBar(){
    return(
        <nav className="nav-bar">
            <img className="nav-img" src={require('./reactjs-icon.png')} alt="Logo" width={"80px"}/>
            <h3 className="nav--heading">ReactFacts</h3>
            <h4 className="nav--text">React Course - Project 1</h4>
        </nav>
    )
}