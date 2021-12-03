import styled from "styled-components";
import React, { useRef } from "react";
import { useHistory } from "react-router";
import { AxiospublicRequest } from "../requestMethods";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  display: flex;
  justify-content: center; 
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  border: none;
  padding: 15px 20px;
  color: white;
  margin-bottom: 10px;
  background-color: #fdda5e;
  cursor: pointer;
  font-weight: 500;
  flex: 1;
  justify-content: center;
`;

const Register = () => {
  const firstName = useRef();
  const lastName = useRef();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const history = useHistory();

  console.log(firstName)

  const handleClick = async (e) => {
    e.preventDefault();

    if(confirmPassword.current.value !== password.current.value) {
      alert('Passwords do not match')
      return;
    }else{
      const user = {
        username : username.current.value,
        email : email.current.value,
        password : password.current.value,
        isAdmin : false,
      };
    try {
      await AxiospublicRequest.post("/auth/register", user);
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  
  };
  
  

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            placeholder="name"
            required
            ref={firstName}
          />
          <Input
            placeholder="last name"
            required
            ref={lastName}
          />
          <Input
            placeholder="username"
            required
            ref={username}
          />
          <Input
            placeholder="email"
            required
            ref={email}
            type="email"
          />
          <Input
            placeholder="password"
            required
            ref={password}
            type="password"
            minLength="6"
          />
          <Input
            placeholder="confirm password" 
            required
            ref={confirmPassword}
            type="password"
            />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Register;