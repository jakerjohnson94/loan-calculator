import React, { Component } from 'react';
import {connect} from 'react-redux'

import {
    InputAdornment,
    TextField,
    InputLabel,
    Input,
    FormControl,
    Button,
    Grid
  } from '@material-ui/core';
  
  class UserInfoFormContent extends Component {
    state = { 
      userInfo:{
        name:'',
        email: '',
        phone:'',
      }
     }
    handleChange = name => event => {
      this.setState({
        userInfo: {
          ...this.state.userInfo,
          [name]: event.target.value
        }
      });
    };
    render() { 
      return ( 
        <form className="UserInfoFormContent">
        <Grid container justify="center">
          <TextField
            className="formInput"
            id="name"
            label="name"
            value={this.state.userInfo.name}
            onChange={this.handleChange('name')}
            fullWidth
          />
          <TextField
            className="formInput"
            id="email"
            label="email"
            type='email'
            value={this.state.userInfo.email}
            onChange={this.handleChange('email')}
            fullWidth
          />
        </Grid>
      </form>
       );
    }
  }
  const mapStateToProps = (state) => {
    return {
     loanData: state.loan,
     userInfo: state.client
    }
  }
  export default connect(mapStateToProps)(UserInfoFormContent)