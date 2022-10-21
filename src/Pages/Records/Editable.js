import React from "react";
import EditableToolItem from "./EditableToolItem";

function Editable(props) {
  const saveToolDataHandler = (enteredToolData) => {
    const toolData = {
      ...enteredToolData,
    };

    props.editTool(toolData);
  };

  return (
    <div>
      <EditableToolItem onSaveToolData={saveToolDataHandler} />
    </div>
  );
}

export default Editable;
