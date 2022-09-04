import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { counterActions } from "../store";

const Counter = () => {
  const [toggle, setToggle] = useState(false);

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleHandler = () => {
    if (toggle === false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  return (
    <main className={classes.counter}>
      {toggle && (
        <div>
          <h1>Redux Counter</h1>
          <div className={classes.value}> {counter}</div>
        </div>
      )}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increment by 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
