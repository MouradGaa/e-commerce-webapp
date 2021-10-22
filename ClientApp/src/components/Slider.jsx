import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { sliderItems } from '../data';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 60px;
    height: 60px;
    background-color: #f7abcb;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left:  ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 50%;
    transition-duration: 0.5s;
    &:hover{
        opacity: 100%; 
    }
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1s ease-in-out;
    transform: translate(${(props) => props.slideIndex * -100}vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props) => props.bg};
    
`
const Image = styled.img`
    height: 80%;
    margin-top: 80px;
    margin-left: 20px;
`

const ImgContainer = styled.div`
    height:100%;
    flex: 1;
` 
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 80px;
`
const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`



const Slider = () => {

    const [slideIndex,setSlideIndex] = useState(null)

    const handleClick = (direction) => {
        if(direction==="left")
        {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2) // decrease the slide index, if we are in the first slide go to the last one
        }
        else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }

    }


    return (
        <Container>
            <Arrow direction="left" onClick={()=> handleClick("left")}>
                <ArrowBackIosNewRoundedIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item)=>(
                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src= {item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>
                            {item.title} 
                        </Title>
                        <Description>
                            {item.desc}
                        </Description>
                        <Button>
                            BUY NOW
                        </Button>
                    </InfoContainer>
                </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={()=> handleClick("right")}>
                <ArrowForwardIosRoundedIcon />
            </Arrow>
        </Container>
    )
}

export default Slider
