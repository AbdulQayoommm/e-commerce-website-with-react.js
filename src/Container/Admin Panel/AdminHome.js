import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { width } from '@material-ui/system';
import firebaseConfig from '../../Config/DataBase/firebase'

export default class OutlinedTextFields extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  addProduct() {
    firebaseConfig.firestore().collection("user").add(this.state)
  }
  render() {
    return (
      <div noValidate autoComplete="off" style={{ width: "30%", margin: "auto" }}>
        <TextField
          style={{ width: "99%" }}
          id="outlined-password-input"
          label={this.props.title}
          type={this.props.type}
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          onChange={this.props.onchange}
        />

        <label htmlFor="contained-button-file">

        </label>
      </div>
    )
  };
}