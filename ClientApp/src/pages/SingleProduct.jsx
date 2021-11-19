import React from 'react'
import Announcement from '../components/Announcement'
import NavBar from '../components/NavBar'
import styled from 'styled-components'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Filter, Remove } from '@material-ui/icons'


const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImageContainer = styled.div`
    flex: 1;   
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const DescriptionContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`
const Title = styled.h1`
    font-weight: 200;
`
const Description = styled.p`
    margin: 20px 0px;
`
const Price = styled.p`
    font-weight: 100;
    font-size: 40px;
`
const AddContainer = styled.div`
    width:50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const AmmountContainer = styled.div`
    display: flex;
    font-weight: 700;
    align-items: center;
`
const Amount = styled.p`
    width: 30px;
    height:30px;
    border-radius: 10px;
    border : 1px solid #fdda5e;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid #fdda5e;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        background-color: #fdda5e;
        color: white;
    }
`

const SingleProduct = () => {
    return (
        <Container>
            <NavBar/>
            <Announcement/>
            <Wrapper>
                <ImageContainer>
                    <Image src="https://images-na.ssl-images-amazon.com/images/I/81SIYgZhwFL.jpg"/>
                </ImageContainer>
                <DescriptionContainer>
                    <Title>hgcdzHGddgZJHKd</Title>
                    <Description>
                        blabalblablablalbalbablalbalbalbalbalbalbal
                    </Description>
                    <Price>100 $</Price>
                    <AddContainer>
                        <AmmountContainer>
                            <Remove/>
                            <Amount>2</Amount>
                            <Add/>
                        </AmmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>  
                </DescriptionContainer>

            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default SingleProduct
