import React from "react";
import { Link } from "react-router-dom";
import './Post.css';

const Post = ({ tool }) => {
  return (
    <div className="post-center">
     <div className="post-container">
        <h4>
          <span className="title">Toolname:</span> {tool.toolname}{" "}
        </h4>
        <h4>
          <span className="title">Brief description:</span> {tool.description}{" "}
        </h4>
        <h4>
          <span className="title">Author:</span> {tool.author}{" "}
        </h4>

        <Link to={`/records/${tool.slug}`} state={{ tool }} className="details-btn">
          View Details
        </Link>
      </div>
      </div>
  );
};

export default Post;
