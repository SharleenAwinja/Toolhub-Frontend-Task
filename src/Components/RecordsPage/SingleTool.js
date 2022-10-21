import { Link } from "react-router-dom";
import "./SingleTool.css";

const SingleTool = ({ tool, deleteFunction }) => {

const { id, toolname, description, author, slug } = tool;

const deletingHandler = () => {
    deleteFunction(id);
  };

return (
    <article className="single-tool">
      <div className="tool-container">
        <h4>
          <span className="title">Toolname:</span> {toolname}{" "}
        </h4>
        <h4>
          <span className="title">Brief description:</span> {description}{" "}
        </h4>
        <h4>
          <span className="title">Author:</span> {author}{" "}
        </h4>

        <Link to={`/records/${slug}`} state={{ tool }} className="details-btn">
          View Details
        </Link>
      </div>
      <button className="tool-btn" type="button" onClick={deletingHandler}>
        Delete Record
      </button>
      <div className="link-btn">
        <Link to={`/records/editable-record`} state={{ tool }} className="btn">
          Edit Record
        </Link>
      </div>
    </article>
  );
};

export default SingleTool;
