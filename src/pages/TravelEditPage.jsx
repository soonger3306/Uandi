import React from 'react';

import styled from "styled-components";
import Header from "../components/header/Header"
import { motion } from "framer-motion";
import TravelEditor from '../components/travelform/TravelEditor';
import { Link } from "react-router-dom";
const TravelEditPage = () => {

    return (
      <motion.div
      initial={{opacity: 0.2}}
      animate={{opacity: 1}}
      exit={{opacity:30}}
      >
        <div>
    
        
          <TravelEditor/>
       
     
        </div>
        </motion.div>  
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
height: 87vh;
margin: 10px 100px;

background-color: #ffffffd0;
border-radius: 10px 

`

export default TravelEditPage;