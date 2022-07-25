import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SIngleResult from "./pages/SIngleResult";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SIngleResult />}></Route>
      </Routes>
    </div>
  );
};

export default App;
