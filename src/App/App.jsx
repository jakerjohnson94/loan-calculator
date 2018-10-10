import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import { Typography } from '@material-ui/core';
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
        <LoanInfoForm />
      </MuiThemeProvider>
    );
  }
}

export default App;
