import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MainPage from '../components/MainPage';
import ProductList from "../containers/ProductListContainer";

const Index = () => <h2>Index</h2>;
const About = () => <h2>Gallery</h2>;
const Users = () => <h2>Users</h2>;

const AppRouter = () => (
  <Router>
    <div>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={MainPage} />
      <Route path="/about/" component={ProductList} />
      <Route path="/users/" component={Users} /> */}
    </div>
  </Router>
);

export default AppRouter;