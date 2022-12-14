import React from "react";
import { useState } from "react";
import "./MobileMenĂ¼.scss";

import Sort from "./Sort";
const MobileMenĂ¼ = () => {
  return (
    <div>
      <div className="row mobil-menĂ¼  justify-content-evenly">
        <h3>Browse Games</h3>
        <div className="col-6 ">
          <div className="  mobil-filter">
            <button>Filter</button>
            {/* <span className="close">X</span> */}
          </div>
        </div>
        <div className=" col-6">
          <Sort></Sort>
        </div>
      </div>
    </div>
  );
};

export default MobileMenĂ¼;
