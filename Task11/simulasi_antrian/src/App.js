import "./App.css";
import React, { useState } from "react";

function App() {
  const [antrian, setAntrian] = useState([]);
  const [userInput, setUserInput] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    setAntrian((oldArray) => [...oldArray, userInput]);
    setUserInput("");
  };
  const deleted = () => {
    // let items = antrian;
    // if (items.length > 0) {
    //   const lastIdx = items.length - 1;
    //   setAntrian(items.filter((_, idx) => idx != lastIdx));
    // }
    setAntrian(antrian.slice(1));
  };
  return (
    <div className='App'>
      <div className='btn-style'>
        <input
          type='text'
          autoFocus
          style={{ width: "300px" }}
          value={userInput}
          required
          onChange={(e) => setUserInput(e.target.value)}
        />
      </div>
      <div className='btn-style'>
        <button onClick={handleClick}>Antrikan</button>
        <button onClick={deleted}>Majukan</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}>
        {antrian.length === 0
          ? "list kosong"
          : antrian?.map((item, index) => <div key={index}>{`${item}=>`}</div>)}
      </div>
    </div>
  );
}

export default App;
