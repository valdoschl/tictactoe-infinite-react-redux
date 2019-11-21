export const placeMark = (id) => {
    return {
        type: 'PLACE_MARK',
        payload: id
    }
}

export const expandBoard = () => {
    return {
        type: 'EXPAND_BOARD'
    }
}

export const checkWin = (id) => {
    return {
        type: 'CHECK_WIN',
        payload: id
    }
}