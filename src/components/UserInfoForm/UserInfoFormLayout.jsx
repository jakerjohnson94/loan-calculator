import React, { Component } from 'react';
import {Grid} from '@material-ui/core'
import {connect} from 'react-redux'
import UserInfoFormContent from './UserInfoFormContent'

class UserInfoLayout extends Component {
  state = {  }
  render() { 
    return (
        <UserInfoFormContent/>
     );
  }
}





 
const mapStateToProps = (state) => {
  return {
   loanData: state.loan,
   userInfo: state.client
  }
}
export default connect(mapStateToProps)(UserInfoLayout);