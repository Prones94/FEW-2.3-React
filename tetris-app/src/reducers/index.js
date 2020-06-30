import { combineReducers } from 'redux';
import gameReducer from './game-reducers';

const reducers = combineReducers({
    game: gameReducer
})

export default reducers
