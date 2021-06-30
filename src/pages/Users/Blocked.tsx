import React from 'react';
import PageHeader from "../../containers/PageHeader";
import styled from "styled-components";

const Blocked:React.FC = () => {
    return (
        <UsersWrapper>
            <PageHeader header="Blocked Users"/>
        </UsersWrapper>
    );
};

export default Blocked;

const UsersWrapper = styled.div`
  padding: 1rem;
`;