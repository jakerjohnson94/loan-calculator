export const STORE_CLIENT_INFO = 'STORE_CLIENT_INFO'

export const storeClientInfo = (clientInfo) => {
    return {
        type: STORE_CLIENT_INFO,
        clientInfo: clientInfo
    }
}