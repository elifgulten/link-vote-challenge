import React from "react";
import Layout from "./container/Layout";
import List from "./pages/LinkVote/List";
import Add from "./pages/LinkVote/Add";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/index.scss";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="list" element={<List />} />
          <Route path="add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
