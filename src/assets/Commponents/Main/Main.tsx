import { Route, Routes } from "react-router-dom"
import "./Main.css"
import Home from "../Home/Home"

const Main = () => {
  return (
   <Routes>
    <Route path="/home" element={<Home />}/>
    <Route />
    <Route />
    <Route />
   </Routes>
  )
}

export default Main