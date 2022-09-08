import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

// export const requestLogin = async (nickname, password) => {
//     return await axios
//         .post(
//             `${serverURL}/login/`,
//             {
//                 nickname: nickname,
//                 password: password,
//             },
//             { withCredentials: true } // refreshToken cookie를 주고 받을 수 있다.
//         )
//         .then((response) => {
//             //성공했을 때
//             /// token이 필요한 API 요청 시 header Authorization에 token 담아서 보내기
//             axios.defaults.headers.common[
//                 "Authorization"
//             ] = `Bearer ${response.data.access_token}`;
//             return response.data;
//         })
//         .catch((e) => {
//             //에러가 났을 때
//             console.log(e.response.data);
//             return "이메일 혹은 비밀번호를 확인하세요.";
//         });
// };

// export const requestAccessToken = async (refresh_token) => {
//     return await axios
//         .post(`${serverURL}/token/refresh/`, {
//           Refresh_Token: refresh_token,
//         })
//         .then((response) => {
//             return response.data.access;
//         })
//         .catch((e) => {
//             console.log(e.response.data);
//         });
// };

// export const checkAccessToken = async (refresh_token) => {
//   if (axios.defaults.headers.common["Authorization"] === undefined) {
//       return await requestAccessToken(refresh_token).then((response) => {
//           return response;
//       });
//   } else {
//       return axios.defaults.headers.common["Authorization"].split(" ")[1];
//   }
// };

const Login = () => {
    const [nickName, setNickName] = useState(""); // 사용자 아이디
    const [passWord, setPassWord] = useState(""); //비밀번호

    const loginHandler = () => {
        axios
            .post("http://localhost:3001/sign", {
                nickName: nickName,
                password: passWord,
                // passWordConfirm: passWordConfirm,
            })
            .then((response) => {
                //동시에 일어나는 걸 막기위해 then 이라는 함수가 사용된다
                // Handle success.
                console.log("Well done!");
                console.log("User token", response.data.jwt); //토큰을 받아오면
                localStorage.setItem("token", response.data.jwt);
                // replace("/") 홈으로 보내줘야한다
            })
            .catch((error) => {
                // Handle error.
                console.log("An error occurred:", error.response);
            });
    };

    return (
        <>
            <div className="card" style={{ height: "82vh" }}>
                <Left01
                    className="left"
                    style={{ height: "82vh", width: "50%", float: "left" }}
                ></Left01>
                <Right01
                    className="right"
                    style={{ height: "82vh", width: "50%", float: "right" }}
                >
                    <Input2 className="input1" style={{ marginTop: "300px" }}>
                        <label className="label"></label>
                        <input
                            className="input"
                            type="email"
                            placeholder="🙂ID"
                            // value={nickName}
                            onChange={(e) => {
                                console.log(e.target.value);
                                setNickName(e.target.value);
                            }}
                        />
                        <br />
                        <br />

                        <input
                            className="input"
                            type="password"
                            placeholder="🔒Password"
                            // value={passWord}
                            onChange={(e) => {
                                setPassWord(e.target.value);
                                console.log(e.target.value);
                            }}
                        ></input>
                        <br />
                        <br />

                        <button
                            onClick={loginHandler}
                            className="button is-medium is-fullwidth"
                        >
                            ʟᴏɢɪɴ
                        </button>
                        <div>
                            <Link to={`/sign`}>
                                <a
                                    className="a"
                                    href="url"
                                    style={{ height: "82vh", float: "right" }}
                                >
                                    {" "}
                                    회원가입
                                </a>
                            </Link>
                        </div>
                    </Input2>
                </Right01>
            </div>
        </>
    );
};

const Left01 = styled.div`
    float: left;
    box-sizing: border-box;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(https://i.pinimg.com/564x/16/90/f8/1690f8f5fb7e2bfbc557f4dc9a95143c.jpg);
`;
const Right01 = styled.div`
    width: 50%;
    float: right;
    box-sizing: border-box;
    background: #8799c1;
    overflow: hidden;
`;
const Input2 = styled.div`
    margin: 360px 100px 0px 100px;
    box-sizing: border-box;
`;

export default Login;