import React, {useEffect, useState} from 'react';
import TheSidebar from "./Components/TheSidebar";
import bgImg from "../../assets/bg.png";
import bgImg2 from "../../assets/bg2.jpg";
import {ThemeProvider} from "styled-components";
import styled from "styled-components";
import {lightTheme, darkTheme, auroraTheme} from "../../utils/global";
import TheContent from "./Components/TheContent";
import TheHeader from "./Components/TheHeader/TheHeader";
import {useDispatch, useSelector} from "react-redux";
import TheFooter from "./Components/TheFooter";
import TheHeaderDrawer from "./Components/TheHeader/TheHeaderDrawer";
import {useTranslation} from "react-i18next";

const TheLayout: React.FC = () => {

    const {t, i18n} = useTranslation();
    const dispatch = useDispatch();

    const sidebar = (state: any) => state.sidebar;
    const sidebarOpen = useSelector(sidebar);
    let isOpen = sidebarOpen.sidebarOpen;
    let isMiniOpen = sidebarOpen.miniSidebarOpen;
    let defaultBg = sidebarOpen.background;
    let theme = sidebarOpen.theme;
    let bothSidebar: boolean = false;
    if (isOpen && isMiniOpen) {
        bothSidebar = true;
    }

    const [bg, setBg] = useState(bgImg);
    console.log(bg)
    // if (defaultBg === "illustrations") {
    //     console.log(defaultBg)
    //     setBg(bgImg2);
    // } else {
    //     setBg(bgImg);
    // }

    return (
        <ThemeProvider theme={
            (theme === 'light' && lightTheme)
            || (theme === 'dark' && darkTheme)
            || (theme === 'aurora' && auroraTheme)}>
            <Container
                // style={{backgroundImage: `url(${bg})`}}
            >
                <TheSidebar/>
                <div
                    className={`toggle-sidebar ${isOpen ? "toggle" : ""} ${isMiniOpen ? "toggle-mini" : ""} ${bothSidebar ? "both-sidebar" : ""}`}>
                    <TheHeader location={window.location}/>
                    <div className="body">
                        <TheContent/>
                    </div>
                    <TheFooter/>
                </div>
                <TheHeaderDrawer/>
            </Container>
        </ThemeProvider>
    );
};

export default TheLayout;

const Container = styled.div`
  //min-width: 400px;
  max-width: 100%;
  overflow-x: hidden;
  backdrop-filter: blur(35px);
  background: ${({theme}) => theme.bodyBackground}
  // url(${bgImg})
  //url("https://wallpaperaccess.com/full/3665340.jpg")
  center center no-repeat;
  background-size:cover;
  min-height: 100vh;
  display: flex;
  align-items: start;
  .body{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 1rem;
    backdrop-filter: blur(35px);
    background: ${({theme}) => theme.background};
    color: ${({theme}) => theme.primary};
    border-radius: 1rem;
    transition: var(--main-transition);
  }
  .toggle-sidebar{
    display: flex;
    flex: 1 1;
    flex-direction: column;
    min-width: 0;
    //min-height: 100vh;
    height: 100vh;
    position:absolute;
    transition: var(--main-transition);
    margin-left: 256px;
    width: calc(100% - 256px);
    overflow-y: scroll;
    &::-webkit-scrollbar {
      //display: none;
      //width: 20px;
    }
    //::-webkit-scrollbar-track {
    //  background-color: whitesmoke;
    //}
    //::-webkit-scrollbar-thumb {
    //  background-color: lightskyblue;
    //  border-radius: 20px;
    //  border: 6px solid transparent;
    //  background-clip: content-box;
    //}    
    @media (max-width: 992px) {
      margin-left: 0;
      width: 100%;
    }
  }
  .toggle{
    width: 100%;
    margin-left: 0;
  }
  .toggle-mini{
    margin-left: 78px;
    width: calc(100% - 78px);
  }
  .both-sidebar{
    width: 100%!important;
    margin-left: 0!important;
  }
  //@media (max-width: 900px) {
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
