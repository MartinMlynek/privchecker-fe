import classes from "./Modal.module.css";
import Backdrop from "./Backdrop";
import ReactDOM from "react-dom";

const ModalOverlay = () => {
  return (
    <div className={classes.modal}>
      <div>
        <h2>Přihlašovací čas</h2>
        <input type="number" />
      </div>
      <div>
        <h2>Parsovací čas</h2>
        <input type="number" />
      </div>
    </div>
  );
};

const ModelsModal = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={() => {}} clearBackground={false} />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document!.getElementById("overlay-root")!
      )}
    </>
  );
};

export default ModelsModal;
