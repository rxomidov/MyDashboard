import React from "react";
import styled from "styled-components";

const Main = () => {
    return (
        <Container>
            <h1>
                Shipment <br />
                App
            </h1>
        </Container>
    );
};

export default Main;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 65px;
    font-weight: 900;
    color: rgba(52,52,52,0.6);
    @media (max-width: 900px) {
      display: none;
    }
  }
`;