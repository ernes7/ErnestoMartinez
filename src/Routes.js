import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Button from "./components/Button";
import Layout from "./templates/Layout";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>

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
      </div>
    </Layout>
  );
}
