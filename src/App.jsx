import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "../pages/home/Home"
import Footer from "./components/footer/Footer"
import "./App.css"

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" Component={Home}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
