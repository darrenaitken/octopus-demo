// Node modules
import React, { useState } from 'react'
import PropTypes from "prop-types"

// Components and styles
import styles from "./product.module.scss"

function ProductDescription({ description }) {
    return (
        <div className={styles.cellDescription}>
            <h2>Description</h2>
            <span className={styles.textSpacing}>{description}</span>
        </div>
    )
}

ProductDescription.propTypes = {
    description: PropTypes.string.isRequired,
};

export default ProductDescription
