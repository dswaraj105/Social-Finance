import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 400,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectBox(props) {
  const classes = useStyles();

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Company</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={props.value}
          onChange={props.handleChange}
          label="Company"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'asianpaints'}>Asian Paints</MenuItem>
          <MenuItem value={'tatachemicals'}>Tata</MenuItem>
        </Select>
      </FormControl>
      
    </div>
  );
}
