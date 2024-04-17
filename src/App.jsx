import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Navbar from "./components/general/navbar/Navbar"
import Footer from "./components/general/footer/Footer"
import Error404 from "./pages/error/Error404"


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
