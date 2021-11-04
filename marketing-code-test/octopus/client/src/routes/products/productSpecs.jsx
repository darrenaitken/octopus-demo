// Node modules
import React, { useState } from 'react'
import PropTypes from "prop-types"

// Components and styles
import styles from "./product.module.scss"

function ProductSpecs({ arrDetails }) {
    return (
        <div className={styles.cellSpecs}>
            <h2>Specifications</h2>
        </div>
    )
}

ProductSpecs.propTypes = {
    ProductSpecs: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        value: PropTypes.string
    })),
};

export default ProductSpecs