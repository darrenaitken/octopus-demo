// Node Modules
import React, { useEffect, useRef } from 'react'
import { useHistory } from "react-router-dom";

import { validInteraction } from '../../js/genericFunctions';

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
        if(validInteraction(e)) {
            e.preventDefault()
            history.push("product");
        }        
    } 

    return (
        <div className="contentContainer">
            <img src={imgOctopus} className="octopus" alt="Octopus"/>
            <Blurb blurbText="Welcome to this small React app demo created by Darren Aitken"/>
            <div className={styles.buttonContainer}>
                <button id="btnDemo" 
                    ref={refBtnDemo} 
                    className="standard"
                    aria-label="See Demo" 
                    onClick={handleRedirectToProducts} 
                    onKeyDown={handleRedirectToProducts}>
                See Demo
                </button>
            </div>
        </div>
    )
}

export default Home
