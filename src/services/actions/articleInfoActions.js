import {
    ARTICLE_INFO_START,
    ARTICLE_INFO_SUCCESS,
    ARTICLE_INFO_FAIL,
} from "../constants/constants";

export const getArticlesInfoStartAct = (data) => {
    return {
        type: ARTICLE_INFO_START,
        payload: data,
    };
};

export const getArticlesInfoSuccess = (data) => {
    return {
        type: ARTICLE_INFO_SUCCESS,
        payload: data,
    };
};

export const getArticlesInfoFail = () => {
    return {
        type: ARTICLE_INFO_FAIL,
    };
};