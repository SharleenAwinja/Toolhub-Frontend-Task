import React from 'react';
import { Link } from "react-router-dom";
import './Post.css';

const Post = ({tool }) => {
// const [name, description, author, title] = tool;

  return (
    <div className="tool-container">
        <h4 title='headings' >
          <span className="title">Toolname:</span> {tool.name}{" "}
        </h4>
        <h4 title='headings'>
          <span className="title">Description:</span> {tool.description}{" "}
        </h4>
        <h4 title='headings'>
          <span className="title">Author:</span> {tool.author[0].name}{" "}
        </h4>
        <Link to={`/records/${tool.title}`} state={{ tool }} className="details-btn">
            View Details
          </Link>
      </div>
  )
}

export default Post;