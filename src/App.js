import React, { useState } from "react";

import "./App.css";

function App() {
  const [n, setN] = useState(0);
  const [result, setResult] = useState(true);

  const getResult = (e) => {
    e.preventDefault();
    let v = n;
    while (v % 2 === 0) {
      v = v / 2;
      console.log(v);
    }
    setResult(((v + 1) / 2) % 2 === 0); // ? 1 : -1
  };

  return (
    <div className="App">
      <h1>Funtion B11 문제 계산기</h1>
      <form className="input-wraper">
        <p className="info-text">f(n)의 n값을 입력하세요:</p>
        <input
          type="number"
          id="num-input"
          onChange={(e) => {
            setN(e.target.value);
          }}
        />
        <button type="submit" onClick={getResult}>
          Submit
        </button>
      </form>
      <p>Result: {result ? 1 : -1}</p>
    </div>
  );
}

export default App;

// f(2n) = f(n), f(2n- 1) = (-1)^n
