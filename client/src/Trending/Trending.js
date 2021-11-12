import Typography from "@material-ui/core/Typography";

import Posts from "./Containers/Posts/Posts";
import StarProfiles from "../components/StarProfiles/StarProfiles";
import { Container, Grid } from "@material-ui/core";

const Trending = () => {
  return (
    <Container>
      <Typography
        variant="h3"
        style={{ color: "#086cdf", textAlign: "center" }}
        component="h1"
        gutterBottom
      >
        Trending
      </Typography>
      <Grid container spacing={4}>
        <Grid item md={3}></Grid>
        <Grid item sm={6}>
          <Posts />
        </Grid>
        <Grid item sm={3}>
          <StarProfiles />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Trending;
