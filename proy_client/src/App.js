import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import miroutes from "./config/routes";
import "./App.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {miroutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component />
              </route.layout>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
