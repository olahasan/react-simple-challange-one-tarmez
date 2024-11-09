import React from "react";
import "../Components/Title.css";
import "../App.css";

function Title({ titleOne, titleTwo, para }) {
  return (
    <div className="TitleComp">
      {titleOne && <h2 className="Title">{titleOne}</h2>}
      {titleTwo && <h4 className="Title">{titleTwo}</h4>}
      <hr />
      {para && <div className="Body">{para}</div>}
    </div>
  );
}

export default Title;
