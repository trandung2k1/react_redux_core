const initialState = {
    todos: [],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TEST':
            return state;
        default:
            return state;
    }
};
export default todoReducer;
