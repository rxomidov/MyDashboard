import { all, call } from "redux-saga/effects";

//all sagas
// import { usersSagas } from "./usersSaga";
import {articlesSagas} from "./articleSaga";
import {articlesInfoSagas} from "./InfoSaga";
import {driversSagas} from "./driversSaga";


export default function* rootSaga() {
    // console.log("Hello from Saga!");
    yield all([
        call(articlesSagas),
        call(articlesInfoSagas),
        call(driversSagas),
    ]);
}