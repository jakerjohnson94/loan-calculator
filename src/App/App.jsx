import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import LoanInfoForm from '../components/LoanInfoForm/LoanInfoFormContent';
import ClientInfoForm from '../components/ClientInfoForm/ClientInfoFormContent'
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
       <Route exact path='/' component={LoanInfoForm}></Route>
        <Route path='/loanInfoForm' component={LoanInfoForm}></Route>
        <Route path='/clientInfoForm' component={ClientInfoForm}></Route>
 
      </Switch>
      </MuiThemeProvider>
    );
  }
}

export default App;
