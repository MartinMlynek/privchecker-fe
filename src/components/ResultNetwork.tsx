import { Dispatch, Key, useState } from "react";
import GaugeChart from "react-gauge-chart";
import { getIconName } from "../utility";
import { model, networkModel } from "./MainPage";
import styles from "./ResultNetwork.module.css";
import { ActionType, detailAction } from "./ResultPage";

type resultNetworkProps = {
  network: networkModel;
  models: Array<model>;
  showDetail: Dispatch<detailAction>;
  key: Key;
};

const ResultNetwork = ({
  network,
  models,
  showDetail,
}: resultNetworkProps): JSX.Element => {
  const [visibleModel, setVisibleModel] = useState<model | undefined>(
    models[0]
  );

  const setModelHandler = (model: model) => {
    setVisibleModel(model);
  };

  const showDetailHandler = () => {
    showDetail({ type: ActionType.SHOW, payload: network });
  };

  const getModelValue = (): number | undefined => {
    switch (visibleModel) {
      case "C_PIDX":
        return network.normalised.C_PIDX;
      case "M_PIDX":
        return network.normalised.M_PIDX;

      case "WEIGHT_VISIBILITY":
        return network.normalised.WEIGHT_VISIBILITY;

      case "W_PIDX":
        return network.normalised.W_PIDX;
      default:
        return 0;
    }
  };

  return (
    <div className={styles.networkBox}>
      <div className={styles.header}>
        <div className={styles.titleBox}>
          <h2 className={styles.title}>{network.name}</h2>
          <i
            className={`fa-brands fa-${getIconName(network.name)} ${
              styles.icon
            }`}
          />
        </div>
        <h3 className={styles.subtitle}>Riziko úniku dat</h3>
      </div>
      {visibleModel !== undefined && (
        <GaugeChart id="gauge-chart3" percent={getModelValue() || 0} />
      )}
      <div className={styles.models}>
        {(models.length > 2 &&
          models.map((model) => {
            return (
              <div className={styles.radioContainer}>
                <label
                  className={styles.modelLabel}
                  htmlFor={`${model}-radio-${network.name}`}
                >
                  {model}
                </label>
                <div className={styles.radioBox}>
                  <input
                    className={styles.modelRadio}
                    type="radio"
                    id={`${model}-radio-${network.name}`}
                    checked={model === visibleModel}
                    onChange={() => {
                      setModelHandler(model);
                    }}
                    value={model}
                    name={`${network.name}`}
                  />
                  <span className={styles.checkmark}></span>
                </div>
              </div>
            );
          })) || <span className={styles.onlyModel}>{visibleModel}</span>}
      </div>
      <div className={styles.detail} onClick={showDetailHandler}>
        <i className={"fa-solid fa-info"}></i>Detail
      </div>
    </div>
  );
};

export default ResultNetwork;
