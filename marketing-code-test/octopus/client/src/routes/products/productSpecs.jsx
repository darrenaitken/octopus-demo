// Node modules
import React, { memo } from 'react'
import PropTypes from "prop-types"

// Components and styles
import styles from "./product.module.scss"

function ProductSpecs({ arrDetails }) {

    return (
        <div className={styles.cellSpecs}>
            <h2>Specifications</h2>
            <div style={{height: "200px"}}>
                <table className={styles.tableSpecifications}>
                    <tbody>
                        {arrDetails.map(item => (
                            <tr key={item.key}>
                                <td>{item.key}</td>
                                <td>{item.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

ProductSpecs.propTypes = {
    ProductSpecs: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        value: PropTypes.any
    })),
};

export default memo(ProductSpecs)