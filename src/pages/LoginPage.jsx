import React from 'react';
import styled from "styled-components";
import Header from "../components/header/Header"
import Login from "../components/login/Login"
const LoginPage = () => {
    return (
   
             <Background> 
       <Header/>
          <Div>
          <Login/>   
          </Div>
          </Background> 
      
     
    );
};

const Background = styled.div`
overflow: auto;
height: 100vh;
background-size: cover;
  background-image:url(https://velog.velcdn.com/images/soonger3306/post/41dbb138-607a-4793-8a17-f064330754c6/image.gif) ;;

`;


const Div = styled.div`
overflow: auto;
height: 82vh;
margin: 20px 100px ;

background-color: #ffffffd0;
border-radius: 10px 

`


export default LoginPage;