
const initialState = {
    authBegin: false,
    authSuccess: false,
    authSuccessData: "",
    authFail: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default authReducer;