import {
    SIDEBAR_OPEN, MINI_SIDEBAR_OPEN, SET_THEME, DRAWER_OPEN, CHANGE_BACKGROUND, SIDEBAR_ITEM
} from "../constants/constants";

export const ToggleSidebar = () => {
    return {
        type: SIDEBAR_OPEN,
    };
};
export const ToggleMiniSidebar = () => {
    return {
        type: MINI_SIDEBAR_OPEN,
    };
};
export const SidebarItemCurrent = (data) => {
    return {
        type: SIDEBAR_ITEM,
        payload: data
    };
};
export const setTheme = (data) => {
    return {
        type: SET_THEME,
        payload: data
    };
};
export const ToggleDrawer = () => {
    return {
        type: DRAWER_OPEN,
    };
};
export const ToggleBackground = (data) => {
    return {
        type: CHANGE_BACKGROUND,
        payload: data
    };
};