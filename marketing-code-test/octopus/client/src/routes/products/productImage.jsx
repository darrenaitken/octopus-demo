// Node modules
import React from 'react'
import PropTypes from "prop-types"

// Components and styles
import styles from "./product.module.scss"

function ProductImage({ image, imgAlt }) {
    return (
        <>
        <img className={styles.imgProduct} src={image} alt={imgAlt}/>
        <div className={styles.cellImageTop} />
        <div className={styles.cellImageBottom} />
        </>
    )
}

ProductImage.propTypes = {
    image: PropTypes.string.isRequired,
    imgAlt: PropTypes.string
}

ProductImage.defaultProps = {
    imgAlt: "Product Image"
}

export default ProductImage
