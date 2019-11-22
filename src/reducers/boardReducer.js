import {winLogic} from '../modules/winLogic'
import {expandBoard} from '../modules/expandBoard'

const initBoard = []
const boardSize = 5 //x^2
for (let i=1; i < boardSize+1; i++) {
    for (let k=1; k < boardSize+1; k++) {
        initBoard.push({row: i, column: k, mark: ''})
    }
}
const initState = {
    player: 'x',
    rowLength: boardSize,
    columnLength: boardSize,
    board: initBoard
}

const gameReducer = (state=initState, action) => {
    const id = action.payload
    switch(action.type){
        case 'PLACE_MARK':
            const board = [...state.board]
            board.splice(id,1,{...state.board[id], mark: state.player})
            return {
                ...state,
                board
            }
        case 'CHECK_WIN':
            if(winLogic(id,state)) {
                alert(state.player+' won') 
                state = initState
            } else {
                state = {
                    ...state,
                    player: state.player === 'x' ? 'o' : 'x'
                }
            }
            return state
        case 'EXPAND_BOARD':
            if(state !== initState) {
                const newState = expandBoard(id,state)
                return {
                    ...state,
                    rowLength: newState.rowLength,
                    columnLength: newState.columnLength,
                    board: newState.board
                }
            } else {
                return state
            }
            
        default:
            return state
    }
}
export default gameReducer