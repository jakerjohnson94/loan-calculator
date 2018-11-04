import React, { Component } from 'react';
import {connect} from 'react-redux'
import {storeClientInfo} from '../../redux/clientFormActions'

import {
    InputAdornment,
    TextField,
    InputLabel,
    Input,
    FormControl,
    Button,
    Grid
  } from '@material-ui/core';
  
  class ClientInfoFormContent extends Component {
    state = { 
      clientInfo:{
        name:'',
        email: '',
        phone:'',
      }
     }
    handleChange = name => event => {
      this.setState({
        clientInfo: {
          ...this.state.clientInfo,
          [name]: event.target.value
        }
      });
      console.log(this.state.clientInfo)
    };
    handleSubmit = (event)=>{
      event.preventDefault()
      this.props.storeClientInfo(this.state.clientInfo)
    }
    render() { 
      return ( 
        <form className="ClientInfoFormContent">
        <Grid container justify="center">
          <TextField
            className="formInput"
            id="name"
            label="name"
            value={this.state.clientInfo.name}
            onChange={this.handleChange('name')}
            fullWidth
          />
          <TextField
            className="formInput"
            id="email"
            label="email"
            type='email'
            value={this.state.clientInfo.email}
            onChange={this.handleChange('email')}
            fullWidth
          />
          <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
        </Grid>
      </form>
       );
    }
  }
  const mapStateToProps = (state) => {
    return {
     loanData: state.loan,
     clientInfo: state.client
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      storeClientInfo: (clientInfo) => {
        dispatch(storeClientInfo(clientInfo))
      }
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(ClientInfoFormContent)