// Node modules
import React, { useState } from 'react'
import PropTypes from "prop-types"

// Shared Functions
import { zeroPad } from '../../js/genericFunctions'

// Components and styles
import styles from "./product.module.scss"

function ProductQuantity( { unitPounds, unitPence }) {

    const [quantity, setQuantity] = useState(1)

    // const handleBtnAdd_onClick = (e) => {
    //     // Do not allow form button to reload the browser
    //     e.preventDefault();

    //     console.log('Button clicked...')
    // }

    return (
        <div className={styles.gridQuantity}>
            <div className={styles.cellPrice}>
                <span className={styles.price} 
                    aria-label="price british pounds">
                    {unitPounds}
                    <sup aria-label="price british pence">.{zeroPad(unitPence,2)}</sup>
                </span>
            </div>
            <div className={styles.cellToggleQuantity}>
                <h4 className={`${styles.centerText} ${styles.mb1}`}>QTY</h4>
                <div className={styles.quantityContainer}>
                    <button className={styles.square} aria-label="Reduce quantity by one" disabled>-</button>
                    <span className={styles.quantityNumber}>{quantity}</span>
                    <button className={styles.square} aria-label="Increase quantity by one">+</button>
                </div>
            </div>
            <button className={`standard ${styles.cellAddToCart}`}>Add to cart</button>
        </div>
    )
}

ProductQuantity.propTypes = {
    unitPounds: PropTypes.number.isRequired,
    unitPence: PropTypes.number
};

ProductQuantity.defaultProps = {
    unitPence: 0
};

export default ProductQuantity
