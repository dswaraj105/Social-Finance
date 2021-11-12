import { Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

import cssClasses from "./Contactus.module.css";


const ContactUs = () => {

  return (
    <div className={cssClasses.contactus}>
      <h5 className={cssClasses.header}>Contact Us</h5>
      <Paper elevation={2} style={{backgroundColor: "#fff", width: '340px'}}>
        <form className={cssClasses.form} noValidate autoComplete="off">
          <TextField className={cssClasses.input} id="standard-basic" label="Name" />
          <TextField className={cssClasses.input} id="standard-basic" label="Email" />
          <TextField className={cssClasses.input} id="standard-basic" label="Phone Number" />
          <TextField className={cssClasses.input} id="standard-basic" label="Message" />
          <Button className={cssClasses.submitbtn} type='submit' variant="contained" color="primary">Submit</Button>
        </form>
      </Paper>
    </div>
  );
};

export default ContactUs;
