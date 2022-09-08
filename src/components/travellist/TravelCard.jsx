import React, { useEffect } from "react";
import styled from "styled-components";
import "bulma/css/bulma.min.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTravelList } from "../../redux/module/TravelFormSlice";
import axios from "axios";
const TravelCard = ({ posts }) => {
    const { title, departureDate, arrivalDate, city, id, content, personnel } =
        posts;
    console.log(title, departureDate, arrivalDate, city, id);
 
    const data = {
        id: id,
        title: title,
        content: content,
        departureDate: departureDate,
        arrivalDate: arrivalDate,
        personnel: personnel,
        city: city,
    };

    // const dispatch = useDispatch();
    // const {posts} = useSelector ((state) =>state.posts)
    // console.log('하이',posts)

    // useEffect(() => {
    //     dispatch(getTravelList());
    //   }, []);

    return (
        <div>
            <Link to={`/detail/${id}`}>
                <Cardcontainer class="media">
                    <CardFigure class="media-center">
                        <ImgContainer class="image is-64x64">
                            <CardImg
                                hover
                                src="https://i.pinimg.com/564x/ae/b5/49/aeb549a5892e4d62e343380285c18619.jpg"
                            />
                        </ImgContainer>
                    </CardFigure>
                    <div class="media-content">
                        <div class="content">
                            <div>
                                <strong>John Smith</strong>
                                <small>@johnsmith</small> <small>31m</small>
                                <div>
                                    <div key={posts.id}>
                                        <CardTiltle>{title}</CardTiltle>
                                  
                                        <CardContent>MBTI : ISFP</CardContent>

                                        <CardContent>
                                            {city},{personnel}명
                                        </CardContent>
                                        <CardContent>
                                            {departureDate}~{arrivalDate}
                                        </CardContent>
                                    </div>
                                </div>
                                <br />
                                {content}
                            </div>
                        </div>
                        <nav class="level is-mobile">
                            <div class="level-left">
                                <a class="level-item">
                                    <span class="icon is-small">
                                        ❤<i class="fas fa-retweet"></i>
                                    </span>
                                </a>
                            </div>
                        </nav>
                    </div>
                    <div class="media-right">
                        {/* <button class="delete"></button> */}
                    </div>
                </Cardcontainer>
            </Link>
        </div>
    );
};

export default TravelCard;

const Cardcontainer = styled.div`
    & {
        /* border: 1px solid black; */
        /* display: flex; */
        justify-content: center;
      
        min-width: 270px;
        max-width: 400px;
        height: 100%;
        min-height: 400px;
        background-color: white;
        position: relative;
        border-radius: 20px;
        box-shadow: 5px 5px 7px 3px gray; //box-shadow: offset-x | offset-y | blur-radius | spread-radius | color
        padding: 10px;
        overflow: hidden;
    }
    &:hover {
        transform: scale (1.5);
    }
`;

const CardFigure = styled.div``;

const ImgContainer = styled.div`
    position: relative;
   
    height: 15vw;
    object-fit: scale-down;
    margin:15px;
    object-position: center;
    text-align: center;

`;

const CardImg = styled.img`
    position: absoute;
    width: 100%;
    height: 15vw;
 
    
    object-fit: cover;
    border-radius: 5px;
    /* overflow: hidden; */
`;

const CardTiltle = styled.h2`
    margin: 5px;
    font-size: 1rem;
`;

const CardContent = styled.p``;
