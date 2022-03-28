import ModelRow from "./ModelRow";
import styles from "./ModelBox.module.css";
import ReactDOM from "react-dom";
import Backdrop from "./modal/Backdrop";
export const ModelBox = () => {
  const models = ["C_PIDX", "M_PIDX", "W_PIDX", "WEIGHT_VISIBILITY"];

  return (
    <div className={styles.modelBox}>
      {models.map((model) => {
        return <ModelRow key={model} name={model} />;
      })}
    </div>
  );
};

type modalProps = {
  showHandler: () => void;
};

const ModelsModal = (props: modalProps) => {
  return (
    <>
      <ModelBox />
      {ReactDOM.createPortal(
        <Backdrop onClick={props.showHandler} clearBackground={true} />,
        document.getElementById("backdrop-root")!
      )}
    </>
  );
};

export default ModelsModal;
