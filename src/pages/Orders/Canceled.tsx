import React from 'react';
import PageHeader from "../../containers/PageHeader";
import styled from "styled-components";

const Canceled:React.FC = () => {
    return (
        <OrdersWrapper>
            <PageHeader header="Canceled Orders"/>
        </OrdersWrapper>
    );
};

export default Canceled;

const OrdersWrapper = styled.div`
  padding: 1rem;
`;