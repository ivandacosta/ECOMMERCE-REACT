import React from "react";
import "./header.css"
import CartWidget from "../CartWidget/CartWidget";


const Header = () => {
    return(
        <header>
            <div className="logo">
                <h2>logo</h2>
            </div>

            <nav>
                <a href="home">home</a>
                <a href="home">home</a>
                <a href="home">home</a>
            </nav>

            <CartWidget />
        </header>
    )
}
export default Header