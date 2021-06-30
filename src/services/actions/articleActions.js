import {
    ARTICLE_START,
    ARTICLE_SUCCESS,
    ARTICLE_FAIL,
} from "../constants/constants";

export const getArticlesStartAct = (data) => {
    return {
        type: ARTICLE_START,
        payload: data,
    };
};

export const getArticlesSuccess = (data) => {
    return {
        type: ARTICLE_SUCCESS,
        payload: data,
    };
};

export const getArticlesFail = () => {
    return {
        type: ARTICLE_FAIL,
    };
};