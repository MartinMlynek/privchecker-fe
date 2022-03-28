import { useReducer, useState } from "react";
import GaugeChart from "react-gauge-chart";
import { model, networkModel, networkResult } from "./MainPage";
import ResultNetwork from "./ResultNetwork";
import styles from "./ResultPage.module.css";
type resultPageProps = {
  data: networkResult | null;
};

type detailType = {
  showDetail: boolean;
  detail: networkModel | null;
};

export enum ActionType {
  SHOW = "SHOW",
  HIDE = "HIDE",
}

export type detailAction =
  | {
      payload: networkModel;
      type: ActionType.SHOW;
    }
  | { type: ActionType.HIDE };

const detailInitialState: detailType = {
  showDetail: false,
  detail: null,
};

const detailReducer = (state: detailType, action: detailAction): detailType => {
  switch (action.type) {
    case ActionType.SHOW:
      return { showDetail: true, detail: action.payload };
    case ActionType.HIDE:
      return { showDetail: false, detail: null };
    default:
      throw new Error();
  }
};

const ResultPage = ({ data }: resultPageProps): JSX.Element => {
  const [model, setModel] = useState<model | undefined>(data?.models[0]);
  const [detailState, dispatch] = useReducer(detailReducer, detailInitialState);
  const setModelHandler = (model: model) => {
    setModel(model);
  };

  console.log(detailState);
  const getModelValue = (network: networkModel): number | undefined => {
    switch (model) {
      case "C_PIDX":
        return network.normalised.C_PIDX;
      case "M_PIDX":
        console.log(network.normalised.M_PIDX);
        return network.normalised.M_PIDX;

      case "WEIGHT_VISIBILITY":
        return network.normalised.WEIGHT_VISIBILITY;

      case "W_PIDX":
        return network.normalised.W_PIDX;
      default:
        return 0;
    }
  };

  let output;
  if (data) {
    console.log("AA");
    console.log(model);
    output = data.result.map((network) => {
      return (
        <ResultNetwork
          key={network.name}
          showDetail={dispatch}
          network={network}
          models={data.models}
        />
      );
    });
  }

  return (
    <div className={styles.page}>
      {!detailState.showDetail && (
        <div className={styles.container}>{output}</div>
      )}
      {detailState.showDetail && "aaa"}
    </div>
  );
};

export default ResultPage;
