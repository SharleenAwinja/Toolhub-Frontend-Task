import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./Components/Navbar/Navbar";
import Leaderboard from "./Pages/Leaderboard";
import Home from "./Pages/Home/Home";
import Records from "./Pages/Records/Records";
import ErrorPage from "./Pages/ErrorPage";
import ToolItem from "./Pages/ToolItem";
import NewRecord from "./Pages/Records/NewRecord";
import { useState, useEffect } from "react";
import Editable from "./Pages/Records/Editable";
import { GetRecords } from "./Resources/ToolsResource";
import { dataInfo } from "./Data/dataInfo";

function App() {
  //intializing state for dataInfo
  const [toolsInfo, setToolsInfo] = useState(dataInfo);

  //setting up local storage
  useEffect(() => {
    const temp = localStorage.getItem("toolsinfo");
    const loadedtools = JSON.parse(temp);

    if (loadedtools) {
      setToolsInfo(loadedtools);
    }
  }, []);

  useEffect(() => {
    GetRecords()
      .then((dataInfo) => {
        const toolJson = JSON.stringify(dataInfo);
        localStorage.setItem("toolsinfo", toolJson);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [toolsInfo]);

  //creating, add, delete and edit functions for the records
  const addToolDataHandler = (enteredToolData) => {
    setToolsInfo((prevToolsInfo) => {
      return [enteredToolData, ...prevToolsInfo];
    });
  };

  const deleteTool = (id) => {
    const updatedTools = [...toolsInfo].filter((oneTool) => oneTool.id !== id);
    setToolsInfo(updatedTools);
  };

  const editTool = (enteredToolData) => {
    const index = toolsInfo.findIndex((tool) => tool.id === enteredToolData.id);
    toolsInfo[index] = enteredToolData;
    setToolsInfo(toolsInfo);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home toolsInfo={toolsInfo} />}></Route>
        <Route
          path="/records"
          element={
            <Records
              toolsInfo={toolsInfo}
              deletehandler={deleteTool}
              onAddToolData={addToolDataHandler}
            />
          }
        ></Route>
        <Route
          path="/leaderboard"
          element={<Leaderboard toolsInfo={toolsInfo} />}
        ></Route>
        <Route path="*" element={<ErrorPage />}></Route>
        <Route path="/records/:slug" element={<ToolItem />} />
        <Route
          path="/records/new-record"
          element={<NewRecord onAddToolData={addToolDataHandler} />}
        ></Route>
        <Route
          path="/records/editable-record"
          element={<Editable editTool={editTool} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
