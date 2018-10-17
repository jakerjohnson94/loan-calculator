import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Grid } from '@material-ui/core';
import LoanInfoFormContent from './LoanInfoFormContent';
class LoanInfoFormLayout extends Component {
  render() {
    return (
      <Grid
        container
        className="mainGrid"
        direction="column"
        alignItems="center"
      >
        <Grid item xs={8}>
          <LoanInfoFormContent />
        </Grid>
      </Grid>
    );
  }
}
const mapStateToProps = (state) => {
  return {
   loanData: state.loan,
   userInfo: state.client
  }
}

export default connect(mapStateToProps)(LoanInfoFormLayout);
