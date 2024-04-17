import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import App from "./App";
import Profile from "./Component/Profile";
import Train from "./Component/Train";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="train" element={<Train />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
