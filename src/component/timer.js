import React from "react";

const Timer = (props) => {
  return (
    <>
      <h2>
        <span>{props.time.h > 9 ? props.time.h : "0" + props.time.h}</span>:
        <span>{props.time.m > 9 ? props.time.m : "0" + props.time.m}</span>:
        <span>{props.time.s > 9 ? props.time.s : "0" + props.time.s}</span>:
        <span>{props.time.ms > 9 ? props.time.ms : "0" + props.time.ms}</span>
      </h2>
    </>
  );
};

export default Timer;
