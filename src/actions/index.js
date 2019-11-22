export const placeMark = (id) => {
    return {
        type: 'PLACE_MARK',
        payload: id
    }
}

export const expandBoard = (id) => {
    return {
        type: 'EXPAND_BOARD',
        payload: id
    }
}

export const checkWin = (id) => {
    return {
        type: 'CHECK_WIN',
        payload: id
    }
}