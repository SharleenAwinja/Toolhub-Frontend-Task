import React from "react";
import { useState } from "react";
import "./RecordForm.css";

function RecordForm(props) {
  //setting up state for the various input elements
  const [toolName, setToolName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [repository, setRepository] = useState("");
  const [details, setDetails] = useState("");
  const [author, setAuthor] = useState("");

  //event handlers for each input element
  const toolNameHandler = (event) => {
    setToolName(event.target.value);
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
  const detailsHandler = (event) => {
    setDetails(event.target.value);
  };

  const authorHandler = (event) => {
    setAuthor(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    //consolidating all the input
    const toolData = {
      toolname: toolName,
      description: description,
      url: url,
      repository: repository,
      details: details,
      author: author,
      slug: toolName,
    };

    //function to add the record
    props.onSaveToolData(toolData);

    //reseting input values to empty strings
    setToolName("");
    setDescription("");
    setUrl("");
    setRepository("");
    setDetails("");
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
            value={toolName}
            onChange={toolNameHandler}
            required
          />
          <div className="input-label">Brief Description: </div>
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
          <div className="input-label">Details: </div>
          <input
            type="text"
            placeholder="enter detailed explanation of the tool"
            id="details"
            value={details}
            onChange={detailsHandler}
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
