import React from 'react';
import PageHeader from "../../containers/PageHeader";
import styled from "styled-components";

const Users:React.FC = () => {
    return (
        <UsersWrapper>
            <PageHeader header="Users"/>
        </UsersWrapper>
    );
};

export default Users;

const UsersWrapper = styled.div`
  padding: 1rem;
`;