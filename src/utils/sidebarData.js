import {
    AiFillControl,
    AiFillGoogleCircle,
    AiOutlineProject,
    AiOutlineUnorderedList, FaSpinner, HiOutlineUsers,
    MdBlock,
    MdCancel, MdDriveEta, MdFiberNew, RiArticleLine
} from "react-icons/all";
import React from "react";
import {useTranslation} from "react-i18next";
import SidebarItemContainer from "../components/TheLayout/Components/TheSidebar/SidebarItemContainer";


export const ArticlesData = () => {
    const {t, i18n} = useTranslation();
    return (
        <SidebarItemContainer subMenu={
            {
                name: `${t('sidebar.Article')}`,
                icon: <RiArticleLine/>,
                all: {
                    route: "/articles",
                    name: "All",
                    icon: <AiOutlineUnorderedList/>,
                },
                second: {
                    route: "/articles/new",
                    name: "New",
                    icon: <MdFiberNew/>,
                },
                third: {
                    route: "/articles/inprogress",
                    name: "In Progress",
                    icon: <FaSpinner/>,
                },
                fourth: {
                    route: "/articles/canceled",
                    name: "Canceled",
                    icon: <MdCancel/>,
                }
            }
        }/>)

};

export const OrdersData = () => {
    const {t, i18n} = useTranslation();
    return (
        <SidebarItemContainer subMenu={
            {
                name: `${t('sidebar.Orders')}`,
                icon: <AiOutlineProject/>,
                all: {
                    route: "/orders/all",
                    name: "All",
                    icon: <AiOutlineUnorderedList/>,
                },
                second: {
                    route: "/orders/controversial",
                    name: "Controversial",
                    icon: <AiFillControl/>,
                },
                third: {
                    route: "/orders/canceled",
                    name: "Canceled",
                    icon: <MdCancel/>,
                }
            }
        }/>)

};

export const DriversData = () => {
    const {t, i18n} = useTranslation();
    return (
        <SidebarItemContainer subMenu={
            {
                name: `${t('sidebar.Drivers')}`,
                icon: <MdDriveEta/>,
                all: {
                    route: "/drivers",
                    name: "All",
                    icon: <AiOutlineUnorderedList/>,
                },
                second: {
                    route: "/drivers/moderation",
                    name: "Moderation",
                    icon: <AiFillGoogleCircle/>,
                },
                third: {
                    route: "/drivers/blocked",
                    name: "Blocked",
                    icon: <MdBlock/>,
                }
            }
        }/>)

};

export const UsersData = () => {
    const {t, i18n} = useTranslation();
    return (
        <SidebarItemContainer subMenu={
            {
                name: `${t('sidebar.Users')}`,
                icon: <HiOutlineUsers/>,
                all: {
                    route: "/users/all",
                    name: "All",
                    icon: <AiOutlineUnorderedList/>,
                },
                second: {
                    route: "/users/blocked",
                    name: "Blocked",
                    icon: <MdBlock/>,
                },
            }
        }/>)

};