import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import RedditIcon from '@material-ui/icons/Reddit';

import cssClasses from './Topic.module.css';

const Topic = (props) => {
  return (
    <Grid item xs={4}>
      <div className={cssClasses.topic} >
        <div className={cssClasses.name} >{props.name}</div>
        <Link to={props.linkto} style={{ textDecoration: "none" }}>
          <Button className={cssClasses.btn} variant="outlined" color="primary" endIcon={<RedditIcon>send</RedditIcon>}>
            Start Investing
          </Button>
        </Link>
      </div>
    </Grid>
  );
};

export default Topic;
