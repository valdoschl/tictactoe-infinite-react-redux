import gameReducer from './boardReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    game: gameReducer
})

export default allReducers