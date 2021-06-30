import { takeLatest, put, call, all } from "redux-saga/effects";
import api from "../api/api";

import { getDriversSuccess, getDriversFail} from "../actions/driverActions";
import { DRIVERS_START } from "../constants/constants";

export function* getDrivers({ payload }) {
    // console.log(payload)
    const token = localStorage.getItem("token");
    try {
        const response = yield api.request.get("/api/User/SearchDrivers/", {
            headers: {
                // Authorization: "Bearer " + token,
                "Content-Type": "application/json"
            },
        });
        // console.log(response.data);
        yield put(getDriversSuccess(response.data));
    } catch (e) {
        yield put(getDriversFail());
    }
}
export function* getDriversStart() {
    yield takeLatest(DRIVERS_START, getDrivers);
}

export function* driversSagas() {
    yield all([call(getDriversStart)]);
}
