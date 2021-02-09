import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./containers/home";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Route path="/" exact component={Home} />
      </Layout>
    </Router>
  );
};

export default App;
