import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __deleteTravelCard } from "../../redux/module/TravelFormSlice";
import axios from "axios";
function Info({
    id,
    title,
    personnel,
    departureDate,
    arrivalDate,
    content,
    city,
}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [imgUrl, setImgUrl] = useState("");
    const [joinCount, setJoinCount] = useState("0");
    const [toggle, setToggle] = useState(true);

    const cardDeleteHandler = (e) => {
        e.preventDefault();
        dispatch(__deleteTravelCard(id));
        navigate(-1);
    };

    const joinHandler = (e) => {
        e.preventDefault();
        // let IntjoinCount=parseInt(joinCount)
        if (joinCount < personnel) {
            setJoinCount(parseInt(joinCount) + 1);
        } else {
            alert("참여인원이 마감되었습니다.");
        }
        setToggle(!toggle);
        // axios.post("http://localhost:3001/posts", { postId: id });
    };

    const cencelHandler = (e) => {
        e.preventDefault();
        if (joinCount > 0) {
            setJoinCount(parseInt(joinCount) - 1);
        }
        setToggle(!toggle);
        // axios.post("http://localhost:3001/posts", { postId: id });
    };

    axios.get(`/api/auth/participation/${id}`);
    return (
        <div>
            <InfoBtnContainer>
                <Link to={`/review/${id}`}>
                    <DetailPageBtn>여행후기</DetailPageBtn>
                </Link>
                <Link to={`/edit/${id}`}>
                    <DetailPageBtn>수정</DetailPageBtn>
                </Link>
                <DetailPageBtn onClick={cardDeleteHandler}>삭제</DetailPageBtn>
            </InfoBtnContainer>
            <InfoBox>
                <DetailPageImg
                    src="https://youimg1.tripcdn.com/target/100a0e0000006zype378A_C_640_320_R5_Q70.jpg_.webp?proc=source%2Ftrip"
                    alt="이미지 없음."
                />
                <DetailPageContent>
                    <div>작성자 : 김정원</div>
                    <div>지역이름 : {city}</div>
                    <div>
                        여행날짜 : {departureDate} ~ {arrivalDate}
                    </div>
                    <div>MBTI : ISFP</div>
                    <div>내용 : {content}</div>
                    <div>
                        참여 모임 인원수: {joinCount}/{personnel}
                    </div>
                </DetailPageContent>
            </InfoBox>
            <br />
            <br />
            {toggle ? (
                <JoinBtn onClick={joinHandler}>참여하기</JoinBtn>
            ) : (
                <JoinBtn onClick={cencelHandler}>취소</JoinBtn>
            )}

            <br />
            <br />
        </div>
    );
}

export default Info;

const InfoBtnContainer = styled.div`
    /* border: 2px solid red; */
    display: flex;
    height: 5rem;
    /* margin: 1rem; */
    padding: 1rem;
    justify-content: flex-end;
    overflow: inherit;
    gap: 1rem;
`;

const DetailPageBtn = styled.button`
    border: 1px solid #f9f5f4fb;
    color: #69c3e7db;
    font-weight: bolder;
    background-color: white;
    padding: 5px 7px;
    border-radius: 15px;
    height: 80%;
    /* width: 6rem; */
    white-space: nowrap;
    overflow: inherit;
    font-size: 1rem;
    &:hover {
        color: #f7f6f2dc;
        background-color: #3675ea8f;
    }
`;
const InfoBox = styled.div`
    /* border: 2px solid black; */
    margin: 2rem;
    height: 20rem;
    display: flex;
    justify-content: space-around;
    align-items: center; //두개의 div를 적당한 간격으로 배치해줌.
`;

const DetailPageImg = styled.img`
    /* border: 2px solid blue; */
    width: 35%;
    /* margin: 2rem; */
    /* position: absoute; */
    height: 20vw;
    margin: auto;
    object-fit: cover;
    border-radius: 5px;
`;

const DetailPageContent = styled.div`
    /* border: 2px solid green; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: auto;
    text-align: left;
    font-size: 1rem;
    width: 35%;
    gap: 0.5rem;
    /* width: 500px; */
`;

const JoinBtn = styled.button`
    border: 1px solid #ea4b3650;
    color: #ea4b368f;
    font-weight: bolder;
    background-color: #eaac7142;
    padding: 5px 7px;
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
    white-space: nowrap;
    overflow: inherit;
    font-size: 1rem;
    &:hover {
        color: #f4f2ee;
        background-color: #ea4b368f;
        border: 1px solid #f4f2ee;
    }
`;