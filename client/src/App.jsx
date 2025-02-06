import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import About from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

function App() {
  console.log("App is rendering"); // Debugging
  return <>
       <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<About/>} />

        <Route path="/login" element={<Login/>} />
       </Routes>
       </BrowserRouter>
    </>
}


export default App
