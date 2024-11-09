import React, { Fragment } from "react";
import Title from "../Components/Title";

function Titles() {
  const ThreeTitles = [
    {
      id: "1",
      titleOne: "20",
      titleTwo: "أكاديمية ترميز",
      para: "أكاديميه متحصصه لتعليم أنواع البرمجه المختلفه",
    },
    {
      id: "2",
      titleOne: "",
      titleTwo: "hello world",
      para: "this is hello world article ",
    },
    {
      id: "3",
      titleOne: "",
      titleTwo: "Post 3",
      para: "this is the Body of Post 3 ",
    },
  ];
  return (
    <Fragment>
      {ThreeTitles.map(function (ele) {
        return (
          <Title
            key={ele.id}
            titleOne={ele.titleOne}
            titleTwo={ele.titleTwo}
            para={ele.para}
          />
        );
      })}
      {/* <Title titleOne="20" titleTwo="أكاديمية ترميز" para="أكاديميه متحصصه لتعليم أنواع البرمجه المختلفه"/> */}
      {/* <Title titleTwo="hello world" para="this is hello world article " /> */}
      {/* <Title titleTwo="Post 3" para="this is the Body of Post 3 " /> */}
    </Fragment>
  );
}

export default Titles;
