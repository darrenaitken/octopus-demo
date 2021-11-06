import React from 'react'

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

export default ButtonSmall
