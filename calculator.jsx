import React from "react";
import { useState } from "react";
function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
  };
  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };
  return (
    <div style={{ textAlign: "center", color: "blue" }}>
      <h1>Calculator</h1>

      <input
        type="text"
        value={input}
        readOnly
        style={{ width: "190px", height: "40px", fontSize: "20px" }}
      />

      <div>
        <button className="btn" onClick={() => handleClick("7")}>
          {" "}
          7{" "}
        </button>
        <button className="btn" onClick={() => handleClick("8")}>
          {" "}
          8{" "}
        </button>
        <button className="btn" onClick={() => handleClick("9")}>
          {" "}
          9{" "}
        </button>
        <button className="btn" onClick={() => handleClick("/")}>
          {" "}
          /{" "}
        </button>
      </div>

      <div>
        <button className="btn" onClick={() => handleClick("4")}>
          {" "}
          4{" "}
        </button>
        <button className="btn" onClick={() => handleClick("5")}>
          {" "}
          5{" "}
        </button>
        <button className="btn" onClick={() => handleClick("6")}>
          {" "}
          6{" "}
        </button>
        <button className="btn" onClick={() => handleClick("*")}>
          {" "}
          *{" "}
        </button>
      </div>

      <div>
        <button className="btn" onClick={() => handleClick("1")}>
          {" "}
          1{" "}
        </button>
        <button className="btn" onClick={() => handleClick("2")}>
          {" "}
          2{" "}
        </button>
        <button className="btn" onClick={() => handleClick("3")}>
          {" "}
          3{" "}
        </button>
        <button className="btn" onClick={() => handleClick("-")}>
          {" "}
          -{" "}
        </button>
      </div>

      <div>
        <button className="btn" onClick={() => handleClick("0")}>
          {" "}
          0{" "}
        </button>
        <button className="btn" onClick={clearInput}>
          {" "}
          C{" "}
        </button>
        <button className="btn" onClick={calculate}>
          {" "}
          ={" "}
        </button>
        <button className="btn" onClick={() => handleClick("+")}>
          {" "}
          +{" "}
        </button>
      </div>
    </div>
  );
}
export default Calculator;