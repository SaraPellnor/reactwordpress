import { BrowserRouter as Router, Route } from "react-router-dom"
import "./Main.css"
import Home from "../Home/Home"
import Test from "../Test/Test"
const Main = () => {
  return (
   <Router>
      <Route path="/home" element={<Home />}/>
      <Route path="/" element= {<Test />} />
      <Route />
      <Route />
   </Router>
  )
}

export default Main