import {
    DRIVERS_START,
    DRIVERS_SUCCESS,
    DRIVERS_FAIL,
} from "../constants/constants";

export const getDriversStartAct = (data) => {
    return {
        type: DRIVERS_START,
        payload: data,
    };
};

export const getDriversSuccess = (data) => {
    return {
        type: DRIVERS_SUCCESS,
        payload: data,
    };
};

export const getDriversFail = () => {
    return {
        type: DRIVERS_FAIL,
    };
};