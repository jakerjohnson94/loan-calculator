import {STORE_USER_INFO} from './userFormActions'

const initialState={
  userInfo:{
    name:'',
    email:'',
    phone:''
  }
  
}

export function userInfoReducer(state = initialState, action) {
    switch (action.type) {
        case STORE_USER_INFO:
            return {
                ...state,
                userInfo: action.userInfo
            }
default:
            return state
    }
}