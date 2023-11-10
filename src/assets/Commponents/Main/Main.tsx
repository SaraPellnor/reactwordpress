import { Routes, Route } from "react-router-dom";

import "./Main.css";
import Home from "../Home/Home";
import Test from "../Test/Test";

const Main = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Test />} />
      <Route />
      <Route />
    </Routes>
  );
};

export default Main;
