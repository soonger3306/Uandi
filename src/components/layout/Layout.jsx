import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
    return <StLayout>{ children }</StLayout>
}

export default Layout;

const StLayout = styled.div`
width: 80%;
height: calc(100vh - 45px);
padding: 24px;
box-sizing: border-box;
`