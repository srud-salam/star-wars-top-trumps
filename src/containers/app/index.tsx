import React, { useState } from "react";
import Home from "../../pages/home";
import Layout from "../../components/layout";

import { HistoryContext } from "../history";
import { HistoryType } from "../history/history.type";
import { HashRouter as Router, Route } from "react-router-dom";

const App: React.FC = () => {
  const [history, setHistory] = useState<HistoryType[]>([]);
  const value = { history, setHistory };

  return (
    <Router>
      <HistoryContext.Provider value={value}>
        <Layout>
          <Route path="/" exact component={Home} />
        </Layout>
      </HistoryContext.Provider>
    </Router>
  );
};

export default App;
