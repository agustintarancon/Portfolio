import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/home/Home"
import Navbar from "./components/navbar/Navbar"
import Error404 from "../pages/error/Error404"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" Component={Home}/>
      <Route path="*" Component={Error404}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
