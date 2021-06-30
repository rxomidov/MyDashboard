import React, {useState} from 'react';
import {FiChevronDown,} from "react-icons/all";
import {motion} from "framer-motion";
import {container} from "../../../../utils/motions";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {SidebarItemCurrent} from "../../../../services/actions/SidebarActions";

interface Interface {
    subMenu: {
        name: string,
        icon: any,
        all: {
            route: string; name: string; icon: any;
        },
        second: {
            route: string; name: string; icon: any;
        },
        third?: {
            route: string; name: string; icon: any;
        }
        fourth?: {
            route: string; name: string; icon: any;
        }
    },
}

const SidebarItemContainer: React.FC<Interface> = ({subMenu}) => {

    const {name, icon, all, second, third, fourth} = subMenu;

    const {t, i18n} = useTranslation();
    const dispatch = useDispatch();

    const sidebar = (state: any) => state.sidebar;
    const sidebarOpen = useSelector(sidebar);
    let isMiniOpen = sidebarOpen.miniSidebarOpen;
    let sidebarItem = sidebarOpen.sidebarItem;

    const [open, setOpen] = useState(false)

    const OpenSubMenu = (name: any) => {
        dispatch(SidebarItemCurrent(name))
        setOpen(!open)
    };

    const variants = {
        visible: {
            height: "fit-content",
            opacity: 1,
            display: "block",
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.3,
            }
        },
        hidden: {
            height: 0,
            opacity: 0,
            display: "none",
        }
    };
    const variantsChild = {
        visible: {
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1,
            }
        },
        hidden: {
            opacity: 0,
        }
    };

    return (
        <SidebarItemWrapper>
            <SidebarItem onClick={() => OpenSubMenu(name)}>
                {icon}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate={!isMiniOpen ? "visible" : "hidden"}
                        style={{width: "100%", display: "flex", justifyContent: "space-between"}}
                    >
                        <span>{name}</span>
                        <FiChevronDown className={`m-0 ${sidebarItem === name && "rotate"}`}/>
                    </motion.div>
            </SidebarItem>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate={sidebarItem === name ? "visible" : "hidden"}
                >
                    <SidebarSubMenu>
                        <NavLink activeClassName="active" to={all.route}>
                            <motion.div
                                variants={variantsChild}
                                initial="hidden"
                                animate="visible"
                            >
                                <SidebarSubMenuItem>
                                    {icon}
                                        <motion.div
                                            variants={container}
                                            initial="hidden"
                                            animate={!isMiniOpen ? "visible" : "hidden"}
                                            style={{width: "100%", display: "flex", justifyContent: "space-between"}}
                                        >
                                            <span>{all.name}</span>
                                        </motion.div>
                                </SidebarSubMenuItem>
                            </motion.div>
                        </NavLink>
                        <NavLink activeClassName="active" to={second.route}>
                            <motion.div
                                variants={variantsChild}
                                initial="hidden"
                                animate="visible"
                            >
                                <SidebarSubMenuItem>
                                    {second.icon}
                                        <motion.div
                                            variants={container}
                                            initial="hidden"
                                            animate={!isMiniOpen ? "visible" : "hidden"}
                                            style={{width: "100%", display: "flex", justifyContent: "space-between"}}
                                        >
                                            <span>{second.name}</span>
                                        </motion.div>
                                </SidebarSubMenuItem>
                            </motion.div>
                        </NavLink>
                        {third && (
                            <NavLink activeClassName="active" to={third.route}>
                                <motion.div
                                    variants={variantsChild}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <SidebarSubMenuItem>
                                        {third.icon}
                                            <motion.div
                                                variants={container}
                                                initial="hidden"
                                                animate={!isMiniOpen ? "visible" : "hidden"}
                                                style={{width: "100%", display: "flex", justifyContent: "space-between"}}
                                            >
                                                <span>{third.name}</span>
                                            </motion.div>
                                    </SidebarSubMenuItem>
                                </motion.div>
                            </NavLink>
                        )}
                        {fourth && (
                            <NavLink activeClassName="active" to={fourth.route}>
                                <motion.div
                                    variants={variantsChild}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <SidebarSubMenuItem>
                                        {fourth.icon}
                                            <motion.div
                                                variants={container}
                                                initial="hidden"
                                                animate={!isMiniOpen ? "visible" : "hidden"}
                                                style={{width: "100%", display: "flex", justifyContent: "space-between"}}
                                            >
                                                <span>{fourth.name}</span>
                                            </motion.div>
                                    </SidebarSubMenuItem>
                                </motion.div>
                            </NavLink>
                        )}
                    </SidebarSubMenu>
                </motion.div>
        </SidebarItemWrapper>
    );
};

export default React.memo(SidebarItemContainer);

const SidebarItemWrapper = styled.div`
  
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
  .rotate{
    transform: rotate(-180deg);
    transition: var(--main-transition);
  }
  svg{
    margin-right: 1rem;
    height: 1.5rem;
    width: 1.5rem;
    transition: var(--main-transition);
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
    width: ${({isMiniOpen}: any) => !isMiniOpen && ("14rem")};
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
    margin-left: 0.5rem;
    font-weight: 400!important;
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