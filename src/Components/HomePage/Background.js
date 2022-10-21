import React, { useState } from "react";
import "./Background.css";
import background from "../../assets/backimage.jpg";
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
    <div className="hero">
      <img src={background} alt="backphoto" id="back-image" />
      <div className="content">
        <h1>Toolhub Records</h1>
        <p>
          This application makes it possible to edit toolhub records by way of a
          dedicated UI hence making editing faster and more enjoyable
        </p>

        <form className="search-area" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for a tool"
            onChange={searchInputHandler}
          />
          <button className="btn" type="submit">
            Search
          </button>
        </form>
        <ListPage toolsInfo={toolsInfo} searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default Background;
