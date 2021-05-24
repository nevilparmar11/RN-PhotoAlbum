import {createStore, applyMiddleware} from 'redux';
import {albumReducer} from '../reducers/albumReducer';
import thunk from 'redux-thunk';

export const store = createStore(albumReducer, applyMiddleware(thunk));
