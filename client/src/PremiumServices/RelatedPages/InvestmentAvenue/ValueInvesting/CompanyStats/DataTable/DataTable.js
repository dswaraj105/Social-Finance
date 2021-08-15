import Grid from "@material-ui/core/Grid";

import cssClasses from "./DataTable.module.css";
import Datarow from "./DataRow/Datarow";

const DataTable = (props) => {
  // console.log(props.values);
  const topics = Object.keys(props.values);
  

  const topicDisplay = topics.map((topic, index) => {
    return <Datarow key={index} topic={topic} valarr={props.values[topic]} />
  });

  return (
    <div className={cssClasses.box}>
      <Grid container>
        <Grid item className={cssClasses.topic} sm={12  }>
          {props.tablename  }
        </Grid>
        {topicDisplay}
      </Grid>
    </div>
  );
};

export default DataTable;
