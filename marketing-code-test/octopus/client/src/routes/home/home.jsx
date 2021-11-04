// Node Modules
import React, { useEffect, useRef } from 'react'
import { Link } from "react-router-dom";

// Components and styles
import imgOctopus from "../../assets/octopus.svg"
import Blurb from "../../components/blurb"

import styles from "./home.module.scss"

function Home() {

    const refBtnDemo = useRef()

    // componentDidMount (run once at the start)
    useEffect(() => {
        refBtnDemo.current.focus()
    },[])

    return (
        <>
        <img src={imgOctopus} className="octopus" alt="Octopus"/>
        <Blurb blurbText="Welcome to this small React app demo created by Darren Aitken"/>
        <div className="buttonContainer">
            <Link id="btnDemo" ref={refBtnDemo} className="buttonStandard" to={"products"} aria-label="See Demo">See Demo</Link>
        </div>
        </>
    )
}

export default Home
