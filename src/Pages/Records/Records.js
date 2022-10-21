import React from "react";
import Figures from "../../Components/RecordsPage/Figures";

function Records({ toolsInfo, deletehandler, onAddToolData }) {
  return (
    <div>
      <Figures
        toolsInfo={toolsInfo}
        toDelete={deletehandler}
        toEdit={onAddToolData}
      />
    </div>
  );
}

export default Records;
