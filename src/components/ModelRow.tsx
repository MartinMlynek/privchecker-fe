import { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  checkModels,
  requestState,
  addModel,
  removeModel,
} from "../app/requestSlice";
import styles from "./ModelRow.module.css";
type ModelRowProps = {
  name: string;
};

const ModelRow = (props: ModelRowProps): JSX.Element => {
  /*   -const [checked, setChecked] = useState<boolean>(false); */
  const checked = useAppSelector((state) => checkModels(state, props.name));
  const dispatch = useAppDispatch();
  const checkHandle = () => {
    if (checked) {
      console.log("zaade");
      dispatch(removeModel(props.name));
    } else {
      dispatch(addModel(props.name));
    }
  };
  return (
    <div className={styles.model}>
      <label htmlFor={`${props.name}-input`} className={styles.label}>
        {props.name}
      </label>
      <div className={styles.checkbox}>
        <input
          className={styles.input}
          checked={checked}
          onChange={checkHandle}
          id={`${props.name}-input`}
          type="checkbox"
        />
        <i
          onClick={checkHandle}
          className={`fa-solid fa-check ${styles.checkIcon}`}
        />
      </div>
    </div>
  );
};

export default ModelRow;
