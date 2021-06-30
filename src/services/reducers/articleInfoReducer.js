import {
    ARTICLE_INFO_START,
    ARTICLE_INFO_SUCCESS,
    ARTICLE_INFO_FAIL,
} from "../constants/constants";

const initialState = {
    articlesInfoBegin: false,
    articlesInfoSuccess: false,
    articlesInfoSuccessData: [],
    articlesInfoFail: false,
};

const articlesInfoReducer = (state = initialState, action) => {
    // console.log(action.payload)
    switch (action.type) {
        case ARTICLE_INFO_START:
            return {
                ...state,
                articlesInfoBegin: true,
            };
        case ARTICLE_INFO_SUCCESS:
            return {
                ...state,
                articlesInfoBegin: false,
                articlesInfoSuccess: true,
                articlesInfoSuccessData: action.payload,
                articlesInfoFail: false,
            };
        case ARTICLE_INFO_FAIL:
            return {
                ...state,
                articlesInfoBegin: false,
                articlesInfoSuccess: false,
                articlesInfoFail: true,
            };
        default:
            return state;
    }
};

export default articlesInfoReducer;
