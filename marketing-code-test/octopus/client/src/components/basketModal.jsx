// Node Modules
import React, { useEffect } from 'react'

// Redux
import { useSelector, useDispatch } from "react-redux";

// Shared Functions
import { validInteraction } from "../js/genericFunctions"
import { hideBasket } from "../store/reducers/basketModal"
import { basketRemove } from "../store/reducers/basket"

// Components and styles
import ButtonSmall from './buttonSmall';

import styles from "./basketModal.module.scss"


function BasketModal() {

    // Dispatch updates the redux counter store (updates showModal)
    const dispatch = useDispatch();

    // Get values from redux basket stores
    const showBasket = useSelector((state) => state.basketModal.show);
    const basket = useSelector((state) => state.basket);

    function handleClose(e) {
        if(validInteraction(e)) {
            e.preventDefault();
            dispatch(hideBasket())
        }
    }

    function handleRemoveItem(e) {
        if(validInteraction(e)) {
            e.preventDefault();
            dispatch(basketRemove({id: e.currentTarget.id}))
        }
    }

    function handleCheckout(e) {
        if(validInteraction(e)) {
            e.preventDefault();
            alert(`
            DEMO ONLY
            This would take the user to another page to review order`)
        }
    }

    return (
        <div id="PopUpDetailsForm" className={`${styles.modalBackground} ${showBasket ? `` : styles.hide}`}>
            <div className={styles.modalBox}>
                <div className={styles.modalTopBar}>
                    <div id="btnClose" className={styles.modalButtonClose} onClick={handleClose} aria-label="Close basket pop up window">
                        &times;
                    </div>
                </div>
                <div className={styles.modalBody}>
                    <div className={styles.modalHeader}>Shopping Basket</div>
                    {basket.arrItems.length === 0 ? 'Your shopping basket is empty' :
                        <>
                        <table className={styles.basketTable}>
                            <thead>
                                <th className={styles.alignLeft}>Item</th>
                                <th aria-label="Cost for each unit of this product">Price</th>
                                <th aria-label="Quantity">QTY</th>
                                <th aria-label="Total price for this particular item and quantity">Total</th>
                                <th className={styles.noColor}></th>
                            </thead>
                            <tbody>
                            {basket.arrItems.map(item => (
                                <tr>
                                    <td>{item.product}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price * item.quantity}</td>
                                    <td><ButtonSmall 
                                        id={item.id}
                                        name="btnRemove" 
                                        buttonText="Remove" 
                                        alt="Remove Item"
                                        handleInteraction={handleRemoveItem}
                                        /></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <div className={styles.modalFooter}>
                            <div className={styles.basketSummary}>Grand Total: £{basket.totalPrice} ({basket.totalQuantity} Items)</div>
                            <div><strong>
                            <ButtonSmall 
                                name="btnCheckout" 
                                buttonText="CHECKOUT" 
                                alt="Check out"
                                handleInteraction={handleCheckout}
                                />
                            </strong>
                                
                            </div>
                        </div>
                        </>
                    }

                </div>

            </div>
        </div>
    )
}

export default BasketModal
