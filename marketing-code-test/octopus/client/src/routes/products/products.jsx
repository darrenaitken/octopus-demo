// Node modules
import React from 'react'

// Components and styles
import styles from "./products.module.scss"

function Products() {

    // const handleBtnAdd_onClick = (e) => {
    //     // Do not allow form button to reload the browser
    //     e.preventDefault();

    //     console.log('Button clicked...')
    // }

    return (
        <div className={styles.gridContainer}>
            <div className={styles.gridImage}>Image</div>
            <div className={styles.gridTitle}>Title</div>
            <div className={styles.gridQuantity}>Quantity</div>
            <div className={styles.gridDescription}>Description</div>
            <div className={styles.gridSpecs}>Specs</div>
        </div>
    )
}

export default Products
