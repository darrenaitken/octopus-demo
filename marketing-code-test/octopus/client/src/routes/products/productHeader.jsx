// Node modules
import React from 'react'
import PropTypes from "prop-types"

// Components and styles
import styles from "./product.module.scss"

function ProductHeader({title, subtitle}) {
    return (
        <div className={styles.cellTitle}>
            <h1>{title}</h1>
            <h3 className={styles.subHeader}>{subtitle}</h3>
        </div>
    )
}

ProductHeader.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
};

export default ProductHeader
