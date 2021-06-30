import React from 'react';
import styled from "styled-components";

interface PageHeader {
    header: string,
}

const PageHeader: React.FC<PageHeader> = ({header}) => {
    return (
        <PageHeaderWrapper>
            <div>{header}</div>
        </PageHeaderWrapper>
    );
};

export default PageHeader;

const PageHeaderWrapper = styled.div`
  div{
    font-size: 1rem;
    font-family: Montserrat,sans-serif;
    font-weight: 600;
  }
`;