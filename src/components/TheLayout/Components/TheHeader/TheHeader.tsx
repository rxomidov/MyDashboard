import React, {useState} from 'react';
import {BiBell, FiMoon, FiSun, HiMenuAlt1, RiDashboard2Line, RiSettings6Line} from "react-icons/all";
import styled from "styled-components";
import {Link} from "react-router-dom";

import logo from "../../../../assets/logoShipment.png";
import {useDispatch, useSelector} from "react-redux";
import {setTheme, ToggleDrawer, ToggleMiniSidebar, ToggleSidebar} from "../../../../services/actions/SidebarActions";
import TheHeaderDropdownLang from "./TheHeaderDropdownLang";
import {useTranslation} from "react-i18next";
import TheHeaderDropdown from "./TheHeaderDropdown";
import RippleButton from "../../../../containers/RippleButton";
import CustomizedBreadcrumbs from "../../../../containers/Breadcrumb";

interface TheHeaderInterface {
    location: {
        pathname: string,
    },
}

const TheHeader: React.FC<TheHeaderInterface> = props => {

    const {location: { pathname }} = props;
    // console.log(pathname);

    const {t, i18n} = useTranslation();
    const dispatch = useDispatch();

    const toggleSidebar = () => {
        dispatch(ToggleSidebar());
        // dispatch(ToggleMiniSidebar());
    };

    const sidebar = (state: any) => state.sidebar;
    const sidebarOpen = useSelector(sidebar);
    let theme = sidebarOpen.theme;

    const toggleDrawer = () => {
        dispatch(ToggleDrawer());
    };

    const toggleTheme = () => {
        if (theme === 'light') {
            dispatch(setTheme('dark'));
        } else {
            dispatch(setTheme('light'));
        }
    };

    return (
        <Wrapper>
            <HeaderWrapper className="container-fluid">
                <div className="d-flex align-items-center">
                    <button className="hamburger" onClick={toggleSidebar}>
                        <HiMenuAlt1/>
                    </button>
                    <div className="header-brand d-block d-md-none">
                        <img src={logo} alt="logo" height={32}/>
                    </div>
                    <nav className="d-none d-md-block">
                        <ul className="styled-ul">
                            <li>
                                <Link to="/dashboard">
                                    {t('header.dashboard')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/articles">
                                    Articles
                                </Link>
                            </li>
                            <li>
                                <Link to="/users">
                                    {t('header.users')}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="dropdown-group">
                    <RippleButton
                        Icon={BiBell}
                        // onClick={toggleDrawer}
                    />
                    <button className="toggle-theme" onClick={toggleTheme}>
                        {theme === "light" ? (
                            <FiSun/>
                        ) : (
                            <FiMoon/>
                        )}
                    </button>
                    <TheHeaderDropdownLang/>
                    <TheHeaderDropdown/>
                </div>
            </HeaderWrapper>
            <Subheader className="container-fluid">
                <div className="breadcrumb m-0">
                    {/*{pathname}*/}
                    <CustomizedBreadcrumbs/>
                </div>
                <div className="d-none d-md-flex justify-content-between align-items-center">
                    {/*<RippleButton name="Ripple" Icon={RiDashboard2Line}/>*/}
                    <RippleButton
                        name="Dashboard"
                        Icon={RiDashboard2Line}
                    />
                    <RippleButton
                        name="Settings"
                        Icon={RiSettings6Line}
                        onClick={toggleDrawer}
                    />
                </div>
            </Subheader>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  position:sticky;
  top: 0;
  right: 0;
  z-index: 9;
  width: 100%;
  box-shadow: 0px 2px 8px rgba(0,0,0,0.1);
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  backdrop-filter: blur(35px);
  background: ${({ theme }) => theme.background};
`;


const Subheader = styled.div`
  height: 3rem;
  transition: var(--main-transition);
  font-family: Montserrat, sans-serif;
  //border-bottom: 2px solid lightskyblue;
  //color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 786px) {
    //display: none;
  }
`;

const HeaderWrapper = styled.div`
  height: 3.5rem;
  transition: var(--main-transition);
  font-family: Montserrat, sans-serif;
  //border-bottom: 2px solid lightskyblue;
  //box-shadow: 0px 2px 8px rgba(0,0,0,0.1);
  //color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .styled-ul{
    display: flex;
    list-style: none;
    margin: 0;
    li{
      margin-right: 2rem;
      a{
        text-decoration: none;
        color: ${({ theme }) => theme.primary};
      }
    }
  }
  .hamburger {
    color: ${({ theme }) => theme.primary};
    background: transparent;
    border: none;
    padding: 0.5rem;
    border-radius: 8px; 
    transition: var(--main-transition);
    &:hover{
        background: ${({ theme }) => theme.sidebarItemHover};
      }
    svg{
      width: 2rem;
      height: 2rem;
    }
  }
  .dropdown-group{
    display: flex;
    align-items: center;
  }
  .toggle-theme{
    background: transparent;
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.primary};
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 8px;
    display:flex;
    align-items: center;
    justify-content:center;
    width: 2.5rem;
    height: 2.5rem;
    svg{
      width: 1rem;
      height: 1rem;
    }
    &:hover{
      background: ${({ theme }) => theme.sidebarItemHover};
    } 
  }
`;

export default React.memo(TheHeader);