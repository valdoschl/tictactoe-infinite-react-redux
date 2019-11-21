import {winLogic} from '../modules/winLogic'

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
            winLogic(id,state) ? (
                console.log('voitto')
            ) : (
                state = {
                    ...state,
                    player: state.player === 'x' ? 'o' : 'x'
                }
            )
            return state
        case 'EXPAND_BOARD':
            return state
        default:
            return state
    }
}
export default gameReducer