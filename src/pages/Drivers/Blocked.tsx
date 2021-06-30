import React from 'react';
import PageHeader from "../../containers/PageHeader";
import styled from "styled-components";

const Blocked:React.FC = () => {
    return (
        <DriversWrapper>
            <PageHeader header="Blocked Drivers"/>
        </DriversWrapper>
    );
};

export default Blocked;

const DriversWrapper = styled.div`
  padding: 1rem;
`;