import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
 
    return (
        <Header01>
            <h1>(페이지이름)</h1>
            <nav>
                <ul>
                    <Link  to={`/`}>
                    <button className="button is-ghost">ʜᴏᴍᴇ</button>
                    </Link>
                    <Link  to={`/login`}>
                    <button className="button is-ghost">ʟᴏɢɪɴ</button>
                    </Link>
                    <Link  to={`/form`}>
                    <button className="button is-ghost" >
                     ᴡʀɪᴛᴇ
                    </button>
                    </Link>
                </ul>
            </nav>
        </Header01>
    );
};

const Header01 = styled.div`
    color: #003dad;
    height: 100px;
    padding-left: 120px;
    padding-right: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
 
    position: sticky;
    padding-top: 30px;
    
`;

export default Header;