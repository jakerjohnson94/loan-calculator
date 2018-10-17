export const STORE_USER_INFO = 'STORE_USER_INFO'

export const storeUserInfo = (userInfo) => {
    return {
        type: STORE_USER_INFO,
        userInfo: userInfo
    }
}