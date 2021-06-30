import React from 'react';
import PageHeader from "../../containers/PageHeader";
import styled from "styled-components";

const Controversial:React.FC = () => {
    return (
        <OrdersWrapper>
            <PageHeader header="Controversial Orders"/>
        </OrdersWrapper>
    );
};

export default Controversial;

const OrdersWrapper = styled.div`
  padding: 1rem;
`;