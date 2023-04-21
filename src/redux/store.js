import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from './logger';
import rootReducer from './rootReducer';
const store = createStore(logger(rootReducer), composeWithDevTools(applyMiddleware(thunk)));

export default store;
