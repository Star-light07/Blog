import Navbar from "./Navbar"
import Home from "./Home"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  )
}

export default App
