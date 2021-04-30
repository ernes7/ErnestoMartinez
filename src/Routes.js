import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Button from "./components/Button";
import Layout from "./templates/Layout";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/reviews">
          <Reviews />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

function About() {
  return <Layout title="About Me" />;
}

function NotFound() {
  return (
    <Layout title="404">
      <h3>Page not Found</h3>
      <div>
        <Link to={"/"}>
          <Button>Home</Button>
        </Link>
        <Link to={"/reviews"}>
          <Button>Book Reviews</Button>
        </Link>
      </div>
    </Layout>
  );
}
