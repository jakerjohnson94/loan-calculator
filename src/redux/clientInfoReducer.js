import {STORE_CLIENT_INFO} from './clientFormActions'

const initialState={
  clientInfo:{
    name:'',
    email:'',
    phone:''
  }
  
}

export function clientInfoReducer(state = initialState, action) {
    switch (action.type) {
        case STORE_CLIENT_INFO:
            return {
                ...state,
                clientInfo: action.clientInfo
            }
        default:
            return state
    }
}