import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { removeNetwork, addNetwork, checkSelected } from "../app/requestSlice";
import styles from "./Network.module.css";

type networkProps = {
  name: string;
  iconName: string;
};

const Network = (props: networkProps): JSX.Element => {
  const selected = useAppSelector((state) =>
    checkSelected(state, props.name.toLowerCase())
  );
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [showText, setShowText] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const iconName = `fa-brands fa-${props.iconName} ${styles.icon}`;
  const iconClasses = `${selected && styles.selected} ${styles.network}`;
  const dispatch = useAppDispatch();
  const mouseOutHandler = () => {
    setShowSettings(false);
  };

  const mouseOverHandler = () => {
    setShowSettings(true);
  };

  const selectHandler = () => {
    if (selected) {
      console.log("Remove");
      dispatch(removeNetwork(props.name.toLowerCase()));
    } else {
      dispatch(addNetwork(props.name.toLowerCase()));
    }
  };

  const showSettingsText = (text: string) => {
    setText(text);
    setShowText(true);
  };

  const hideText = () => {
    setShowText(false);
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={mouseOverHandler}
      onMouseLeave={mouseOutHandler}
    >
      <div onClick={selectHandler} className={iconClasses}>
        <i className={iconName}></i>
        <span className={styles.name}>{props.name}</span>
      </div>
      {showSettings && (
        <div className={styles.settingUpperBox} onMouseLeave={hideText}>
          <div className={styles.settings}>
            <i
              onMouseEnter={() => {
                showSettingsText("Nastavení");
              }}
              className="fa-solid fa-gear"
            ></i>
            <i
              onMouseEnter={() => {
                showSettingsText("Přihlásit se");
              }}
              className="fa-solid fa-arrow-right-to-bracket"
            ></i>
            <i
              onMouseEnter={() => {
                showSettingsText("Odhlásit se");
              }}
              className="fa-solid fa-arrow-right-from-bracket"
            ></i>
            <i
              onMouseEnter={() => {
                showSettingsText("Upravit soukromí");
              }}
              className="fa-solid fa-pen-square"
            ></i>
          </div>
          {showText && <div className={styles.settingText}>{text}</div>}
        </div>
      )}
    </div>
  );
};

export default Network;
