import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'

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
    return (
        <Container>
            <NavBar />
            <Announcement />
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>Medium</Option>
                        <Option>Painting</Option>
                        <Option>Photography</Option>
                        <Option>Prints</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>Small(under 40cm)</Option>
                        <Option>Medium(40-100cm)</Option>
                        <Option>Large(over 100cm)</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
