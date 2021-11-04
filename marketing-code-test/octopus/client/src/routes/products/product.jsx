// Node modules
import React from 'react'

// Components and styles
import imgLightbulb from "../../assets/lightbulb.jpg"
import ProductImage from './productImage'
import ProductHeader from './productHeader'
import ProductQuantity from './productQuantity'
import ProductDescription from './productDescription'
import ProductSpecs from "./productSpecs"

import styles from "./product.module.scss"


function Product() {

    return (
        <div className={styles.gridContainer}>
            <ProductImage image={imgLightbulb}/>
            <ProductHeader title="Energy saving light bulb" subtitle="25W // Packet of 4" />
            <ProductQuantity unitPounds={12} unitPence={99}/>
            <ProductDescription description="Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait around warm start and flicker free features make for a great all purpose bulb" />
            <ProductSpecs />
        </div>
    )
}

export default Product
