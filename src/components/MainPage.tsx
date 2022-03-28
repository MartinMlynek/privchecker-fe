import NetworkList from "./NetworkList";
import styles from "./MainPage.module.css";
import ResultButton from "./ResultButton";
import React, { useState, useReducer, Dispatch, SetStateAction } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Navbar from "./Navbar";
import ModelBox from "./ModelsModal";
import TimerBox from "./TimerBox";
import { requestState } from "../app/requestSlice";
import API from "../app/API";
import { useNavigate } from "react-router-dom";
type score = {
  C_PIDX?: number;
  M_PIDX?: number;
  W_PIDX?: number;
  WEIGHT_VISIBILITY?: number;
};
type advice = score & {
  key: string | boolean;
};

type attribute = {
  name: string;
  description: string;
  id: number;
  value: string | boolean;
  advices: Array<advice>;
};

export type networkModel = {
  default: number;
  error: number;
  max: score;
  min: score;
  name: string;
  normalised: score;
  score: score;
  attributes: Array<attribute>;
};

export type model = "C_PIDX" | "W_PIDX" | "M_PIDX" | "WEIGHT_VISIBILITY";

export type networkResult = {
  result: Array<networkModel>;
  models: Array<model>;
};

type mainPageProps = {
  setResult: Dispatch<SetStateAction<networkResult | null>>;
};

const MainPage = (props: mainPageProps): JSX.Element => {
  const request = useAppSelector(requestState);
  const navigate = useNavigate();
  const sendNetworksRequest = async () => {
    navigate("/wait");
    console.log(request);
    try {
      const respnse = await API.post<networkResult>("/", request);
      console.log(respnse.data);
      props.setResult(respnse.data);
      navigate("/result");
    } catch (error) {
      console.log("Error");
    }
  };
  console.log(request.networks);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header>
          <Navbar />
        </header>
        <main className={styles.main}>
          <NetworkList />
        </main>
        <ResultButton onSubmit={sendNetworksRequest} />
      </div>
    </div>
  );
};

export default MainPage;
