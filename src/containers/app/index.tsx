import React, { useState } from "react";
import Home from "../../pages/home";
import History from "../../pages/history";
import Layout from "../../components/layout";

import { HistoryContext } from "../history";
import { HistoryType } from "../history/history.type";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Deck from "../deck";

const App: React.FC = () => {
  const [history, setHistory] = useState<HistoryType[]>([]);
  const value = { history, setHistory };

  return (
    <Router>
      <HistoryContext.Provider value={value}>
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/:player" exact component={Deck} />
          <Route path="/history" exact component={History} />
        </Layout>
      </HistoryContext.Provider>
    </Router>
  );
};

export default App;
