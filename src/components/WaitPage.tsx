import { useEffect, useState } from "react";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import styles from "./WaitPage.module.css";
import { io } from "socket.io-client";

type waitProps = {
  message: string;
};

const WaitPage = (props: waitProps): JSX.Element => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("UDE");
      setProgress((progress) => {
        return progress + 0.25;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>
            Vykonává se sbírání dat ze sociálních sítí
          </h1>
          <h2 className={styles.subtitle}>
            Nemanipulujte se speciálním prohlížečem!
          </h2>
          <div className={styles.barBox}>
            <LoadingBar
              progress={progress}
              className={styles.bar}
              containerClassName={styles.barBackground}
              transitionTime={0}
              shadowStyle={{
                boxShadow: "none",
                position: "initial",
              }}
            />
          </div>
        </div>
        <h1 className={styles.message}>{props.message}</h1>
      </div>
    </div>
  );
};

export default WaitPage;
