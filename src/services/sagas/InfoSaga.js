import { takeLatest, put, call, all } from "redux-saga/effects";
import api from "../api/api";

import {getArticlesInfoSuccess,getArticlesInfoFail} from "../actions/articleInfoActions";
import { ARTICLE_INFO_START } from "../constants/constants";

export function* getArticlesInfo({ payload }) {
    // console.log(payload)
    // const token = localStorage.getItem("token");
    try {
        const response = yield api.request.get(`/api/Article/Info?Article_Id=${payload.id}&Result=${payload.result}`, {
            headers: {
                // Authorization: "Bearer " + token,
                "Content-Type": "application/json"
            },
        });
        // console.log(response.data);
        yield put(getArticlesInfoSuccess(response.data));
    } catch (e) {
        yield put(getArticlesInfoFail());
    }
}
export function* getArticlesInfoStart() {
    yield takeLatest(ARTICLE_INFO_START, getArticlesInfo);
}

export function* articlesInfoSagas() {
    yield all([call(getArticlesInfoStart)]);
}
