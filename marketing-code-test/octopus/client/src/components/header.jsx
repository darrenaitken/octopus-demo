// Node Modules
import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import { gsap } from 'gsap';

// Redux
import { useSelector } from "react-redux";

// Images
import imgLogo from "../assets/logo.svg"
import imgBasket from "../assets/basket.svg"

import { validInteraction } from '../js/genericFunctions';

// Components and styles
import styles from "./header.module.scss"

function Header() {

    // Get count from redux counter store
    const totalQuantity = useSelector((state) => state.basket.totalQuantity);

    const refBasketCounter = useRef()

    // Only display the shopping basket for certain routes specified in the array
    const location = useLocation()
    const arrBasketRoutes = ["/product"]
    const showBasket = showBasketInfo()

    // Every time the quantity changes we will highlight it for a few seconds
    useEffect(() => {
        if(totalQuantity > 0) {
            gsap.fromTo(refBasketCounter.current, 
                {backgroundColor: '#29aec5', borderColor: 'white'},
                {backgroundColor: '#36598d', borderColor: '#36598d', duration: 3})
        }
    },[totalQuantity])

    // Function returns true if we should show the basket
    function showBasketInfo() {
        return arrBasketRoutes.indexOf(location.pathname,0) >= 0
    }

    function showBasketWindow(e) {
        if(validInteraction(e)) {
            e.preventDefault()
            
        } 
    }

    return (
        <>
        <header>
            <Link to={"/"} tabIndex="0" aria-label="Go to homepage">
                <img name="logo" className={styles.logo} src={imgLogo} alt="Octopus Energy Logo"/>
            </Link> 
            <div 
            name="basketContainer" 
            className={`${styles.basketContainer} focusOutline`} 
            tabIndex="0" 
            aria-label="Shopping basket"
            onKeyDown={showBasketWindow}
            onClick={showBasketWindow}>
                {showBasket ? 
                <>
                <div id="basketCounter" ref={refBasketCounter} className={styles.basketCounter}>{totalQuantity}</div>
                <img src={imgBasket} className={styles.imgBasket} alt="Basket"/>
                </>
                : null}
            </div>
        </header>
        </>
    )
}

export default Header
