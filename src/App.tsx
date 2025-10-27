import { useState } from "react";
import DashBoard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";

function App() {
  const [modalOpen,setModalOpen] =useState(true);
  return (
    // <DashBoard />
    <SignUp />
  )
    
}

export default App
