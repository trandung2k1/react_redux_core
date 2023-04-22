import axios from 'axios';
import { toast } from 'react-toastify';
import * as types from '../constants';

export function getTodos() {
    async function actionGetTodos(dispatch) {
        try {
            const res = await axios.get('https://api-todos-0ylw.onrender.com/api/v1/todos');
            dispatch({ type: types.GET_ALL_TODO, payload: res.data });
            toast.success('Get all todo successfully');
        } catch (error) {
            console.log(error.message);
        }
    }
    return actionGetTodos;
}

export const getData = () => async (dispatch) => {
    try {
        const res = await axios.get('https://api-todos-0ylw.onrender.com/api/v1/todos');
        dispatch({ type: types.GET_ALL_TODO, payload: res.data });
    } catch (error) {
        console.log(error);
    }
};

export const addTodo = (todo) => async (dispatch) => {
    try {
        const response = await axios.post('https://api-todos-0ylw.onrender.com/api/v1/todos', {
            ...todo,
        });
        if (response.data) dispatch({ type: types.ADD_TODO, payload: response.data });
        toast.success('Add todo successfully');
    } catch (error) {
        console.log(error);
        toast.error('Add todo error');
    }
};
export const deleteTodo = (id) => async (dispatch) => {
    try {
        await axios.delete(`https://api-todos-0ylw.onrender.com/api/v1/todos/${id}`);
        dispatch({ type: types.DELETE_TODO, payload: id });
        toast.success('Delete todo successfully');
    } catch (error) {
        console.log(error);
        toast.error('Delete todo error');
    }
};

export const markCompleted = (id) => async (dispatch) => {
    try {
        const findTodoResponse = await axios.get(
            `https://api-todos-0ylw.onrender.com/api/v1/todos/${id}`,
        );
        const todoItem = findTodoResponse.data;
        todoItem.completed = !todoItem.completed;
        const res = await axios.put(`https://api-todos-0ylw.onrender.com/api/v1/todos/${id}`, todoItem);
        dispatch({ type: types.MARK_COMPLETED, payload: res.data });
        toast.success('Update status todo successfully');
    } catch (error) {
        console.log(error);
        toast.success('Update status todo error');
    }
};
