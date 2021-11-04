// Node Modules
import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';


// Components and styles
import imgOctopus from "../../assets/octopus.svg"
import Blurb from "../../components/blurb"

import styles from "./notfound.module.scss"

function NotFound() {

    const refLinkHome = useRef()

    const [seconds, setSeconds] = useState(5)

    // componentDidMount (run once at the start)
    useEffect(() => {
        refLinkHome.current.focus()
    },[])

    // Run every render
    useEffect(() => {

        // When component loads set interval to run every second updating the state
        const timer = setInterval(() => {
            setSeconds(seconds - 1);
        }, 1000)

        // When component unloads clear the timer
        return () => clearInterval(timer);

    })

    // Go to the home page once timer reaches zero
    if(seconds === 0) {
        return <Redirect push to="/" />
    }

    return (
        <div className="contentContainer">
            <img src={imgOctopus} className="octopus" alt="Octopus"/>
            <Blurb blurbText="Whoops! Page Not Found" />
            <Blurb blurbText={`We'll get you back home in ${seconds} second${seconds === 1 ? '' : 's'}...`} />
            <Link id="linkHome" ref={refLinkHome} to={"/"} tabIndex="0">Go to Home page</Link>
        </div>
    )
}

export default NotFound
