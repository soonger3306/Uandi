import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getComment } from "../../redux/module/TravelCommentSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

const CommentList = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { comment } = useSelector((state) => state.comment);
    // console.log("하이", comment);

    const [comments, setComments] = useState(null);

    const [updatedTitle, setUpdatedTitle] = useState({
        content: "",
        input: 0,
        cardId: 0,
    });

    //삭제
    const onClickDelete = async (id) => {
        await axios
            .delete(`http://localhost:3001/comment/${id}`)
            .then(dispatch(getComment())) //추가시 반응이 느리고 가끔 안먹힐때 있음
            .catch((error) => console.log(error));
    };

    //  수정
    const makeInput = async (comment, id) => {
        await axios
            .put(`http://localhost:3001/comment/${id}`, {
                ...comment,
                input: 1,
            })
            .then(dispatch(getComment())); //이건 없으면 구현이 안됨
    };

    const onClickUpdate = async (id, updated) => {
        await axios
            .put(`http://localhost:3001/comment/${id}`, updated)
            .then(dispatch(getComment())) //추가시 반응이 느리고 가끔 안먹힐때 있음
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        dispatch(getComment());
    }, []);

    // useEffect(() => {
    //     dispatch(getComment());
    // }, [makeInput]);

    // useEffect(() => {
    //     dispatch(getComment());
    // }, [onClickUpdate]);

    // useEffect(() => {
    //     dispatch(getComment());
    // }, [onClickDelete]);

    return (
        <div>
            {comment &&
                comment.map((comment) => {
                    if (id === comment.postId) {
                        //글의 id와 comment의 postId가 같은 것만 댓글을 보여준다.
                        return (
                            <CommentListContainer
                                className="media"
                                key={comment.id}
                                comment={comment}
                            >
                                <CommentListBox className="media-content">
                                    <div className="content">
                                        <p>
                                            <strong>김정원</strong>{" "}
                                            <small>@gardenk</small>{" "}
                                            <small>31m</small>
                                            <button
                                                onClick={(e) => {
                                                    // e.preventDefault();
                                                    onClickDelete(comment.id);
                                                }}
                                                className="button is-ghost"
                                            >
                                                삭제
                                            </button>
                                            <button
                                                onClick={(e) => {
                                                    // e.preventDefault();
                                                    makeInput(
                                                        comment,
                                                        comment.id
                                                    );
                                                }}
                                                className="button is-ghost"
                                            >
                                                수정
                                            </button>
                                            {comment.input === 1 ? (
                                                <div key={comment.id}>
                                                    <input
                                                        onChange={(e) => {
                                                            // e.preventDefault();
                                                            setUpdatedTitle({
                                                                ...comment,
                                                                content:
                                                                    e.target
                                                                        .value,
                                                                input: 0,
                                                            });
                                                        }}
                                                    ></input>

                                                    <button
                                                        onClick={(e) => {
                                                            // e.preventDefault();
                                                            onClickUpdate(
                                                                comment.id,
                                                                updatedTitle
                                                            );
                                                        }}
                                                    >
                                                        수정완료
                                                    </button>
                                                </div>
                                            ) : null}
                                            <br />
                                            {comment.content}
                                        </p>
                                    </div>
                                </CommentListBox>
                            </CommentListContainer>
                        );
                    } else {
                        return null;
                    }
                })}
        </div>
    );
};

export default CommentList;

const CommentListContainer = styled.article`
    display: flex;
    margin: 5px;
    padding: 0.5rem;
`;

const CommentListBox = styled.div`
    margin: 20px;
    text-align: left;
`;