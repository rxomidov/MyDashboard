import {
    ARTICLE_START,
    ARTICLE_SUCCESS,
    ARTICLE_FAIL,
} from "../constants/constants";

const initialState = {
    articlesBegin: false,
    articlesSuccess: false,
    articlesSuccessData: [],
    articlesFail: false,
};

const articlesReducer = (state = initialState, action) => {
    // console.log(action.payload)
    switch (action.type) {
        case ARTICLE_START:
            return {
                ...state,
                articlesBegin: true,
            };
        case ARTICLE_SUCCESS:
            return {
                ...state,
                articlesBegin: false,
                articlesSuccess: true,
                articlesSuccessData: action.payload,
                articlesFail: false,
            };
        case ARTICLE_FAIL:
            return {
                ...state,
                articlesBegin: false,
                articlesSuccess: false,
                articlesFail: true,
            };
        default:
            return state;
    }
};

export default articlesReducer;
