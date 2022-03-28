import styles from "./Backdrop.module.css";

type BackdropProps = {
  onClick: () => void;
  clearBackground: boolean;
};

const Backdrop = (props: BackdropProps): JSX.Element => {
  let classes = styles.backdrop;
  if (props.clearBackground) {
    classes = `${classes} ${styles.backdropClear}`;
    console.log("zde");
    console.log(classes);
  }
  return <div className={classes} onClick={props.onClick} />;
};

export default Backdrop;
