import React, { useEffect } from "react";
import Info from "../components/detail/Info";
import CommentForm from "../components/comment/CommentForm";
import CommentList from "../components/comment/CommentList";
import styled from "styled-components";
import Header from "../components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTravelList } from "../redux/module/TravelFormSlice";
import { getComment } from "../redux/module/TravelCommentSlice";

const TravelDetailPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { isLoading, error, posts } = useSelector((state) => state.cardpost);
    const { commentIsLoading, commentError, comment } = useSelector(
        (state) => state.comment
    );
    const getTravelCard = posts.find((card) => card.id === id); //crud의 read 필요없음.
    // const getCardComment = comment.filter((comment) => comment.postId === id);
    // const state = useSelector((state) => state);
    // console.log(state.comment);
    // console.log(comment);

    useEffect(() => {
        dispatch(getTravelList());
    }, [dispatch]);

    // useEffect(() => {
    //     dispatch(getComment());
    // }, [dispatch]);

    if (isLoading || commentIsLoading) {
        return <div>Loading . . .</div>;
    }
    if (error || commentError) {
        return <div>{error.message}</div>;
    }

    return (
        <Background>
            <Header />
            <Div>
                <DetailContainer>
                    <Info {...getTravelCard} />
                    <CommentForm />
                    <CommentList />
                </DetailContainer>
            </Div>
        </Background>
    );
};

export default TravelDetailPage;

const DetailContainer = styled.div``;
const Background = styled.div`
    overflow: auto;
    height: 100vh;
    background-size: cover;
    background-image: url(https://velog.velcdn.com/images/soonger3306/post/41dbb138-607a-4793-8a17-f064330754c6/image.gif); ;
`;

const Div = styled.div`
    overflow: auto;
    height: 82vh;
    margin: 10px 100px;
    background-color: #ffffffd0;
    border-radius: 10px;
`;