import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import './App.css';
import LoanInfoForm from '../components/LoanInfoForm';
const theme = createMuiTheme({
  palette: {
    type: 'light'
  },
  typography: {
    useNextVariants: true
  }
});
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Grid
          container
          className="mainGrid"
          direction="column"
          alignItems="center"
        >
          <Grid item xs={8}>
            <LoanInfoForm />
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
