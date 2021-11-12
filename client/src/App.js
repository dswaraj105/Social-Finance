import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import PageNotFound from "./pages/PageNotFound";
import Layout from "./components/Layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner/LoadingSpinner";
import MainRoutes from "./routes/mainroutes";
import LandingPage from "./pages/LandingPage";

import Signin from "./LoginSignup/Signin/Signin";
import Signup from "./LoginSignup/Signup/Signup";

function App() {
  return (
    <Suspense
      fallback={
        <div className="loading">
          <LoadingSpinner />
        </div>
      }
    >
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>

        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/app">
          <Layout>
            <MainRoutes />
          </Layout>
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;
