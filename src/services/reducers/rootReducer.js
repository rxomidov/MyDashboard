import { combineReducers } from "redux";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./SidebarReducer";
import articlesReducer from "./artcleReducer";
import articlesInfoReducer from "./articleInfoReducer";
import driversReducer from "./driverReducer";

export const rootReducer = combineReducers({
    // nav: changeStateReducer,
    auth: authReducer,
    profile: profileReducer,
    sidebar: sidebarReducer,
    articles: articlesReducer,
    articlesInfo: articlesInfoReducer,
    drivers: driversReducer,
});