import {
  STORE_FORM_INFO
} from './loanFormActions'

const initialState = {
  loanData: {
    propertyAddress: '',
    loanAmnt: 0,
    purchasePrice: 0,
    buyer: '',
    seller: '',

  }
}

export function loanReducer(state = initialState, action) {
  switch (action.type) {
    case STORE_FORM_INFO:
      return {
        ...state,
        loanData: action.loanData,
        basicRate: action.basicRate
      }
    default:
      return state

  }
}