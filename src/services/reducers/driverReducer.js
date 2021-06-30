import {
    DRIVERS_START,
    DRIVERS_SUCCESS,
    DRIVERS_FAIL,
} from "../constants/constants";

const initialState = {
    driversBegin: false,
    driversSuccess: false,
    driversSuccessData: [],
    driversFail: false,
};

const driversReducer = (state = initialState, action) => {
    // console.log(action.payload)
    switch (action.type) {
        case DRIVERS_START:
            return {
                ...state,
                articlesBegin: true,
            };
        case DRIVERS_SUCCESS:
            return {
                ...state,
                driversBegin: false,
                driversSuccess: true,
                driversSuccessData: action.payload,
                driversFail: false,
            };
        case DRIVERS_FAIL:
            return {
                ...state,
                driversBegin: false,
                driversSuccess: false,
                driversFail: true,
            };
        default:
            return state;
    }
};

export default driversReducer;
