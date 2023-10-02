import { useState } from "react";
import Display from "./components/Display";
import "./Counter.css";
import ButtonsPanel from "./components/ButtonsPanel";
import Clock from "./components/Clock";
import Step from "./components/Step";

// const counter = Math.floor(Math.random() * 10);

const Counter = (props) => {
  const [counter, setCounter] = useState(props.counterInitValue);
  const [stepValue, setStepValue] = useState(1);

  const updateCounter = (action) => {
    let counterValue;
    if (action === "add") {
      counterValue = counter + 1;
    } else if (action === "reset") {
      counterValue = props.counterInitValue;
    } else if (action === "zwieksz") {
      counterValue = counter + stepValue;
    } else {
      counterValue = 0;
    }
    setCounter(counterValue);
  };

  return (
    <div className="counter">
      <Display counter={counter} />
      <ButtonsPanel updateCounter={updateCounter} />

      <Step setStepValue={setStepValue} />

      {/* {showClock ? (
        <Clock setShowClock={setShowClock} />
      ) : (
        <p className="clockControl" onClick={() => setShowClock(true)}>
          pokaż zegar
        </p>
      )} */}
    </div>
  );
};

export default Counter;
