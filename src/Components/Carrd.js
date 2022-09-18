import React, { useState } from "react";
import "./Carrd.css";
import { VscArrowSmallLeft, VscArrowDown } from "react-icons/vsc";

const Carrd = ({ title, info }) => {
  const [conditional, setConditional] = useState(false);
  return (
    <>
      <div className="child-container">
        <div className="contain">
          <h4 className="title">{title}</h4>
          <button
            type="button"
            className="btn"
            onClick={() => setConditional(!conditional)}
          >
            {conditional ? (
              <VscArrowSmallLeft style={{ height: "20%" }} />
            ) : (
              <VscArrowDown style={{ height: "10%" }} />
            )}
          </button>
        </div>
        {conditional && <p className="info">{info}</p>}
      </div>
    </>
  );
};

export default Carrd;
