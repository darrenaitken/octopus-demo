// Node Modules
import React from 'react'
import { Link } from "react-router-dom";

// Images
import imgLogo from "../assets/logo.svg"
import imgBasket from "../assets/basket.svg"

// Components and styles
import styles from "./header.module.scss"

function Header() {
    return (
        <header>
            <Link to={"/"} tabIndex="0" aria-label="Go to homepage">
                <img name="logo" className={styles.logo} src={imgLogo} alt="Octopus Energy Logo"/>
            </Link> 
            <div name="basketContainer" className={`${styles.basketContainer} focusOutline`} tabIndex="0" aria-label="Shopping basket">
                <div id="basketCounter" className={styles.basketCounter}>0</div>
                <img src={imgBasket} className={styles.imgBasket} alt="Basket"/>
            </div>
        </header>
    )
}

export default Header
