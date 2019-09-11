import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const TAX_RATE = 0.07;

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(5),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}));


export default function SpanningTable(props) {
  console.log(props)
  const classes = useStyles();

  return (
    <div>
      <div style={{ width: "90%", height: "80px", margin: "auto", marginTop: "30px", textAlign: "center", borderRight: "1px solid", borderLeft: "1px solid" }}>

        <TableRow key={"row.desc"} style={{ textAlign: "center" }}>
          <TableCell > <img src={props.img} widht="200px" height="80px" /> </TableCell>
          <TableCell align="left" style={{ width: "250px" }}>{props.name}</TableCell>
          <TableCell align="left" style={{ width: "250px" }}>{props.qua}</TableCell>
          <TableCell align="left" style={{ width: "250px" }}>{props.about}</TableCell>
          <TableCell align="left" style={{ width: "250px" }}>{props.about * props.qua} PKR</TableCell>
        </TableRow>
      </div>
    </div>
  );
}