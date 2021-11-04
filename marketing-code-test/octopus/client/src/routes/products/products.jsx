// Node modules
import React from 'react'

// Components and styles
import imgLightbulb from "../../assets/lightbulb.jpg"

import styles from "./products.module.scss"

function Products() {

    // const handleBtnAdd_onClick = (e) => {
    //     // Do not allow form button to reload the browser
    //     e.preventDefault();

    //     console.log('Button clicked...')
    // }

    return (
        <div className={styles.gridContainer}>
            <img className={styles.imgProduct} src={imgLightbulb}/>
            <div className={styles.gridImageBottom}></div>
            
            <div className={styles.gridTitle}><h2>Title</h2></div>
            <div className={styles.gridQuantity}>Quantity</div>
            <div className={styles.gridDescription}>Description</div>
            <div className={styles.gridSpecs}>Specs</div>
        </div>
    )
}

export default Products
