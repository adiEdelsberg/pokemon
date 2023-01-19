import React from 'react';
import './App.scss';
import { Route, Routes } from "react-router-dom"
import Login from "./Login/Login";
import Layout from "./Layout/Layout";
function App() {
  return (
      <Routes>
          <Route path="/main/*" element={<Layout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
      </Routes>
  );
}

export default App;
