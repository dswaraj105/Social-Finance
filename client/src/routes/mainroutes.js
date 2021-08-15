import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Home from "../pages/Home";

const Profile = React.lazy(() => import("../pages/Profile"));
const PremiumServices = React.lazy(() => import("../pages/PremiumServices"));
const About = React.lazy(() => import("../pages/About"));
const SearchProple = React.lazy(() => import("../pages/SearchPeople"));
const Trending = React.lazy(() => import("../pages/Trending"));
const PeoplesProfile = React.lazy(() => import("../PeoplesProfile/PeoplesProfile"));

const MainRoutes = () => {
  return (
    <Fragment>
      <Route path="/app/home">
        <Home />
      </Route>
      <Route path="/app/profile">
        <Profile />
      </Route>
      <Route path="/app/peoplesprofile/:userid">
        <PeoplesProfile />
      </Route>
      <Route path="/app/premium">
        <PremiumServices />
      </Route>
      <Route path="/app/about">
        <About />
      </Route>
      <Route path="/app/search">
        <SearchProple />
      </Route>
      <Route path="/app/trending">
        <Trending />
      </Route>
    </Fragment>
  );
};

export default MainRoutes;