import "./header.css";
import React from "react";
import cart from "assets/emptycart.png";
import logo from "assets/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {
    
const Navigate = useNavigate();
  const play = (e) => {
    e.preventDefault();
    Navigate("/game");
  };
  return (
    <header className="header">
      <Link to="">
        <img className="logo" alt="cart" src={logo} />
      </Link>
      <h2 className="title">Store</h2>
      <div>
        <button className="btn" onClick={play}>
          Play Game
        </button>
      </div>
      <Link to="cart">
        <img className="cart" alt="cart" src={cart} />
      </Link>
    </header>
  );
}
