import React from 'react';
import PageHeader from "../../containers/PageHeader";
import styled from "styled-components";

const Orders:React.FC = () => {
    return (
        <OrdersWrapper>
            <PageHeader header="Orders"/>
        </OrdersWrapper>
    );
};

export default React.memo(Orders)

const OrdersWrapper = styled.div`
  padding: 1rem;
`;