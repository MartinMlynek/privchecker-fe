import React, { useEffect, useState } from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { io } from "socket.io-client";

import Network from "./components/Network";
import NetworkList from "./components/NetworkList";
import MainPage, { networkResult } from "./components/MainPage";
import { useAppSelector } from "./app/hooks";
import { isMainPage, isResultPage, isWaitPage } from "./app/pageSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WaitPage from "./components/WaitPage";
import ResultPage from "./components/ResultPage";

const socket = io("http://localhost:5000/");

function App() {
  const [browserMessage, setBrowserMessage] = useState<string>("");
  const [result, setResult] = useState<networkResult | null>(null);
  const isMain = useAppSelector(isMainPage);
  const isWait = useAppSelector(isWaitPage);
  const isResult = useAppSelector(isResultPage);

  useEffect(() => {
    socket.on("state", (message: string) => {
      console.log("responseMessage", message);
      setBrowserMessage(message);
    });

    socket.on("disconnect", (reason) => {
      console.log(reason);
      if (reason === "io server disconnect") {
        // the disconnection was initiated by the server, you need to reconnect manually
        socket.connect();
      }
      // else the socket will automatically try to reconnect
    });

    return () => {
      socket.close();
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage setResult={setResult} />} />
        <Route path="/wait" element={<WaitPage message={browserMessage} />} />
        <Route path="/result" element={<ResultPage data={result} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
