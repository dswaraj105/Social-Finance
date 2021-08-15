import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import LoginSignup from "./pages/LoginSignup";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./components/Layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner/LoadingSpinner";
import MainRoutes from "./routes/mainroutes";
import PremiumServices from "./routes/premiumServices";

function App() {
  return (
    <Suspense
      fallback={
        <div className="loading">
          {" "}
          <LoadingSpinner />{" "}
        </div>
      }
    >
      <Switch>
        <Route path="/" exact>
          <Redirect to="/loginsignup" />
        </Route>
        <Route path="/loginsignup">
          <LoginSignup />
        </Route>

        <Route path="/app">
          <Layout>
            <MainRoutes />
          </Layout>
        </Route>

        <Route path="/service">
          <Layout>
            <PremiumServices />
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
