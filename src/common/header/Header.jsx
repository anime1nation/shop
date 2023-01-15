import "./header.css";
import React from "react";
import cart from "assets/emptycart.png";
import logo from "assets/logo.png";

export default function Header(){
    
    return (
        <header className="header">
            <img className="logo" alt="cart" src={logo} />
            <h2 className="title">Store</h2>
            <img className="cart" alt="cart" src={cart}  />
            
            
        </header>
    )

}