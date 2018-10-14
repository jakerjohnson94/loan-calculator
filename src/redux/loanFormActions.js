export const STORE_FORM_INFO = 'STORE_FORM_INFO'

export const storeFormInfo = (loanData, basicRate)=>{
 return {
    type: STORE_FORM_INFO,
    loanData: loanData,
    basicRate: basicRate
  };
}
