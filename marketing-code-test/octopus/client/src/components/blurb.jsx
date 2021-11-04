import React from 'react'
import PropTypes from "prop-types"

import styles from "./blurb.module.scss"

function Blurb({ blurbText, tabIndex=-1 }) {

    return (        
        <div name="blurb" className={styles.blurb}>
            {blurbText}
        </div>
    )
}

Blurb.propTypes = {
    blurbText: PropTypes.string
};

export default Blurb
