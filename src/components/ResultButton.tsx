import styles from "./ResultButton.module.css";

type ResultButtonProps = {
  onSubmit: () => void;
};

const ResultButton = (props: ResultButtonProps): JSX.Element => {
  return (
    <>
      <button className={styles.button} onClick={props.onSubmit}>
        Spustit
      </button>
    </>
  );
};

export default ResultButton;
