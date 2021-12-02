import styled from 'styled-components'
import React from 'react'
import {Link} from 'react-router-dom'

const Image = styled.img`
    width: 100%;
    opacity: 70%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
`
const Info = styled.div`
    position: absolute;
    width:100%;
    height:100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column; //vertical
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: #ffffff;
    font-weight: 600;
    font-size: 50px;
    margin-bottom: 20px;
   
`

const Button = styled.button`
    border:none ;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
      
`
const Container = styled.div`
    flex: 1;
    margin:3px;
    height: 70vh;
    position: relative;
    &:hover ${Image}{
        opacity: 1;
    }
`


const CategoryItem = ({item}) => {
    return (
        <Container>
        <Link to={`/products/${item.cat}`}>
            <Image src={item.img}/>
            <Info>
                <Title>
                    {item.title}
                </Title>
                <Button>BUY NOW</Button>
            </Info>
        </Link>
        </Container>
    )
}

export default CategoryItem
