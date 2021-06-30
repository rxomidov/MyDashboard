import {
} from "../constants/constants";

const initialState = {
    profileBegin: false,
    profileSuccess: false,
    profileSuccessData: [],
    profileFail: false,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
};

export default profileReducer;
