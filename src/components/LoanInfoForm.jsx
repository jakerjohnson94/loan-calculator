import React, { Component } from 'react';
// import { connect } from 'react-redux';
import {
  InputAdornment,
  TextField,
  InputLabel,
  Input,
  FormControl,
  Button,
  Grid
} from '@material-ui/core';
class LoanInfoForm extends Component {
  state = {
    propertyAddress: '',
    loanAmnt: '',
    purchasePrice: '',
    buyer: '',
    seller: ''
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  render() {
    return (
      <form className="loanInfoForm" style={{ display: 'flex' }}>
        <Grid container alignContent="center">
          <TextField
            id="propertyAdress"
            label="Property Address"
            value={this.state.propertyAddress}
            onChange={this.handleChange('propertyAddress')}
            fullWidth
          />

          <FormControl fullWidth>
            <InputLabel htmlFor="loanAmnt">Loan Amount</InputLabel>
            <Input
              id="loanAmnt"
              type="number"
              value={this.state.loanAmnt}
              placeholder={'0.00'}
              onChange={this.handleChange('loanAmnt')}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel htmlFor="adornment-amount">Purchase Price</InputLabel>
            <Input
              id="purchasePrice"
              type="number"
              value={this.state.purchasePrice}
              placeholder={'0.00'}
              onChange={this.handleChange('purchasePrice')}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
          <Grid item xs={6}>
            <TextField
              id="buyer"
              label="Buyer Name (optional)"
              value={this.state.buyer}
              onChange={this.handleChange('buyer')}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="seller"
              label="Seller Name (optional)"
              value={this.state.seller}
              onChange={this.handleChange('seller')}
            />
          </Grid>
          <Grid item xs={12}>
            <Button>Next</Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default LoanInfoForm;
