import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Career from "./pages/Career";
import Articles from "./pages/Articles";
import MerkleSumTreeArticle from "./pages/Articles/MerkleSumTree";
import FederatedProverNetworkArticle from "./pages/Articles/FederatedProverNetwork";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/career" element={<Career />} />
        <Route path="/articles" element={<Articles />} />
        <Route
          path="/articles/merklesumtree"
          element={<MerkleSumTreeArticle />}
        />
        <Route
          path="/articles/provernetworks"
          element={<FederatedProverNetworkArticle />}
        />
      </Routes>
    </Router>
  );
}

export default App;
