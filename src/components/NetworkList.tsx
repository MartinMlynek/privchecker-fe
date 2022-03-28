import NetworkModel from "../model/NetworkModel";
import Network from "./Network";
import styles from "./NetworkList.module.css";

const NetworkList = (): JSX.Element => {
  const networks = [
    new NetworkModel("Facebook", "facebook-f"),
    new NetworkModel("Twitter", "twitter"),
    new NetworkModel("Instagram", "instagram"),
    new NetworkModel("Google", "google"),
    new NetworkModel("LinkedIn", "linkedin-in"),
    new NetworkModel("Pinterest", "pinterest-p"),
    new NetworkModel("Tumblr", "tumblr"),
  ];

  return (
    <>
      <div className={styles.networks}>
        {networks.map((network) => {
          return (
            <Network
              key={network.name}
              name={network.name}
              iconName={network.iconName}
            />
          );
        })}
      </div>
    </>
  );
};

export default NetworkList;
