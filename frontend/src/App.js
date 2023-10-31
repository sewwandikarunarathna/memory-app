import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route, Switch } from "react-router-dom";
import Addmemo from "./components/Addmemo";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/addmemo" Component={Addmemo} />
      </Routes>
    </>
  );
}

export default App;
