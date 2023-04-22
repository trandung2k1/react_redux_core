import * as types from '../constants';
const initialState = {
    todos: [],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_TODO:
            return {
                ...state,
                todos: action.payload,
            };
        case types.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case types.DELETE_TODO:
            const filterTodo = state.todos.filter((todo) => todo._id !== action.payload);
            return {
                ...state,
                todos: filterTodo,
            };
        case types.MARK_COMPLETED:
            const updateTodos = state.todos.map((todo) => {
                if (todo._id === action.payload._id) {
                    // todo = { ...action.payload };
                    todo = {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            });
            return {
                ...state,
                todos: updateTodos,
            };
        default:
            return state;
    }
};
export default todoReducer;
