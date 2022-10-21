import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./ToolItem.css";

function ToolItem() {
  const location = useLocation();
  const { tool } = location.state;
  const { toolname, description, author, details, repository } = tool;

  return (
    <div>
      <div className="tool-hero">
        <div className="item-banner">{tool.toolname}</div>
      </div>
      <div className="tool">
        <div className="item-container">
          <h4>
            <span className="title">Toolname:</span> {toolname}{" "}
          </h4>
          <h4>
            <span className="title">Brief description:</span> {description}{" "}
          </h4>
          <h4>
            <span className="title">Author:</span> {author}{" "}
          </h4>
          <h4>
            <span className="title">Details:</span> {details}{" "}
          </h4>
          <h4>
            <span className="title">Repository:</span> {repository}{" "}
          </h4>
        </div>
        <div className="buttons">
          <Link to={`/records`} className="btn">
            Back to Records
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ToolItem;
