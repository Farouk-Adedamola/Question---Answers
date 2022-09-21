import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./data";
import Carrd from "./Components/Carrd";
import { VscArrowSmallLeft } from "react-icons/vsc";

function App() {
  const [getData, setGetData] = useState(data);

  // useEffect(() => {
  //   if (getData.length === 0) {
  //     document.querySelector(".body").style.background = "#fff";
  //   }
  // }, []);

  if (getData.length === 0) {
    document.querySelector(".body").style.background = "#fff";
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
  } else {
    document.querySelector(".body").style.background = "rgb(19, 23, 35)";
  }
  return (
    <>
      <div className="data-container">
        <div className="wrap-container">
          <h3 className="data-head-text">Questions And Answers About Login </h3>
          <div className="carrd">
            {getData.map((each) => {
              return <Carrd key={each.id} {...each} />;
            })}
          </div>
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
      </div>
    </>
  );
}

export default App;
