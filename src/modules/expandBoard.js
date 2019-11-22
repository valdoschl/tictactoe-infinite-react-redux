export const expandBoard = (id,state) => {
    let row = state.board[id].row
    let col = state.board[id].column
    let columnLength = state.columnLength
    let rowLength = state.rowLength
    let board = [...state.board]

    let distanceFromTop = row - 1
    let distanceFromBottom =  rowLength - row
    let distanceFromLeft = col - 1
    let distanceFromRight = columnLength - col

    // EXPAND TOP
    if (distanceFromTop < 3) {
      for(distanceFromTop; distanceFromTop < 3; distanceFromTop++) {
        rowLength++
        board = board.map(cell => {
          return {
            row: cell.row+1,
            column: cell.column,
            mark: cell.mark
          }
        })
        for (let k=columnLength; k > 0; k--) {
          board.unshift({row: 1, column: k, mark: ''})
        }
      }
    }
    // EXPAND BOTTOM
    if (distanceFromBottom < 3) {
      for(distanceFromBottom; distanceFromBottom < 3; distanceFromBottom++) {
        rowLength++
        for (let k=1; k < columnLength+1; k++) {
          board.push({row: rowLength, column: k, mark: ''})
        }
      }
    }
    // EXPAND LEFT
    if (distanceFromLeft < 3) {
      for(distanceFromLeft; distanceFromLeft < 3; distanceFromLeft++) {
        columnLength++
        board = board.map(cell => {
          return {
            row: cell.row,
            column: cell.column+1,
            mark: cell.mark
          }
        })
        for (let k=0; k<rowLength;k++) {
          board.splice(k*columnLength,0,{row: k+1, column: 1, mark: ''})
        }
      }
    }
    // EXPAND RIGHT
    if (distanceFromRight < 3) {
      for(distanceFromRight; distanceFromRight < 3; distanceFromRight++) {
        columnLength++
        for (let k=1; k<rowLength+1;k++) {
          board.splice(k*columnLength-1,0,{row: k, column: columnLength, mark: ''})
        }
      }
    }
    return {
        board,
        rowLength,
        columnLength
    }
  }