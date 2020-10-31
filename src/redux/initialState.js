import { defaultStyles } from "../constants"
import { storage } from "../core/utils"

const defaultState = {
    rowState: {},
    colState: {},
    dataState: {},
    stylesState: {},
    currentText: '',
    currentStyles: defaultStyles


}

const normasize = state => ({
    ...state,
    currentStyles: defaultStyles,
    currentText: ''
})

export const initialState = storage('excel-state')
    ? normasize(storage('excel-state'))
    : defaultState