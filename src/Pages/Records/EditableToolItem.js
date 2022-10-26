import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../../Components/RecordsPage/RecordForm.css";

function EditableToolItem(props) {

  const location = useLocation();
  const { tool } = location.state;

  //intializing input values with details of the current record
  const [name, setName] = useState(tool.name);
  const [description, setDescription] = useState(tool.description);
  const [url, setUrl] = useState(tool.url);
  const [repository, setRepository] = useState(tool.repository);
  const [toolType, setToolType] = useState(tool.tool_type);
  const [bugTracker, setBugTracker] = useState(tool.bugtracker_url);
  const [author, setAuthor] = useState(tool.author[0].name);

  //setting state for the various input elements
  const toolNameHandler = (event) => {
    setName(event.target.value);
  };

  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const urlHandler = (event) => {
    setUrl(event.target.value);
  };

  const repositoryHandler = (event) => {
    setRepository(event.target.value);
  };
  const toolTypeHandler= (event) => {
    setToolType(event.target.value);
  };

  const bugTrackerHandler= (event) => {
    setBugTracker(event.target.value);
  };

  const authorHandler = (event) => {
    setAuthor(event.target.value);
  };

  
  //function to handle submitting of the form
  const submitHandler = (event) => {
    event.preventDefault();

    //setting values for the record being edited
    const toolData = {
      id: tool.id,
      name: name,
      description: description,
      url: url,
      repository: repository,
      tool_type: toolType,
      bugtracker_url: bugTracker,
      author: [
        {
        name: author,
      },
      ],
      title: name,
    };

    //function to save the recors
    props.onSaveToolData(toolData);

    //setting the input values to empty strings
    setName("");
    setDescription("");
    setUrl("");
    setRepository("");
    setToolType("");
    setBugTracker("");
    setAuthor("");

    alert('Record has been edited');
  };

  return (
    <div className="new-record">
      <div className="record">
        <form onSubmit={submitHandler}>
          <div className="input-label">Toolname: </div>
          <input
            type="text"
            placeholder="enter tool name"
            id="title"
            value={name}
            onChange={toolNameHandler}
            required
          />
          <div className="input-label">Description: </div>
          <input
            type="text"
            placeholder="enter tool description"
            id="description"
            value={description}
            onChange={descriptionHandler}
            required
          />
          <div className="input-label">URL: </div>
          <input
            type="url"
            placeholder="enter url to tool docs"
            id="url"
            value={url}
            onChange={urlHandler}
            required
          />
          <div className="input-label">Repository: </div>
          <input
            type="url"
            placeholder="enter url to tool repository"
            id="repository"
            value={repository}
            onChange={repositoryHandler}
            required
          />
          <div className="input-label">Tool type: </div>
          <input
            type="text"
            placeholder="enter tool type"
            id="tooltype"
            value={toolType}
            onChange={toolTypeHandler}
          />
          <div className="input-label">Bugtracker URL: </div>
          <input
            type="text"
            placeholder="enter bugtracker url"
            id="bugtracker"
            value={bugTracker}
            onChange={bugTrackerHandler}
          />
          <div className="input-label">Author: </div>
          <input
            type="text"
            placeholder="enter your username"
            id="author"
            value={author}
            onChange={authorHandler}
            required
          />
          <div className="submit-btn">
            <button className="btn" type="submit">
              Save record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditableToolItem;
