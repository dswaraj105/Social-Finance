import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import Typography from "@material-ui/core/Typography";

import cssClasses from "./Course.module.css";

const Course = (props) => {
  return (
    <Paper
      elevation={3}
      className={cssClasses.Course}
      onClick={props.courseClicked.bind(null, props.title, props.index)}
    >
      <Typography variant="h4">
        {props.index}. {props.title}
      </Typography>
      <IconButton>
        <DoubleArrowIcon />
      </IconButton>
    </Paper>
  );
};

export default Course;
