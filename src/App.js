import React, { useState } from "react";
import "./App.css";
import data from "./data";
import Carrd from "./Components/Carrd";
import { VscArrowSmallLeft } from "react-icons/vsc";

function App() {
  const [getData, setGetData] = useState(data);

  if (getData.length === 0) {
    return (
      <div>
        <div className="btn-cont">
          <button
            type="button"
            className="button2"
            onClick={() => setGetData(data)}
          >
            Get Questions and Answers
          </button>
          <VscArrowSmallLeft style={{ color: "#fff" }} />
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="data-container">
        <h3 className="data-head-text">Questions And Answers About Login </h3>
        {getData.map((each) => {
          return <Carrd key={each.id} {...each} />;
        })}
        <div className="btn-cont">
          <button
            type="button"
            className="button"
            onClick={() => setGetData([])}
          >
            Clear all questions
          </button>
          <VscArrowSmallLeft className="Arrow" />
        </div>
      </div>
    </>
  );
}

export default App;
