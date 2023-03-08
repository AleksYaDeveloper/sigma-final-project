import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, LayoutPage } from "./components";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LayoutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
