// Node modules
import React, { memo } from 'react'
import PropTypes from "prop-types"

// Components and styles
import styles from "./product.module.scss"

function ProductImage({ imageURL, imgAlt }) {
    return (
        <>
        <img data-testid="idProductImage" className={styles.imgProduct} src={imageURL} alt={imgAlt}/>
        <div className={styles.cellImageBottom} />
        </>
    )
}

ProductImage.propTypes = {
    imageURL: PropTypes.string.isRequired,
    imgAlt: PropTypes.string
}

ProductImage.defaultProps = {
    imgAlt: "Product Image"
}

export default memo(ProductImage)
