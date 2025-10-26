import { useState } from "react";
import DashBoard from "./pages/Dashboard";

function App() {
  const [modalOpen,setModalOpen] =useState(true);
  return (
    <DashBoard />
  )
    
}

export default App
