import React, { useState } from "react";
import "./Background.css";
import ListPage from "../../Pages/Home/ListPage";

function Background({ toolsInfo }) {

const [searchTerm, setSearchTerm] = useState("");

const handleSubmit = (e) => {
    e.preventDefault(e);
  };

const searchInputHandler = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  };

return (
    <div className="home-container">
      <div className="content">
        <h1><span className="toolhub-blue">Toolhub</span> <span className="toolhub-red">Records</span></h1>
        <p>
          This application makes it possible to edit toolhub records by way of a
          dedicated UI hence making editing faster and more enjoyable
        </p>

        <form className="search-area" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for a tool"
            onChange={searchInputHandler}
            value={searchTerm}
          />
          <button className="btn" type="submit">
            Search
          </button>
        </form>
        <div className="tools-center">
          <ListPage toolsInfo={toolsInfo} searchTerm={searchTerm}/>
        </div>
      </div>
    </div>
  );
}

export default Background;
