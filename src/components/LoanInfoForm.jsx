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
import './LoanInfoForm.css';
class LoanInfoForm extends Component {
  state = {
    propertyAddress: '',
    loanAmnt: '',
    purchasePrice: '',
    buyer: '',
    seller: '',
    basicRate: 0
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = () => {
    //rates on every 1,000 dollars
    const under50Rate = 0.0035;
    const between50and100Rate = 0.003;
    const between100and500Rate = 0.002;
    const loanAmnt = this.state.loanAmnt;

    let basicRate = 0;
    if (loanAmnt <= 50000 && loanAmnt * under50Rate <= 100) basicRate = 100;
    else if (loanAmnt <= 50000 && loanAmnt * under50Rate > 100)
      basicRate = loanAmnt * under50Rate;

    if (loanAmnt > 50000 && loanAmnt <= 100000) {
      let difference = (loanAmnt - 50000) * between50and100Rate;
      basicRate = difference + 50000 * under50Rate;
    }

    if (loanAmnt > 100000 && loanAmnt <= 500000) {
      let difference = (loanAmnt - 100000) * between100and500Rate;
      basicRate =
        difference + 50000 * under50Rate + 50000 * between50and100Rate;
    }
    return this.setState({ basicRate: Math.ceil(basicRate) });
  };
  render() {
    return (
      <form className="loanInfoForm">
        <Grid container justify="center">
          <TextField
            className="formInput"
            id="propertyAdress"
            label="Property Address"
            value={this.state.propertyAddress}
            onChange={this.handleChange('propertyAddress')}
            fullWidth
          />

          <FormControl fullWidth className="formInput">
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

          <FormControl fullWidth className="formInput">
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
              className="formInput"
              id="buyer"
              label="Buyer Name (optional)"
              value={this.state.buyer}
              onChange={this.handleChange('buyer')}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              className="formInput"
              id="seller"
              label="Seller Name (optional)"
              value={this.state.seller}
              onChange={this.handleChange('seller')}
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Button onClick={this.handleSubmit}>Next</Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default LoanInfoForm;
