// Node modules
import React, { useState, memo } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from "prop-types"

// Shared Functions
import { basketAdd } from "../../store/reducers/basket"
import { zeroPad, validInteraction } from '../../js/genericFunctions'
import BasketItem from "../../js/BasketItem"

// Components and styles
import styles from "./product.module.scss"

function ProductQuantity({ productId, productName, unitPounds, unitPence }) {

    const defaultQuantity = 1;
    const [quantity, setQuantity] = useState(defaultQuantity)

    // Dispatch updates the redux counter store (updates basket)
    const dispatch = useDispatch();

    // Only allow customers to order up to 99 items of each type
    // (note: this max setting would normally come from the inventory / stock limit - not hardcoded)
    const maxQuantity = 99

    function handleIncreaseQuantity (e) {
        if(validInteraction(e)) {
            e.preventDefault();
            setQuantity(quantity + 1) // update component state
        }
    }

    function handleDecreaseQuantity (e) {
        if(validInteraction(e)) {
            e.preventDefault();
            setQuantity(quantity - 1)
        }
    }

    function handleAddToBasket(e) {
        if(validInteraction(e)) {
            e.preventDefault();
            const basketItem = new BasketItem(productId, productName,`${unitPounds}.${unitPence}`,quantity)
            setQuantity(defaultQuantity )
            dispatch(basketAdd(basketItem))
        }
    }

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
                    <button 
                        className={styles.square} 
                        onClick={handleDecreaseQuantity} 
                        onKeyDown={handleDecreaseQuantity} 
                        aria-label="Reduce quantity by one" 
                        disabled={quantity === 1}>
                        -
                    </button>
                    <span className={styles.quantityNumber}>{quantity}</span>
                    <button 
                        className={styles.square} 
                        onClick={handleIncreaseQuantity} 
                        onKeyDown={handleIncreaseQuantity} 
                        aria-label="Increase quantity by one"
                        disabled={quantity === maxQuantity}>
                        +
                    </button>
                </div>
            </div>
            <button 
                className={`standard ${styles.cellAddToCart}`}
                onClick={handleAddToBasket}
                onKeyDown={handleAddToBasket}>
                Add to cart
            </button>
        </div>
    )
}

ProductQuantity.propTypes = {
    productId: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    unitPounds: PropTypes.number.isRequired,
    unitPence: PropTypes.number
};

ProductQuantity.defaultProps = {
    unitPence: 0
};

export default memo(ProductQuantity)
