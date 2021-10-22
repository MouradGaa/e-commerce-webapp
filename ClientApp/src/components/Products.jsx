import React from 'react'
import styled from 'styled-components'
import { products } from '../data'
import ProductItem from './ProductItem'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = () => {
    return (
        <Container>
            {products.map((product) => (
                <ProductItem product={product} key={product.id} />
            ))}
        </Container>
    )
}

export default Products
