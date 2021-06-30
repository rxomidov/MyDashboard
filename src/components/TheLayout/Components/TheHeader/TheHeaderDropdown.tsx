import React, {useState} from 'react';
import styled from "styled-components";
import user from "../../../../assets/user.png";
import admin from "../../../../assets/admin/admin.jpg";
import {CgProfile, RiLogoutCircleRLine, RiSettings6Line} from "react-icons/all";
import RippleButton from "../../../../containers/RippleButton";

const TheHeaderDropdown:React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <DropdownWrapper>
            <div className="dropdown-lang">
                <div className="custom-dropdown-toggle" onClick={toggleDropdown}>
                    <img src={user} alt="user"/>
                </div>
                {isOpen && (
                    <div>
                        <div onClick={toggleDropdown} className="dropdown-wrapper"></div>
                        <div className="dropdown-list">
                            <div className="m-3 d-flex align-items-center">
                                <img className="rounded-3" width={48} src={admin} alt="admin"/>
                                <div className="ms-2">Tony Stark</div>
                            </div>
                            <hr className="hr"/>
                            <div className="dropdown-item">
                                <CgProfile className="text-success"/>
                                <div className="ms-3">
                                    <div className="fw-bold">Profile</div>
                                    <span>Account settings and more.</span>
                                </div>
                            </div>
                            <div className="dropdown-item">
                                <RiSettings6Line className="text-info"/>
                                <div className="ms-3">
                                    <div className="fw-bold">Settings</div>
                                    <span>Account settings and more.</span>
                                </div>
                            </div>
                            <hr className="hr"/>
                            <div className="dropdown-item">
                                <RippleButton
                                    name="Logout"
                                    Icon={RiLogoutCircleRLine}
                                    // onClick={toggleDrawer}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </DropdownWrapper>
    );
};

export default React.memo(TheHeaderDropdown);

const DropdownWrapper = styled.div`

  .dropdown-lang{
    position:relative;
    .custom-dropdown-toggle{
      cursor:pointer;
      background: transparent;
      color: ${({theme}) => theme.primary};
      transition: var(--main-transition);
      font-size: 1rem;
      padding: 0.5rem;
      width: 3rem;
      height: 3rem;
      border-radius: 8px;
      display:flex;
      align-items: center;
      justify-content:center;
      img{
          width: 1.5rem;
          height: 1.5rem;
          object-fit: cover;
        }
      &:hover{
        background: ${({theme}) => theme.white};
      }
    }
    .dropdown-wrapper{
      width: 100vw;
      height: 98vh;
      position:absolute;
      z-index: 12;
      right: 0;
      top: 0;
    }
    .dropdown-list{
      position:absolute;
      z-index: 12 ;
      right: 0;
      top: 3rem;
      cursor:pointer;
      backdrop-filter: blur(35px);
      //background: ${({theme}) => theme.bodyBackground};
      background: ${({theme}) => theme.white};
      //padding: 0.5rem 0;
      padding-bottom: 0.5rem;
      border-radius: 8px;
      box-shadow: 0px 2px 8px rgba(0,0,0,0.1);
      .header{
        background: ${({theme}) => theme.background};
        display: flex;
        justify-content:center;
        padding: 0.3rem 1rem;
        width: 24rem;
      }
      .dropdown-item{
        padding: 0.3rem 2rem;
        width: 24rem;
        display:flex;
        align-items: center;
        color: ${({theme}) => theme.primary};
        svg{
          //width: 1.2rem;
          //height: 1rem;
        }
        span{
          font-size: 14px;
        }
        transition: var(--main-transition);
          &:hover{
          //background: ${({theme}) => theme.sidebarItemHover};
          background: transparent!important;
          color: dodgerblue;
        }  
      }
    } 
  }
`;