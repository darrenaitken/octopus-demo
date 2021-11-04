// Node Modules
import React, { useEffect, useRef } from 'react'
import { useHistory } from "react-router-dom";

// Components and styles
import imgOctopus from "../../assets/octopus.svg"
import Blurb from "../../components/blurb"

import styles from "./home.module.scss"

function Home() {

    const refBtnDemo = useRef()
    const history = useHistory()

    // componentDidMount (run once at the start)
    useEffect(() => {
        refBtnDemo.current.focus()
    },[])

    function handleRedirectToProducts(e) {
        e.preventDefault()
        history.push("products");
    }

    return (
        <>
        <img src={imgOctopus} className="octopus" alt="Octopus"/>
        <Blurb blurbText="Welcome to this small React app demo created by Darren Aitken"/>
        <div className={styles.buttonContainer}>
            <button id="btnDemo" 
                ref={refBtnDemo} 
                aria-label="See Demo" 
                onClick={handleRedirectToProducts} 
                onKeyDown={handleRedirectToProducts}>
            See Demo
            </button>
        </div>
        </>
    )
}

export default Home
