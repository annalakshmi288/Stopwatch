import React from "react";

const Btncontrol = (props) => {
  return (
    <div className="btn">
      {props.status === 0 ? (
        <button className="btn-start" onClick={props.handleStart}>
          Start
        </button>
      ) : (
        ""
      )}
      {props.status === 1 ? (
        <div>
          <button className="btn-stop" onClick={props.handleStop}>
            Stop
          </button>
          <button className="btn-reset" onClick={props.handleReset}>
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
      {props.status === 2 ? (
        <div>
          <button className="btn-resume" onClick={props.handleResume}>
            Resume
          </button>
          <button className="btn-reset" onClick={props.handleReset}>
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Btncontrol;
