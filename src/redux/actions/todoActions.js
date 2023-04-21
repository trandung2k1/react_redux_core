import axios from 'axios';
export function getTodos() {
    return function actionGetTodos(dispatch) {
        // console.log(dispatch);
        dispatch({ type: 'TEST' });
    };
}

export const getData = () => async (dispatch) => {
    try {
        dispatch({ type: 'TEST' });
    } catch (error) {
        console.log(error);
    }
};
