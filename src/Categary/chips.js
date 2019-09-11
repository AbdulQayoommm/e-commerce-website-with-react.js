import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

export default function Chips(props) {
  const classes = useStyles();

  function handleDelete() {
    alert('You clicked the delete icon.');
  }

  function handleClick() {
    alert('You clicked the Chip.');
  }

  return (
    <div className={classes.root} style={{display: 'inline'}}>

      <Chip
        // avatar={<Avatar>MB</Avatar>}
        label={props.name}
        clickable
        className={classes.chip}
        color="primary"
        // onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
        onClick={props.onclick}
      />
      </div>
  );
}