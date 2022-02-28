const initialState = false;

const darkmode = (state = initialState, action) => {
    switch (action.type) {
        case "DARK_MODE":
            state = !state;
            console.log(state);
            return state;
        default:
            return state;
    }
};

export default darkmode;