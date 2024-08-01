/* eslint-disable no-unused-vars */
import "./App.css";
import Home from "./components/sites/Home";
import About from "./components/sites/About";
import Cursor from "./components/ui/Cursor";
import { Routes, Route } from "react-router-dom";
import TransitionSite from "./components/animations/TransitionSite";
import Projects from "./components/sites/Projects";

function App() {
  return (
    <>
      <Cursor />
      <Routes>
        <Route
          index
          path="/"
          element={
            <TransitionSite>
              <Home />
            </TransitionSite>
          }
        />
        <Route
          path="/about"
          element={
            <TransitionSite>
              <About />
            </TransitionSite>
          }
        />
        <Route
          path="/projects"
          element={
            <TransitionSite>
              <Projects />
            </TransitionSite>
          }
        />
      </Routes>
    </>
  );
}

export default App;
