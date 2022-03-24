import "./App.css";
import React from "react";
import Sidebar from "./components/Sidebar";
import Routers from "./Routers";

function App() {
  return (
    <div>
      <Sidebar />
      <div className='main'>
        <Routers />
      </div>
    </div>
  );
}

export default App;
