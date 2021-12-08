import { combineReducers } from 'redux';

import movieReducer from './movieReducer';

import reducer from './businessLogic';

const rootReducer = (combineReducers({
    movie: movieReducer,
    favorites: reducer,
}))

export default rootReducer;