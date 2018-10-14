import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeFormInfo } from '../../redux/loanFormActions';
import {
  InputAdornment,
  TextField,
  InputLabel,
  Input,
  FormControl,
  Button,
  Grid
} from '@material-ui/core';
import { calculateBasicRate } from '../../functions';
import './LoanInfoForm.css';
class LoanInfoFormContent extends Component {
  state = {
    loanData: {
      propertyAddress: '',
      loanAmnt: 100000,
      purchasePrice: 0.0,
      buyer: '',
      seller: ''
    },
    basicRate: 0
  };
  handleChange = name => event => {
    this.setState({
      loanData: {
        ...this.state.loanData,
        [name]: event.target.value
      }
    });
  };

  handleSubmit = () => {
    //rates on every 1,000 dollars
    const under50Rate = 0.0035;
    const between50and100Rate = 0.003;
    const between100and500Rate = 0.002;
    const loanAmnt = this.state.loanData.loanAmnt;

    let basicRate;
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
    basicRate = Math.ceil(basicRate);
    // this.setState({
    //   basicRate: calculateBasicRate(this.props.loanData.loanAmnt)
    // });
    this.props.storeLoanInfo(this.state.loanData, basicRate);
  };
  render() {
    return (
      <form className="LoanInfoFormContent">
        <Grid container justify="center">
          <TextField
            className="formInput"
            id="propertyAdress"
            label="Property Address"
            value={this.state.loanData.propertyAddress}
            onChange={this.handleChange('propertyAddress')}
            fullWidth
          />

          <FormControl fullWidth className="formInput">
            <InputLabel htmlFor="loanAmnt">Loan Amount</InputLabel>
            <Input
              id="loanAmnt"
              type="number"
              value={this.state.loanData.loanAmnt}
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
              value={this.state.loanData.purchasePrice}
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
              value={this.state.loanData.buyer}
              onChange={this.handleChange('buyer')}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              className="formInput"
              id="seller"
              label="Seller Name (optional)"
              value={this.state.loanData.seller}
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
const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    storeLoanInfo: (loanData, basicRate) => {
      dispatch(storeFormInfo(loanData, basicRate));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoanInfoFormContent);
