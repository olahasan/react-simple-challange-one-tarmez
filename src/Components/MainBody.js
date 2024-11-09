import React, { Fragment } from "react";
import "../Components/MainBody.css";
import Titles from "../Components/Titles";
import Buttons from "../Components/Buttons";

function MainBody() {
  return (
    <Fragment>
      <div className="Container">
        <div className="all">
          <div className="Titles">
            <Titles />
          </div>
          <div className="buttons">
            <Buttons />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MainBody;
