import React, { useRef, useState } from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __addTravelCard } from "../../redux/module/TravelFormSlice";
import { nanoid } from "@reduxjs/toolkit";
import "./Button.css";
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import axios from "axios";
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css'; // css import


const Form = () => {
    const [title, onChangeTitleHandler] = useInput();
    const [personnel, onChangePersonnelHandler] = useInput();
    // const [city, onChangeCityHandler] = useInput("");
    const [departureDate, onChangeDepartureDateHandler] = useInput();
    const [arrivalDate, onChangeArrivalDateHandler] = useInput();
    const [content, onChangeContentHandler] = useInput();
    const [imgUrl, onChangeImgUrlHandler] = useInput();

    const [img, setImg] = useState("");
    const cityList = [
        "CITY",
        "서울",
        "부산",
        "강원",
        "경기",
        "인천",
        "경상",
        "전라",
        "충청",
        "제주",
    ];
    const [city, setCity] = useState("CITY");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cityChangeHandler = (e) => {
        e.preventDefault();
        setCity(e.target.value);
    };

    /** 이미지 파일 저장 **/
    const onChangeImg = async (e) => {
        e.preventDefault();
        // setImg(e.target.files);
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.readAsDataURL(file);
        reader.onloadend = () => {};
        if (e.target.files) {
            const uploadFile = e.target.files[0]; //여기에 fakepath있을것...
            const formData = new FormData(); //formData
            formData.append("files", uploadFile); //key, value
            // console.log(uploadFile);
            // for (let i of formData.entries()) {
            //     console.log(i[1]);
            // }
            await axios({
                method: "post",
                url: "http://localhost:3001/posts",
                data: formData,
                header: {
                    "content-Type": "multipart / form-data", //다수의 파일객체.
                },
            });
        }
        // console.log(e.target.files);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        // if (!title) {
        //     return setFormHelper("You Must Enter title to Proceed");
        // }

        // if (!personnel) {
        //     return setFormHelper("You Must Enter personnel to Proceed");
        // }
        // if (!CoverUrl) {
        //     return setFormHelper("You Must Enter Image File to Proceed");
        // }
        const addCard = {
            id: nanoid(),
            title,
            personnel,

            departureDate,
            arrivalDate,
            content,
            imgUrl,
            city,
            img,
        };
        dispatch(__addTravelCard(addCard));
        navigate(-1);
    };
    return (
        <>
            <form>
                <div>
                    <Card className="card">
                        <Card01 className="card-body">
                            <br />
                            <br />

                            <div className="file has-name is-fullwidth">
                                <label className="file-label">
                                    <input
                                        className="file-input"
                                        type="file"
                                        id="profile-upload"
                                        accept="image/*"
                                        name="img"
                                        onChange={onChangeImg}
                                    />
                                    <span className="file-cta">
                                        <span className="file-icon">
                                            <i className="fas fa-upload"></i>
                                        </span>
                                        <span className="file-label">
                                            Choose a file…
                                        </span>
                                    </span>
                                    <span className="file-name">
                                        Screen Shot 2017-07-29 at 15.54.25.png
                                    </span>
                                </label>
                            </div>
                            <br />

                            <Card02 className="field">
                                <label className="label">글제목</label>
                                <div className="control">
                                    <Input
                                        className="input"
                                        type="text"
                                        name="title"
                                        placeholder="✎"
                                        onChange={onChangeTitleHandler}
                                    />
                                </div>
                            </Card02>

                            <Card02 className="field">
                                <div className="control">
                                    <div class="field is-horizontal">
                                        <div class="field-body">
                                            <div class="field">
                                                <label className="label">
                                                    모집인원수
                                                </label>
                                                <Input
                                                    className="input"
                                               
                                                    name="personnel"
                                                    type="number"
                                                    step='3'
                                                    min='1'
                                                    max='100'
                                                    placeholder="✎"
                                                    onChange={
                                                        onChangePersonnelHandler
                                                    }
                                                />
                                                <span class="icon is-small is-left">
                                                    <i class="fas fa-user"></i>
                                                </span>
                                            </div>
                                            <div class="field">
                                                <p class="control is-expanded has-icons-left has-icons-right">
                                                    <label className="label">
                                                        도시
                                                    </label>
                                                    <Select
                                                        name="city"
                                                        class="select"
                                                        onChange={
                                                            cityChangeHandler
                                                        }
                                                        value={city}
                                                    >
                                                        {cityList.map(
                                                            (city) => (
                                                                <Option
                                                                    value={city}
                                                                    key={city}
                                                                >
                                                                    {city}
                                                                </Option>
                                                            )
                                                        )}
                                                    </Select>
                                                    <span class="icon is-small is-left">
                                                        <i class="fas fa-envelope"></i>
                                                    </span>
                                                    <span class="icon is-small is-right">
                                                        <i class="fas fa-check"></i>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card02>
                        


                         <div>
                
                         </div>

                            <Card02 className="field">
                                <div className="control">
                                    <div class="field is-horizontal">
                                        <div class="field-body">
                                            <div class="field">
                                                <label className="label">
                                                    여행 시작 날짜
                                                </label>
                                                <Input
                                                    className="input"
                                                    type="date"
                                                    name="departureDate"
                                                    placeholder="✎"
                                                    onChange={
                                                        onChangeDepartureDateHandler
                                                    }
                                                />
                                                <span class="icon is-small is-left">
                                                    <i class="fas fa-user"></i>
                                                </span>
                                            </div>

                                            <div class="field">
                                                <label className="label">
                                                    여행 종료 날짜
                                                </label>
                                                <Input
                                                    className="input"
                                                    type="date"
                                                    name="arrivalDate"
                                                    placeholder="✎"
                                                    onChange={
                                                        onChangeArrivalDateHandler
                                                    }
                                                />
                                                <span class="icon is-small is-left">
                                                    <i class="fas fa-envelope"></i>
                                                </span>
                                                <span class="icon is-small is-right">
                                                    <i class="fas fa-check"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card02>

                            <Card02 className="field">
                                <label className="label">내용</label>
                                <Textarea
                                    className="textarea"
                                    name="content"
                                    placeholder="✎"
                                    onChange={onChangeContentHandler}
                                ></Textarea>
                            </Card02>

                            <Buttonu className="field">
                                <br />
                                <br />
                                <br />

                                <Link to={`/`}>
                                    <Button
                                        className="button"
                                        onClick={submitHandler}
                                        type='submit' 
                                    >
                                        <h>작성완료</h>&nbsp;&nbsp;&nbsp;
                                        <h1>
                                            <span>.</span>&nbsp; <span>.</span>
                                            &nbsp;<span>.</span>
                                            <span>🚅</span>
                                        </h1>
                                    </Button>
                                </Link>
                            </Buttonu>
                        </Card01>
                    </Card>
                </div>
            </form>
        </>
    );
};

const Input = styled.input`
    background-color: #e8feff96;
`;
const Textarea = styled.textarea`
    background-color: #e8feff96;
`;

const Button = styled.button`
    background-color: #0165fc68;
`;
const Card = styled.div`
    background-size: cover;
    position: absolute;
    background-image: url(https://velog.velcdn.com/images/soonger3306/post/41dbb138-607a-4793-8a17-f064330754c6/image.gif);
    overflow: hidden;

    margin: 28px 150px;

    position: relative;

    content: center;
`;

const Card01 = styled.div`
    margin: 20px;
`;
const Card02 = styled.div`
    height: 95px;
    margin: 20px;
`;
const Buttonu = styled.div`
    height: 100px;
    margin: 30px;
`;

/* IE */

const Select = styled.select`
    width: 150px;
    height: 40px;
    background: #e8feff96;
    padding: 5px 30px 5px 10px;
    border-radius: 4px;
    outline: 0 none;
    border-color: #8d8b8b61;
`;
const Option = styled.option`
    width: 150px;
    background: #e8feff1e;

    padding: 3px 0;
`;

export default Form;
