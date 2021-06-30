import React from "react";
import styled from "styled-components";
import logo from "../../../assets/logoShipment.png";
import logoMini from "../../../assets/logoShipmentMini.png";
import {
    AiOutlineUnorderedList, BiWindows, FiChevronDown,
    FiLogOut, FiMinus,
    HiChevronLeft,
    HiOutlineUsers, IoClose,
    RiArticleLine,
    RiDashboardLine
} from "react-icons/all";
import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ToggleMiniSidebar, ToggleSidebar} from "../../../services/actions/SidebarActions";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import {container, fadeIn} from "../../../utils/motions";
import RippleEffect from "../../../containers/RippleEffect";
import admin from "../../../assets/admin/admin.jpg";
import SidebarItemContainer from "./TheSidebar/SidebarItemContainer";
import {ArticlesData, DriversData, OrdersData, UsersData} from "../../../utils/sidebarData";

const TheSidebar: React.FC = () => {

    const sidebar = (state: any) => state.sidebar;
    const sidebarOpen = useSelector(sidebar);
    let isOpen = sidebarOpen.sidebarOpen;
    let isMiniOpen = sidebarOpen.miniSidebarOpen;

    const {t, i18n} = useTranslation();
    const dispatch = useDispatch();

    const toggleSidebar = () => {
        dispatch(ToggleSidebar());
        // dispatch(ToggleMiniSidebar());
    };

    const toggleMiniSidebar = () => {
        dispatch(ToggleMiniSidebar());
    };

    return (
        <SidebarWrapper>
            <Container className={(isOpen && (`responsive`)) || (isMiniOpen && (`responsive-mini`))}>
                {/*{!isMiniOpen && (*/}
                {/*    <div className="dots">*/}
                {/*        <div className="dot red" onClick={toggleSidebar}>*/}
                {/*            <IoClose/>*/}
                {/*        </div>*/}
                {/*        <div className="dot yellow" onClick={toggleSidebar}>*/}
                {/*            <BiWindows/>*/}
                {/*        </div>*/}
                {/*        <div className="dot green" onClick={toggleSidebar}>*/}
                {/*            <FiMinus/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*)}*/}
                <LogoWrapper>
                    {isMiniOpen && (
                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate="visible"
                        >
                            <img src={logoMini} alt=""/>
                        </motion.div>
                    )}
                    {!isMiniOpen && (
                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate="visible"
                        >
                            <img src={logo} alt=""/>
                        </motion.div>
                    )}
                    {/*<h3>*/}
                    {/*    Side <span>Bar</span>*/}
                    {/*</h3>*/}
                </LogoWrapper>
                <div className={`admin-container ${!isMiniOpen && "padding"}`}>
                    <img className={`rounded-3`} width={48} src={admin} alt="admin"/>
                    {!isMiniOpen && (
                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate="visible"
                        >
                            <span className="ms-2">Admin</span>
                        </motion.div>
                    )}
                </div>
                <div>
                    <NavLink activeClassName="active" to="/dashboard">
                        <SidebarItem>
                            <RiDashboardLine/>
                            {!isMiniOpen && (
                                <motion.div
                                    variants={container}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <span>{t('header.dashboard')}</span>
                                </motion.div>
                            )}
                        </SidebarItem>
                    </NavLink>
                    <ArticlesData/>
                    <OrdersData/>
                    <DriversData/>
                    <UsersData/>
                </div>
                <div>
                    <SidebarItem>
                        <FiLogOut/>
                        {!isMiniOpen && (
                            <motion.div
                                variants={container}
                                initial="hidden"
                                animate="visible"
                            >
                                <span>{t('sidebar.Logout')}</span>
                            </motion.div>
                        )}
                    </SidebarItem>
                </div>
                <div className="toggle-mobile">
                    <button onClick={toggleMiniSidebar}>
                        <HiChevronLeft/>
                    </button>
                </div>
            </Container>
            {isOpen && (
                <motion.div variants={fadeIn}
                            initial="hidden"
                            animate="visible"
                            className="backdrop d-block d-lg-none"
                            onClick={toggleSidebar}
                ></motion.div>
            )}
        </SidebarWrapper>
    );
};

export default TheSidebar;

