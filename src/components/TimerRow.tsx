import { useState, useRef } from "react";
import API from "../app/API";
import styles from "./TimerRow.module.css";

type timerRowProps = {
  label: string;
  id: string;
  value: number;
  updateTime: (value: number) => void;
};

const TimerRow = (props: timerRowProps) => {
  const input = useRef<HTMLInputElement>(null);
  const onChangeHandler = () => {
    const value = +input.current!.value;
    console.log(value);
    if (!isNaN(value) && value >= 0) {
      console.log("BBB");
      props.updateTime(value);
    } else {
      console.log("AAccA");
    }
  };

  console.log("AA");

  const sendParseTime = async () => {
    const request = {
      time: props.value,
      type: props.id,
    };

    try {
      const respnse = await API.post("/time", request, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(respnse.data);
    } catch (error) {
      console.log("Error");
    }
  };

  return (
    <div className={styles.inputRow}>
      <label className={styles.label} htmlFor={`timer-row ${props.id} `}>
        {props.label}
      </label>
      <input
        ref={input}
        id={`timer-row ${props.id} `}
        className={styles.number}
        type="tel"
        value={props.value}
        onChange={onChangeHandler}
      />
      <button onClick={sendParseTime}>Uložit</button>
    </div>
  );
};

export default TimerRow;
