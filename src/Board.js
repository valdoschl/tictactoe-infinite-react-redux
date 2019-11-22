import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {placeMark, expandBoard, checkWin} from './actions'


function Board() {
    const dispatch = useDispatch()
    const player = useSelector(state => state.game.player)
    const rowLength = useSelector(state => state.game.rowLength)
    const columnLength = useSelector(state => state.game.columnLength)
    const board = useSelector(state => state.game.board)

    let table = []
    for (let i=0; i< rowLength; i++) {
        let tableCols = []
        for (let k=0; k<columnLength; k++) {
            tableCols.push(<td onClick={() => handleClick(k+i*columnLength)} key={k}>{board[k+i*columnLength].mark}</td>)
        }
        table.push(<tr key={i}>{tableCols}</tr>)
    }

    const handleClick = (id) => {
        if (board[id].mark === '') {
            dispatch(placeMark(id))
            dispatch(checkWin(id))
            dispatch(expandBoard(id))
        }
    }

    return (
        <table>
            <tbody>
                {table}
            </tbody>
        </table>
    )
}

export default Board;