const SidebarWrapper = styled.div`
  .backdrop{
    width: 100vw;
    height: 100vh;
    background:rgba(0,0,0,0.2);
    z-index: 98;
    position:absolute;
  }
  .admin-container{
    border-radius: 8px;
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.sidebarColor};
    margin-bottom: 1rem;
    padding: 10px 0;
    transition: var(--main-transition);
  }
  .padding{
      background:rgba(255,255,255,0.2);
      padding: 10px;
      transition: var(--main-transition);
    }
  @media (max-width: 992px) {
     div:first-child{
      //position:absolute;
      left: -256px;
     }
   }
  .responsive-mini{
    width: 78px;
    svg{
      margin: 0;
    }
    span{
      position:absolute;
      left: 0;
      opacity: 0;
      display: none;
      // &:hover{
      //   background: ${({theme}) => theme.background};
      //   color: ${({theme}) => theme.primary};
      // }
    }
    @media (max-width: 992px) {
      left: 0;
    }
  }
  .responsive{
    position:absolute;
    left: -256px;
    svg{
      margin-right: 0;
    }
    span{
      //display: none;
    }
    @media (max-width: 992px) {
      left: 0!important;
    }
  }
  .toggle-mobile{
    margin: 0;
    button {
      background: transparent;
      color: ${({theme}) => theme.sidebarColor};
      border: none;
      float: right;
      border-radius: 8px;
      padding: 1rem;
      transition: var(--main-transition);
      &:hover{
        background: rgba(0,0,0,0.05);
      } 
      svg{
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
`;

const LogoWrapper = styled.div`
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  img {
    height: 3rem;
  }
  h3 {
    color: #ff8d8d;
    text-align: center;
    font-size: 22px;
  }
  span {
    color: #5dc399;
    font-weight: 300;
    font-size: 18px;
  }
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({theme}) => theme.sidebarColor};
  cursor: pointer;
  padding: 10px;
  border-radius: 0.5rem;
  margin-bottom: 6px;
  transition: var(--main-transition);
  visibility: visible;
  svg{
    margin-right: 1rem;
    height: 1.5rem;
    width: 1.5rem;
  }
  span{
    //transition-delay: 0.5s;
    transition: var(--main-transition);
    margin-left: 0.5rem;
    //position:absolute;
    //z-index: -1;
  }
  :hover{
    // background: ${({theme}) => theme.sidebarItemHover};
    // color: ${({theme}) => theme.sidebarItemhover};
    background-image: linear-gradient(to right, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
    span{
      //opacity: 1;
      //display:block;
      //position:absolute;
      //left: 4.5rem;
    }
    //width: ${({isMiniOpen}: any) => !isMiniOpen && ("14rem")};
  }
`;

const SidebarSubMenu = styled.div`
  background-image: linear-gradient(to right, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.025) 100%);
  border-radius: 0.5rem;
  transition: var(--main-transition);
`;

const SidebarSubMenuItem = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({theme}) => theme.sidebarColor};
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 10px;
  visibility: visible;
  svg{
    margin-right: 1rem;
    height: 1.5rem;
    width: 1.5rem;
  }
  span{
    //transition-delay: 0.5s;
    transition: var(--main-transition);
    //position:absolute;
    //z-index: -1;
  }
  :hover{
    // background: ${({theme}) => theme.sidebarItemHover};
    // color: ${({theme}) => theme.sidebarItemhover};
    background-image: linear-gradient(to right, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
    span{
      //opacity: 1;
      //display:block;
      //position:absolute;
      //left: 4.5rem;
    }
    width: ${({isMiniOpen}: any) => !isMiniOpen && ("14rem")};
  }
`;

const Container = styled.div`
  width: 256px;
  z-index: 99;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  backdrop-filter: blur(35px);
  background: ${({theme}) => theme.sidebarBackground};
  height: 100vh;
  display: flex;
  flex-direction: column;
  //justify-content: space-evenly;
  //align-items: center;
  transition: var(--main-transition);
  padding: 0 1rem;
  position:relative;
  left: 0px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
      display: none;
      width: 20px;
  }
  ::-webkit-scrollbar-track {
      background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
      background-color: darkslateblue;
      border-radius: 20px;
      border: 6px solid transparent;
      background-clip: content-box;
  }  
  .active{
    div:first-child{
      //border-top-right-radius: 0;
      //border-bottom-right-radius: 0;
      background-image: linear-gradient(to right, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%);
    }
  }
  a{
  text-decoration: none;
  }
  .dots {
    display: flex;
    margin-left: auto;  
    //position:absolute;
    margin-top: 0.5rem;
    cursor:pointer;
    .dot{
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      margin: 0.1rem;
      display: flex;
      align-items: center;
      justify-content:center;
      svg{
        color: transparent;
        transition: var(--main-transition);
        width: 12px;
      }
      &:hover{
        svg{
          color: #fff;
        }
      }
    }
    .red{
      background: #ff605c;
    }
    .yellow{
      background: #ffbd44;
    }
    .green{
      background: #00ca4e;
    }    
  }
  //@media (max-width: 992) {
  //  width: 100vw;
  //  position: absolute;
  //  padding: 0;
  //}
  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;
    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`;
