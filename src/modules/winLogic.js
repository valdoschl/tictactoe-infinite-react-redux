const horizontal = (row,col,columnLength,rowLength,player,sequentialMarks,id,state) => {
    //check sequential marks on the right side
    let checkPos = id
    for(let i = col; i < columnLength;i++) {
        checkPos++
        player === state.board[checkPos].mark ? sequentialMarks++ : i = columnLength
    }
    //check sequential marks on the left side
    checkPos = id
    for(let i = col; i > 1;i--) {
        checkPos--
        player === state.board[checkPos].mark ? sequentialMarks++ : i = 0
    }
    if (sequentialMarks >= 5) {
        return true
    }
    return false
}
const vertical = (row,col,columnLength,rowLength,player,sequentialMarks,id,state) => {
    //check sequential marks above
    let checkPos = id
    for (let i = row; i > 1; i--) {
        checkPos -= columnLength
        player === state.board[checkPos].mark ? sequentialMarks++ : i = 0
    }
    
    //check sequential marks below
    checkPos = id
    for (let i = row; i < rowLength; i++) {
        checkPos += columnLength
        player === state.board[checkPos].mark ? sequentialMarks++ : i = rowLength
    }
    if (sequentialMarks >= 5) {
        return true;
    }
    return false
}
const downDiagonal = (row,col,columnLength,rowLength,player,sequentialMarks,id,state) => {
    //check sequential marks above
    let checkPos = id
    for (let i = row, j = col; i > 1 && j > 1; i--,j--)  {
        checkPos = checkPos-columnLength-1
        player === state.board[checkPos].mark ? sequentialMarks++ : i = 0
    }
    //check sequential marks below
    checkPos = id
    for (let i = row, j = col; i < rowLength && j < columnLength; i++,j++)  {
        checkPos = checkPos+columnLength+1
        player === state.board[checkPos].mark ? sequentialMarks++ : i = rowLength
    }
    
    if (sequentialMarks >= 5) {
        return true
    }
    return false
}
const upDiagonal = (row,col,columnLength,rowLength,player,sequentialMarks,id,state) => {
    
    //check sequential marks above
    let checkPos = id
    for (let i = row, j = col; i > 1 && j < columnLength; i--,j++)  {
        checkPos = checkPos-columnLength+1
        player === state.board[checkPos].mark ? sequentialMarks++ : i = 0
    }
    //check sequential marks below
    checkPos = id
    for (let i = row, j = col; i < rowLength && j > 1; i++,j--)  {
        checkPos = checkPos+columnLength-1
        player === state.board[checkPos].mark ? sequentialMarks++ : j = 0
    }

    if (sequentialMarks >= 5) {
        return true;
    }
    return false
}

export const winLogic = (id,state) => {
    let win = false
    
    let row = state.board[id].row
    let col = state.board[id].column
    const columnLength = state.columnLength
    const rowLength = state.rowLength
    const player = state.player
    let sequentialMarks = 1


    // check for winner
    if (horizontal(row,col,columnLength,rowLength,player,sequentialMarks,id,state) ||
    vertical(row,col,columnLength,rowLength,player,sequentialMarks,id,state) ||
    downDiagonal(row,col,columnLength,rowLength,player,sequentialMarks,id,state) ||
    upDiagonal(row,col,columnLength,rowLength,player,sequentialMarks,id,state)) { 
    win = true }


    return win
}