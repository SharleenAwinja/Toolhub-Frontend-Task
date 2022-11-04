import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Hero from "./Records/Hero";
import "./ToolItem.css";

function ToolItem() {
  const location = useLocation();
  const { tool } = location.state;
  const { name, description, author, repository, url, tool_type, bugtracker_url } = tool;

  return (
    <div>
      <Hero title={name} />
      <div className="tool">
        <div className="item-container">
          <h4>
            <span className="title">Toolname:</span> {name}{" "}
          </h4>
          <h4>
            <span className="title">Description:</span> {description}{" "}
          </h4>
          <h4>
            <span className="title">Author:</span> {author[0].name}{" "}
          </h4>
          <h4>
            <span className="title">URL:</span> <a href={url} target='__blank' >{url}</a>
          </h4>
          <h4>
            <span className="title">Repository:</span> <a href={repository} target='__blank' >{repository}</a>
          </h4>
          <h4>
            <span className="title">Tool Type:</span> {tool_type}{" "}
          </h4>
          <h4>
            <span className="title">Bugtracker:</span> <a href={bugtracker_url} target='__blank' >{bugtracker_url}</a>
          </h4>
        </div>
        <div className="buttons">
          <div>
            <Link to={`/records`} className="btn">
            Back to Records
          </Link>
          </div>
          <div>
            <Link
            to={`/records/editable-record`}
            state={{ tool }}
            className="btn"
          >
            Edit Record
          </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default ToolItem;
