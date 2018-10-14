import React, { Component } from 'react';
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

export default LoanInfoFormLayout;
