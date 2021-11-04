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
            <div className={styles.cellImageTop} />
            <div className={styles.cellImageBottom} />

            <div className={styles.cellTitle}>
                <h1>Energy saving light bulb</h1>
                <h3 className={styles.subHeader}>25W // Packet of 4</h3>
            </div>

            <div className={styles.gridQuantity}>
                <div className={styles.cellPrice}>
                    <span className={styles.price} aria-label="price british pounds">12<sup aria-label="price british pence">.99</sup></span>
                </div>
                <div className={styles.cellToggleQuantity}>
                    <h4 className={`${styles.centerText} ${styles.mb1}`}>QTY</h4>
                    <div className={styles.quantityContainer}>
                        <button className={styles.square} aria-label="Reduce quantity by one">-</button>
                        <span className={styles.quantityNumber}>1</span>
                        <button className={styles.square} aria-label="Increase quantity by one">+</button>
                    </div>
                </div>
                <button className={`standard ${styles.cellAddToCart}`}>Add to cart</button>
            </div>

            <div className={styles.cellDescription}>
                <h2>Description</h2>
                <span className={styles.textSpacing}>Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait around warm start and flicker free features make for a great all purpose bulb</span>
            </div>

            <div className={styles.cellSpecs}>
                <h2>Specifications</h2>
            </div>
        </div>
    )
}

export default Products
