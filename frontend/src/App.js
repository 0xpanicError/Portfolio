import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Career from "./pages/Career";
import Articles from "./pages/Articles";
import ArticlePage from "./pages/Articles/ArticlePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/career" element={<Career />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
}

export default App;
