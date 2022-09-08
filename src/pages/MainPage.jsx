import React from "react";

import List from "../components/travellist/List";

import styled from "styled-components";
import Header from "../components/header/Header"

import SignPage from "./SignPage";
import LoginPage from "./LoginPage";
import TravelDetailPage from "./TravelDetailPage";
import TravelEditPage from "./TravelEditPage";




const MainPage = () => {
    return (
      <Background>
        <Header/>
       <Div>
       <List/>
       
       </Div>
     </Background>
      );
    }
    
    const Background = styled.div`
    overflow: hidden;
    height: 100vh;
    background-size: cover;
      background-image:url(https://velog.velcdn.com/images/soonger3306/post/41dbb138-607a-4793-8a17-f064330754c6/image.gif) ;;
    
    `;
    
    
    const Div = styled.div`
    overflow: auto;
    height: 82vh;
    margin: 20px 100px 100px;
    
    background-color: #ffffffd0;
    border-radius: 10px 
    
    `
    
export default MainPage;