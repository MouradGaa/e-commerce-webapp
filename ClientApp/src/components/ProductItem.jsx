import React from 'react'
import styled from 'styled-components'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

const Circle = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-color: white;
    position: absolute;

`
const Image = styled.img`
    height: 70%;
    z-index: 2;
`
const Info = styled.div`
    opacity: 20%;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    background-color: rgba(0, 0, 0, 0.2);
`
const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fddb5e40;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in;
    cursor: pointer;
    &:hover{
        background-color: #fff2c2;
        transform: scale(1.1);
    }
`

const ProductItem = ({product}) => {
    return (
       <Container>
           <Circle/>
           <Image src={product.img}/>
           <Info>
               <Icon>
                   <ShoppingCartTwoToneIcon/>
               </Icon>
           </Info>
       </Container>
    )
}

export default ProductItem
