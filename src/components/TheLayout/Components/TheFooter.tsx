import React from 'react';
import styled from "styled-components";

const TheFooter:React.FC = () => {
    return (
        <FooterWrapper>
            <div className="footer">
                <div>
                    <a href="/" target="_blank" rel="noopener noreferrer">Thinkland Solutions</a>
                    <span className="ml-1">&copy; 2021.</span>
                </div>
                <div className="d-flex">
                    <div className="mx-2">
                        {/*<span className="mr-1">Powered by</span>*/}
                        <a href="/" target="_blank" rel="noopener noreferrer">About</a>
                    </div>
                    <div className="mx-2">
                        {/*<span className="mr-1">Powered by</span>*/}
                        <a href="/" target="_blank" rel="noopener noreferrer">Team</a>
                    </div>
                    <div className="ms-2">
                        {/*<span className="mr-1">Powered by</span>*/}
                        <a href="/" target="_blank" rel="noopener noreferrer">Contact</a>
                    </div>
                </div>
            </div>
        </FooterWrapper>
    );
};

export default TheFooter;

const FooterWrapper = styled.div`
  font-size: 14px;
  width: 100%;
  transition: var(--main-transition);
  font-family: Montserrat, sans-serif;
  color: var(--text-color);
  font-weight: 500;
  backdrop-filter: blur(35px);
  background: ${({ theme }) => theme.background};
  justify-content: space-between;
  display: flex;
  align-items: center;
  .footer{
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    justify-content:space-between;
    color: ${({ theme }) => theme.primary};
  }
`;