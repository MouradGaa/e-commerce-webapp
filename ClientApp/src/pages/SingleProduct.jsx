import React, { useEffect } from 'react'
import Announcement from '../components/Announcement'
import NavBar from '../components/NavBar'
import styled from 'styled-components'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
import { AxiospublicRequest } from '../requestMethods'
import { useLocation } from 'react-router-dom';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartRedux'

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
const Hover = styled.div`
    cursor: pointer;
 `

const SingleProduct = () => {
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const [product, setProduct] = useState({});

    const [amount, setAmount] = useState(1);

    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await AxiospublicRequest.get('/products/' + id);
                setProduct(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        getProduct();
        console.log(product);
    }, [id]);

    // handle add and remove amount
    const handleAmount = (action) => {
        if (action === "minus") {
            if (amount > 1) {
                setAmount(amount - 1);
            }
        } else {
            setAmount(amount + 1);
        }
    }

    //handle add to cart
    const handleAddToCart = async () => {
        dispatch(addProduct({...product, amount}));
    }


    return (
        <Container>
            <NavBar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                    <Image src={product.image} />
                </ImageContainer>
                <DescriptionContainer>
                    <Title>{product.title}</Title>
                    <Description>
                        {product.description}
                    </Description>
                    <Price>{product.price} $</Price>
                    <AddContainer>
                        <AmmountContainer>
                            <Hover>
                                <Remove onClick={() => handleAmount("minus")} />
                            </Hover>
                            <Amount>{amount}</Amount>
                            <Hover>
                                <Add onClick={() => handleAmount("add")} />
                            </Hover>
                        </AmmountContainer>
                        <Button onClick ={handleAddToCart}>ADD TO CART</Button>
                    </AddContainer>
                </DescriptionContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default SingleProduct
