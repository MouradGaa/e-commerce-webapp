import React from 'react'
import styled from 'styled-components'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Container = styled.div`
    height: 50vh ;
    background-color: #e0e4d39d;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`
const Title = styled.h1`
    font-size: 60px;
    margin-bottom: 20px;
`
const Description = styled.div`
    font-size: 26px;
    margin-bottom: 20px;
    font-weight: 300;   
`

const InputContainer = styled.div`
    width: 50%;
    height: 50px;
    display: flex;
    justify-content: space-between;
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;   
    border-radius: 2px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #fdda5e;
    color: white;
    border-radius: 2px;
`

const Newsletter = () => {
    return (
        <Container>
            <Title>SUBSCRIBE TO NEWSLETTER</Title>
            <Description>Get updates from the best art pieces</Description>
            <InputContainer>
                <Input placeholder='Email'/>
                <Button>
                    <SendOutlinedIcon/>
                </Button>
            </InputContainer>
        </Container>    
    )
}

export default Newsletter
