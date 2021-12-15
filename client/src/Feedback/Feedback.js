import { useState } from "react";
import { useHistory } from "react-router-dom";

import { Button, Container, Paper, Typography } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";

import cssClasses from "./Feedback.module.css";

const FeedBack = () => {
  const [value1, setValue1] = useState();
  const [value4, setValue4] = useState();
  const [suggesation1, setSuggesation1] = useState();
  const [suggesation2, setSuggesation2] = useState();
  const history = useHistory();

  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };

  const handleChange4 = (event) => {
    setValue4(event.target.value);
  };

  const handleSuggesationChange1 = (event) => {
    setSuggesation1(event.target.value);
  };

  const handleSuggesationChange2 = (event) => {
    setSuggesation2(event.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const data = {
      platform: value1,
      featureRecomendation: suggesation1,
      removeFeature: suggesation2,
      message: value4,
    };

    fetch("/feedback", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={cssClasses.Feedback}>
      <Container>
        <Typography variant="h4" style={{ textAlign: "center" }}>
          We would love to hear from you.
        </Typography>
        <form noValidate autoComplete="off" onSubmit={formSubmitHandler}>
          <Paper elevation={2} className={cssClasses.Paper}>
            <p className={cssClasses.label}>
              1. Would you use a platform which connects financial service
              providers in a filtered way to you along with Social media feature
              in it? Think of zomato, but for finance industry &#38; LinkedIn
              but for finance industry merged into one.
            </p>
            <FormControl component="fieldset">
              <FormLabel component="legend"></FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={value1}
                onChange={handleChange1}
                required
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Paper>

          <Paper elevation={2} className={cssClasses.Paper}>
            <p className={cssClasses.label} >2. What features of this product you like the best?</p>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Would you like to suggest a feature"
              variant="outlined"
              value={suggesation1}
              onChange={handleSuggesationChange1}
            />
          </Paper>

          <Paper elevation={2} className={cssClasses.Paper}>
            <p className={cssClasses.label}>
              3. What do you think is the bad thing in this product and needs to
              be eliminated?
            </p>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Any Comments"
              variant="outlined"
              value={suggesation2}
              onChange={handleSuggesationChange2}
            />
          </Paper>

          <Paper elevation={2} className={cssClasses.Paper}>
            <p className={cssClasses.label}>
              4. What more improvements do you think we should do to make it
              better product?
            </p>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Any Comments"
              variant="outlined"
              value={value4}
              onChange={handleChange4}
            />
          </Paper>
          <div className={cssClasses.submitBtn}>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            style={{width: "150px"}}
          >
            Submit
          </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default FeedBack;
