import Typography from "@material-ui/core/Typography";

import Posts from "./Containers/Posts/Posts";
import BestCreators from "./Components/PeopleToFollow/BestCreators";
import { Container, Grid } from "@material-ui/core";

const Trending = () => {
  return (
    <Container>
      <Typography
        variant="h3"
        style={{ color: "#2BAE66", textAlign: "center" }}
        component="h1"
        gutterBottom
      >
        Trending Posts
      </Typography>
      <Grid container spacing={4}>
        <Grid item md={3}></Grid>
        <Grid item sm={6}>
          <Posts />
        </Grid>
        <Grid item sm={3}>
          <BestCreators />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Trending;
