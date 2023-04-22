import { combineReducers } from 'redux';
import todoReducer from './reducers/todoReducer';
const rootReducer = combineReducers({
    todosState: todoReducer,
});

export default rootReducer;
