import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import LoanInfoFormLayout from '../components/LoanInfoForm/LoanInfoFormLayout';
import UserInfoFormLayout from '../components/UserInfoForm/UserInfoFormLayout'
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
      <Switch>
       <Route exact path='/' component={LoanInfoFormLayout}></Route>
        <Route path='/loanInfoForm' component={LoanInfoFormLayout}></Route>
        <Route path='/userInfoForm' component={UserInfoFormLayout}></Route>
 
      </Switch>
      </MuiThemeProvider>
    );
  }
}

export default App;
