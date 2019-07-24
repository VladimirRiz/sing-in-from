import React, { Component } from 'react';
import Form from './Form'
import Preview from './Preview';
import { amber, green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

class FormView extends Component {

  state = {
    login: '',
    password: '',
    open: false,
    message: '',
  }

  onLoginChange = e => {
    this.setState({
      login: e.target.value
    })
  }

  onPasswordChange = e => {
    this.setState({
      password: e.target.value
    })
  }

  handleClick = () => {
    this.setState({
      open: true
    });
  }

  validateFields = () => {
    if (this.state.login === 'Ariel' && this.state.password === 'Learning React') {
      this.setState({
        message: 'Success'
      })
    } else {
      this.setState({
        message: 'Wrong'
      })
    }
    console.log(this.state.message)
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  onSubmitBtnClick = () => {
    this.validateFields();
    this.handleClick();
  }

  //Styles for Inputs
  useStyle = makeStyles(theme => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    login: {
      marginTop: theme.spacing(2),
    },
    margin: {
      margin: theme.spacing(1),
    },
    success: {
      backgroundColor: green[600],
    },
    error: {
      backgroundColor: theme.palette.error.dark,
    },
    info: {
      backgroundColor: theme.palette.primary.main,
    },
    warning: {
      backgroundColor: amber[700],
    },
    icon: {
      fontSize: 20,
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing(1),
    },
    message: {
      display: 'flex',
      alignItems: 'center',
    },
  }))

  //Put function in the const
  StyleUi = () => {
    const classes = this.useStyle()
    return classes;
  }

  render() {
    return (
      <div>
        <Form
          login={this.state.login}
          password={this.state.password}
          onLoginChange={this.onLoginChange}
          onPasswordChange={this.onPasswordChange}
          snackbarOpen={this.state.open}
          handleClick={this.onSubmitBtnClick}
          handleClose={this.handleClose}
          message={this.state.message}
        />
        <Preview
          login={this.state.login}
          password={this.state.password}
          message={this.state.message}
        />
      </div>
    );
  }
}


export default FormView;

