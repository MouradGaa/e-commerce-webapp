import React from 'react'
import styled from 'styled-components'
import { Search } from "@material-ui/icons"
import { Badge } from '@material-ui/core'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Container = styled.div`
    height : 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px ;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none ;
`
const Logo = styled.h1`
    font-weight: bold;
    cursor: pointer;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`


const NavBar = ({ user }) => {
    const quantity = useSelector(state => state.cart.quantity);

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Search />
                        <Input />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            .Bloom
                        </Link>
                    </Logo>
                </Center>
                <Right>
                    <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <MenuItem>REGISTER</MenuItem>
                    </Link>
                    <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <MenuItem>LOGIN</MenuItem>
                    </Link>
                    <Link to="/newproduct" style={{ textDecoration: 'none', color: 'inherit' }}>
                        {user && user.isAdmin && <MenuItem>ADD PRODUCTS</MenuItem>}
                    </Link>
                    <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartTwoToneIcon />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default NavBar
