import React from 'react';
import PageHeader from "../../containers/PageHeader";
import styled from "styled-components";

const Moderation = () => {
    return (
        <DriversWrapper>
            <PageHeader header="Moderation Drivers"/>
        </DriversWrapper>
    );
};

export default Moderation;

const DriversWrapper = styled.div`
  padding: 1rem;
`;