import { takeLatest, put, call, all } from "redux-saga/effects";
import api from "../api/api";

import { getArticlesSuccess, getArticlesFail} from "../actions/articleActions";
import { ARTICLE_START } from "../constants/constants";

export function* getArticles({ payload }) {
    // console.log(payload)
    const token = localStorage.getItem("token");
    try {
        const response = yield api.request.get("/api/Article/Search/", {
            headers: {
                // Authorization: "Bearer " + token,
                "Content-Type": "application/json"
            },
        });
        // console.log(response.data);
        yield put(getArticlesSuccess(response.data));
    } catch (e) {
        yield put(getArticlesFail());
    }
}
export function* getArticlesStart() {
    yield takeLatest(ARTICLE_START, getArticles);
}

export function* articlesSagas() {
    yield all([call(getArticlesStart)]);
}
