import React from 'react';
import styled from "styled-components";
import bgImg from "../../assets/bg.png";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";

interface Login {
    path: string,
    name: string
}

const Login: React.FC<Login> = () => {
    return (
        <Container>
            <Wrapper>
                <Sidebar/>
                <Main/>
            </Wrapper>
        </Container>
    );
};

export default Login;

const Container = styled.div`
  background: #eefcff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const Wrapper = styled.div`
  background-image: url(${bgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;