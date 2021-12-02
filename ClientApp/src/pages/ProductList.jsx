import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const Container = styled.div`

`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 500;
    margin-right: 20px;

`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`
const Option = styled.option`

`

const ProductList = () => {
    const location = useLocation();
    const category = location.pathname.split("/")[2];

    const [filter, setFilter] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilter = (e) => {
        const value = e.target.value;
        setFilter({
            ...filter,
            [e.target.name]: value
        })
        console.log(filter);
        console.log(sort);
    }

    return (
        <Container>
            <NavBar />
            <Announcement />
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="size" onChange={handleFilter}>
                        <Option disabled>Size</Option>
                        <Option value="Small">Small(under 40cm)</Option>
                        <Option value="Medium">Medium(40-100cm)</Option>
                        <Option value="Large">Large(over 100cm)</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products category ={category} filters={filter} sort ={sort} />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
