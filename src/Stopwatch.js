import "./Stopwatch.css";
import { useState } from "react";
import Btncontrol from "./component/btncontrol";
import Timer from "./component/timer";

function Stopwatch() {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0, ms: 0 });
  const [status, setStatus] = useState(0);
  const [interv, setInterv] = useState();

  const handleStart = () => {
    run();
    setInterv(setInterval(run, 10));
    setStatus(1);
  };

  let updateH = time.h,
    updateM = time.m,
    updateS = time.s,
    updateMS = time.ms;
  function run() {
    updateMS++;
    if (updateMS === 100) {
      updateS++;
      updateMS = 0;
    }
    if (updateS === 60) {
      updateM++;
      updateS = 0;
    }
    if (updateM === 60) {
      updateH++;
      updateM = 0;
    }
    return setTime({ h: updateH, m: updateM, s: updateS, ms: updateMS });
  }

  const handleStop = () => {
    setStatus(2);
    clearInterval(interv);
  };

  const handleReset = () => {
    setStatus(0);
    clearInterval(interv);
    setTime({ h: 0, m: 0, s: 0, ms: 0 });
  };

  const handleResume = () => {
    handleStart();
  };

  return (
    <div className="stopwatch-app">
      <h1>Stopwatch</h1>

      <Timer time={time} />
      <Btncontrol
        status={status}
        handleStop={handleStop}
        handleStart={handleStart}
        handleResume={handleResume}
        handleReset={handleReset}
      />
    </div>
  );
}

export default Stopwatch;
