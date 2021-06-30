import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {setTheme, ToggleBackground, ToggleDrawer} from "../../../../services/actions/SidebarActions";
import {BiWindows, FiMinus, IoClose} from "react-icons/all";

const TheHeaderDrawer: React.FC = () => {

    const {t, i18n} = useTranslation();
    const dispatch = useDispatch();

    const sidebar = (state: any) => state.sidebar;
    const drawerOpen = useSelector(sidebar);
    let isOpen: boolean = drawerOpen.drawerOpen;

    const toggleDrawer = () => {
        dispatch(ToggleDrawer());
    };

    const toggleTheme = (theme: string) => {
        dispatch(setTheme(theme));
    };

    const toggleBackground = (bg: string) => {
        dispatch(ToggleBackground(bg));
    };

    return (
        <DrawerWrapper>
            {isOpen && (
                <div className="backdrop" onClick={toggleDrawer}>
                </div>
            )}
            <Container className={`drawer ${isOpen ? "drawer-open" : ""}`}>
                <div className="dots">
                    <div className="dot red" onClick={toggleDrawer}>
                        <IoClose/>
                    </div>
                    <div className="dot yellow" onClick={toggleDrawer}>
                        <BiWindows/>
                    </div>
                    <div className="dot green" onClick={toggleDrawer}>
                        <FiMinus/>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="themes my-2">
                        <div>Themes</div>
                        <div className="d-flex justify-content-between">
                            <div className="text-center">
                                <div className="layout light"
                                     onClick={() => toggleTheme("light")}>
                                </div>
                                <div>Light</div>
                            </div>
                            <div className="text-center">
                                <div className="layout dark"
                                     onClick={() => toggleTheme("dark")}>
                                </div>
                                <div>Dark</div>
                            </div>
                            <div className="text-center">
                                <div className="layout aurora"
                                     onClick={() => toggleTheme("aurora")}>
                                </div>
                                <div>Aurora</div>
                            </div>
                        </div>
                    </div>
                    <div className="backgrounds my-2">
                        <div>Background</div>
                        <div className="d-flex justify-content-between">
                            <div className="text-center">
                                <div className="bg-layout nature"
                                     onClick={() => toggleBackground("nature")}>
                                </div>
                                <div>Nature</div>
                            </div>
                            <div className="text-center">
                                <div className="bg-layout illustrations"
                                     onClick={() => toggleBackground("illustrations")}>
                                </div>
                                <div>Illustrations</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </DrawerWrapper>
    );
};

export default React.memo(TheHeaderDrawer);

const DrawerWrapper = styled.div`
  z-index: 99;
  .backdrop{
    position:absolute;
    z-index: 99;
    top: 0;
    right: 0;
    height: 100vh;  
    width: 100vw;
    background-color: rgba(0,0,0,0.1);
    overflow: hidden;
  }
  .drawer-open{
    right: 0!important;
  }
  .drawer{
    right: ${({isOpen}: any) => !isOpen ? ("-256px") : ("0px")};
    position:absolute;
    margin-left: auto; 
    transition: var(--main-transition);
    z-index: 100;
  }
`;

const Container = styled.div`
  width: 256px;
  box-shadow: 0px 2px 8px rgba(0,0,0,0.1);
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  backdrop-filter: blur(35px);
  background: ${({theme}) => theme.background};
  color: ${({theme}) => theme.primary};
  height: 100vh;
  //display: flex;
  //flex-direction: column;
  justify-content: space-evenly;
  //align-items: center;
  transition: var(--main-transition);
  padding: 0 1rem;
  position:relative;
  right: 0px;
  .backgrounds{
    .bg-layout{
      width: 6.5rem;
      height: 4rem;
      border-radius: 0.5rem;
      cursor:pointer;
    }
    .nature{
      background: lightskyblue;
    }
    .illustrations{
      background: lightseagreen;
    }
  }
  .themes{
    .layout{
      width: 4rem;
      height: 3rem;
      border-radius: 0.5rem;
      cursor:pointer;
    }
    .light{
      border: 2px solid #166280;
      background: rgba(255,255,255,0.8);
    }
    .dark{
      border: 2px solid powderblue;
      background: rgba(0,0,0,0.8);
    }
    .aurora{
      border: 2px solid #166280;
      background: #00797F;
    }
  }
  .dots {
    display: flex;
    position:absolute;
    top: 0.5rem;
    left: 0.5rem;
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
  //@media (max-width: 900px) {
  //  width: 100vw;
  //  position: absolute;
  //  padding: 0;
  //}
`;