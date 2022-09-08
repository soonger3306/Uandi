import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getComment } from "../../redux/module/TravelCommentSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

function CommentForm() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [comment, setComment] = useState({
        content: "",
        postId: "",
    });
    const [comments, setComments] = useState(null);
    const fetchComments = async () => {
        const { data } = await axios.get("http://localhost:3001/comment");
        setComments(data);
        
    };

    //POST

    const onSubmitHandler = (comment) => {
        axios.post("http://localhost:3001/comment", comment);
    };

    useEffect(() => {
        fetchComments();
    }, []);

    return (
        <form
            onSubmit={(e) => {
                onSubmitHandler(comment);
            }}
        >
            <div>
                <CommentL className="media">
                    <div className="media-content">
                        <div className="field">
                            <p className="control">
                                <textarea
                                    type="text"
                                    onChange={(ev) => {
                                        const { value } = ev.target;
                                        setComment({
                                            ...comment,
                                            content: value,
                                            postId: id,
                                            id: nanoid(),
                                        });
                                    }}
                                    className="textarea"
                                    placeholder="Add a comment..."
                                ></textarea>
                            </p>
                        </div>
                        <nav className="level">
                            <div className="level-left">
                                <div className="level-item">
                                    <br />
                                    <br />
                                    <DetailPageBtn className="button is-info">
                                        Submit
                                    </DetailPageBtn>
                                </div>
                            </div>
                        </nav>
                    </div>
                </CommentL>
            </div>
        </form>
    );
}

export default CommentForm;

const DetailPageBtn = styled.button`
    border: 1px solid #f9f5f4fb;
    color: #f7f6f2dc;
    font-weight: bolder;
    background-color: #3675ea8f;
    padding: 5px 7px;
    border-radius: 15px;
    height: 80%;
    /* width: 6rem; */
    white-space: nowrap;
    overflow: inherit;
    font-size: 1rem;
    &:hover {
        color: #3675ea8f;
        background-color: #f7f6f2dc;
        border: 1px solid #3675ea8f;
    }
`;

const CommentL = styled.article`
    display: flex;
    margin: 400px, 50px;
    padding: 0.5rem;
`;