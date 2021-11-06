// Node modules
import React, { memo } from 'react'
import PropTypes from "prop-types"

// Components and styles
import styles from "./buttonSmall.module.scss"

function ButtonSmall({ id, name, buttonText, alt, handleInteraction}) {
    return (
        <button 
        id={id}
        name={name}
        className={styles.small} 
        alt={alt}
        onClick={handleInteraction} 
        onKeyDown={handleInteraction} 
        >{buttonText}</button>
    )
}

ButtonSmall.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    handleInteraction: PropTypes.func.isRequired
};

export default memo(ButtonSmall)
