import { Button } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import cssClasses from "./Nav.module.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const BondsNav = (props) => {
  const classes = useStyles();

  return (
    <>
      <div className={cssClasses.Nav}>
        <FormControl
          className={[classes.formControl, cssClasses.select].join(" ")}
        >
          <InputLabel id="demo-simple-select-label">Property Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.type}
            onChange={props.handleChange}
          >
            <MenuItem value="residential">Recidential</MenuItem>
            <MenuItem value="commercial">Commercial</MenuItem>
          </Select>
        </FormControl>

        <Button
          style={
            props.mode === "sale" ? { borderBottom: "4px solid #2BAE66" } : {}
          }
          onClick={props.modeChange.bind(null, "sale")}
          className={cssClasses.navbtn}
        >
          Sale
        </Button>
        <Button
          style={
            props.mode === "rent" ? { borderBottom: "4px solid #2BAE66" } : {}
          }
          onClick={props.modeChange.bind(null, "rent")}
          className={cssClasses.navbtn}
        >
          Rent
        </Button>
        {/* <Button
          style={
            props.mode === "pg" ? { borderBottom: "4px solid #2BAE66" } : {}
          }
          onClick={props.modeChange.bind(null, "pg")}
          className={cssClasses.navbtn}
        >
          PG
        </Button> */}
      </div>
      <Divider className={cssClasses.line} />
    </>
  );
};

export default BondsNav;
