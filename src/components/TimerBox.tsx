import ReactDOM from "react-dom";

import styles from "./TimerBox.module.css";
import Backdrop from "./modal/Backdrop";
import TimerRow from "./TimerRow";
import { useEffect, useState } from "react";
import API from "../app/API";
const TimerBox = () => {
  const [parse, setParse] = useState<number>(3);
  const [login, setLogin] = useState<number>(120);

  const getTimes = async () => {
    try {
      const respnse = await API.get("/time", {
        headers: { "Content-Type": "application/json" },
      });
      setLogin(respnse.data.login);
      setParse(respnse.data.parse);
      console.log(respnse.data);
    } catch (error) {
      console.log("Error");
    }
  };

  useEffect(() => {
    getTimes();
  }, []);

  return (
    <div className={styles.timerBox}>
      <TimerRow
        label="Přihlašovací čas"
        id={"login"}
        value={login}
        updateTime={(value: number) => {
          setLogin(value);
        }}
      />
      <TimerRow
        label="Parsovací čas"
        id={"parse"}
        value={parse}
        updateTime={(value: number) => {
          setParse(value);
        }}
      />
    </div>
  );
};

type timerModal = {
  onClick: () => void;
};

const TimerModal = (props: timerModal) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop clearBackground={false} onClick={props.onClick} />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <TimerBox />,
        document.getElementById("overlay-root")!
      )}
    </>
  );
};

export default TimerModal;
