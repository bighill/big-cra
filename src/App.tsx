import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage, SubPage } from "./pages";
import { Nav, Text } from "./components";

function App() {
  return (
    <div className="App">
      <Text h="1">Empty app</Text>

      <BrowserRouter>
        <Nav />
        <hr />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="subpage/*" element={<SubPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
