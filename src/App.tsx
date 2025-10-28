import { useState } from "react";
import DashBoard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  // const [modalOpen,setModalOpen] =useState(true);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/dashboard" element={<DashBoard />}></Route>
      </Routes>
    </BrowserRouter>
    
  )
    
}

export default App
