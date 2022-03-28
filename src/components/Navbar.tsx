import { useState } from "react";
import ModelsModal from "./ModelsModal";
import { ModelBox } from "./ModelsModal";
import styles from "./Navbar.module.css";
import TimerModal from "./TimerBox";

const Navbar = () => {
  const [showModelBox, setShowModelBox] = useState<boolean>(false);
  const modelBoxHandle = () => {
    setShowModelBox((oldShowModelBox) => {
      return !oldShowModelBox;
    });
  };

  const [showTimeBox, setShowTimeBox] = useState<boolean>(false);
  const timeBoxHandle = () => {
    setShowTimeBox((oldShowTimeBox) => {
      return !oldShowTimeBox;
    });
  };

  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.navbarBox}>
          <li className={styles.item}>
            <div className={styles.itemText}>Privchecker</div>
          </li>
          <li className={styles.item}>
            <div className={styles.itemText} onClick={timeBoxHandle}>
              <i className="fa-solid fa-clock" />
              Časovač
            </div>
            {showTimeBox && <TimerModal onClick={timeBoxHandle} />}
          </li>
          <li className={styles.item}>
            <div onClick={modelBoxHandle} className={styles.itemText}>
              <i className="fa-solid fa-calculator" />
              Modely
            </div>
            {showModelBox && <ModelsModal showHandler={modelBoxHandle} />}
          </li>
          <li className={`${styles.item} ${styles.right}`}>
            <div className={styles.itemText}>
              <i className="fa-solid fa-question" /> Nápověda
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
