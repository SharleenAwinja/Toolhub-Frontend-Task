import React from "react";
import { useState } from "react";
import "./RecordForm.css";

function RecordForm(props) {
  //setting up state for the various input elements
   const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [repository, setRepository] = useState('');
  const [toolType, setToolType] = useState('');
  const [bugTracker, setBugTracker] = useState('');
  const [author, setAuthor] = useState('');

  //event handlers for each input element
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
  const toolTypeHandler = (event) => {
    setToolType(event.target.value);
  };

  const bugTrackerHandler = (event) => {
    setBugTracker(event.target.value);
  };

  const authorHandler = (event) => {
    setAuthor(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    //consolidating all the input
    const toolData = {
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


    //function to add the record
    props.onSaveToolData(toolData);

    //reseting input values to empty strings
    setName("");
    setDescription("");
    setUrl("");
    setRepository("");
    setToolType("");
    setBugTracker("");
    setAuthor("");

    alert('Record has been saved');
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
          <div className="input-label">Tool Type: </div>
          <input
            type="text"
            placeholder="enter detailed explanation of the tool"
            id="tooltype"
            value={toolType}
            onChange={toolTypeHandler}
          />
          <div className="input-label">Bugtracker URL: </div>
          <input
            type="text"
            placeholder="enter detailed explanation of the tool"
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
              Add record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RecordForm;
