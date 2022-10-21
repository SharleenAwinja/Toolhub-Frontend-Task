import React from "react";
import RecordForm from "../../Components/RecordsPage/RecordForm";

function NewRecord(props) {
  const saveToolDataHandler = (enteredToolData) => {
    const toolData = {
      ...enteredToolData,
      id: Math.floor(Math.random() * 100),
    };

    props.onAddToolData(toolData);
  };

  return (
    <div>
      <RecordForm onSaveToolData={saveToolDataHandler} />
    </div>
  );
}

export default NewRecord;
