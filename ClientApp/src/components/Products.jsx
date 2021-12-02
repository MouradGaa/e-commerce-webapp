import React, { useEffect } from 'react'
import styled from 'styled-components'
import ProductItem from './ProductItem'
import { useState } from 'react'
import axios from 'axios'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({ category, filters, sort }) => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                axios.get(category ? `http://localhost:5000/api/products?category=${category}` : "http://localhost:5000/api/products")
                    .then(res => {
                        setProducts(res.data);
                    });
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    }, [category]);

    useEffect(() => {
        category &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key] === value)
                )
            );

        console.log(filteredProducts);
    }, [products, category, filters,filteredProducts]);


    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts(filteredProducts.sort((a, b) => b.createdAt - a.createdAt));
        } else if (sort === "asc") {
            setFilteredProducts(filteredProducts.sort((a, b) => a.price - b.price));
        } else if (sort === "desc") {
            setFilteredProducts(filteredProducts.sort((a, b) => b.price - a.price));
        }
        console.log(filteredProducts);
        console.log(sort);
    }, [sort, filteredProducts]);

    return (
        <Container>
            {category ? filteredProducts.map((product) => (
                <ProductItem product={product} key={product.id} />
            )): products.slice(0,9).map((product) => (
                <ProductItem product={product} key={product.id}/>
            ))}
        </Container>
    )
}

export default Products
