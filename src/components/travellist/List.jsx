import TravelCard from "./TravelCard";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getTravelList } from "../../redux/module/TravelFormSlice";
import React, { useEffect } from "react";

const List = () => {
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.posts);
    console.log("하이", posts);

    useEffect(() => {
        dispatch(getTravelList());
    }, []);

    return (
        <ListContainer>
            <GridContainer>
                {posts.map((posts) => (
                    <TravelCard posts={posts} key={posts.id} />
                ))}
            </GridContainer>
        </ListContainer>
    );
};

export default List;

const ListContainer = styled.div`
    /* top: -50px; */
`;
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 1200px;
    gap: 50px;
    height: 100%;
    margin: 60px 60px 60px 125px;
`;