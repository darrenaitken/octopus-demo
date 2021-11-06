// Node modules
import React, { useEffect, useState } from 'react'

// Custom functions
import fetchData from "../../js/fetch"
import { enumRenderStatus } from "../../js/enums"

// Components and styles
// import imgLightbulb from "../../assets/lightbulb.jpg"
import ProductImage from './productImage'
import ProductHeader from './productHeader'
import ProductQuantity from './productQuantity'
import ProductDescription from './productDescription'
import ProductSpecs from "./productSpecs"

import styles from "./product.module.scss"


const ENDPOINT = 'http://127.0.0.1:8000/graphql#operationName=getProductById&query=query%20getProductById%20%7B%0A%20%20product(productId%3A%201)%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20power%0A%20%20%20%20description%0A%20%20%20%20price%0A%20%20%20%20quantity%0A%20%20%20%20brand%0A%20%20%20%20weight%0A%20%20%20%20height%0A%20%20%20%20width%0A%20%20%20%20length%0A%20%20%20%20modelCode%0A%20%20%20%20colour%0A%20%20%20%20imgUrl%0A%20%20%7D%0A%7D%0A'

const PRODUCT_QUERY = `
query getProductById {
    product(productId: 1) {
        id
        name
        power
        description
        price
        quantity
        brand
        weight
        height
        width
        length
        modelCode
        colour
        imgUrl
    }
    }
`

function Product() {

    const initialState = {
        renderStatus: enumRenderStatus.LOADING,
        result: null,
        arrDetails: [],
        error: null
    }

    const [state, setState] = useState(initialState)

    // Fetch data from the endpoint
    useEffect(() => {
        const getData = async () => {
            try {
              const result =  await fetchData(ENDPOINT,PRODUCT_QUERY);

              const { product:p } = result

                // our ProductSpecs component needs an array of key value pairs to display as a table
                const arrDetails = [
                    {key: "Brand", value: p.brand || ''},
                    {key: "Item weight", value: p.weight || ''},
                    {key: "Dimensions", value: `${p.height}x${p.width}x${p.length}`},
                    {key: "Item model number", value: p.modelCode || ''},
                    {key: "Colour", value: p.colour || ''}
                ]

                setState({
                    ...initialState,
                    renderStatus: enumRenderStatus.OKAY,
                    result,
                    arrDetails,
                    error: null
                })

            } catch(err) {
                setState({
                    ...initialState,
                    renderStatus: enumRenderStatus.ERROR,
                    error: err
                })
            }
          }
      
          getData()
    },[])

    switch (state.renderStatus) {
        case enumRenderStatus.LOADING:
          return (
            <div className={styles.gridContainer}>
                <span>Please Wait. Loading...</span>
            </div>
          )
        case enumRenderStatus.ERROR:
          return (
            <div className={styles.gridContainer}>
                <p>Oh dear! The following error occurred:</p>
                <span>{state.error.message}</span>
            </div>
          )

        default:
          const { product: p } = state.result
          const pounds = Math.floor(p.price / 100)
          const pence = Math.floor(((p.price / 100) % 1) * 100)

          return (
            <div className={styles.gridContainer}>
                <ProductImage imageURL={p.imgUrl}/>
                <ProductHeader title={p.name} subtitle={`${p.power} // Packet of ${p.quantity}`} />
                <ProductQuantity productId={p.id} productName={p.name} unitPounds={pounds} unitPence={pence}/>
                <ProductDescription description={p.description} />
                <ProductSpecs arrDetails={state.arrDetails}/> 
            </div>
          )
      }
}

export default Product
