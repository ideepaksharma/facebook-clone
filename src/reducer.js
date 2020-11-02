export const initialState = {
    user: null
};

export const actionTypes = {
    SET_USER: "SET_USER"
};

function reducer(state, action) {
    console.log(action);

    switch (action.type) {
        case actionTypes.SET_USER:
            return { ...state, user: action.user };
            break;

        default:
            return state;
    }
}

export default reducer;