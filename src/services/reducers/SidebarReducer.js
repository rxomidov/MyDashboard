import {
    CHANGE_BACKGROUND,
    DRAWER_OPEN,
    MINI_SIDEBAR_OPEN, SET_THEME, SIDEBAR_ITEM,
    SIDEBAR_OPEN
} from "../constants/constants";

const initialState = {
    sidebarOpen: false,
    miniSidebarOpen: false,
    sidebarItem: null,
    theme: 'light',
    drawerOpen: false,
    background: "nature",
};

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIDEBAR_OPEN:
            return {
                ...state,
                sidebarOpen: !(state.sidebarOpen),
            };
        case MINI_SIDEBAR_OPEN:
            return {
                ...state,
                miniSidebarOpen: !(state.miniSidebarOpen),
            };
        case SIDEBAR_ITEM:
            return {
                ...state,
                // sidebarItem: state.sidebarItem === null ? action.payload : null,
                sidebarItem: action.payload,
            };
        case SET_THEME:
            return {
                ...state,
                theme: action.payload,
            };
        case DRAWER_OPEN:
            return {
                ...state,
                drawerOpen: !(state.drawerOpen),
            };
        case CHANGE_BACKGROUND:
            return {
                ...state,
                background: action.payload,
            };
        default:
            return state;
    }
};

export default sidebarReducer;