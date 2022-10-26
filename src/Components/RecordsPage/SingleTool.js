
import Post from "../../Pages/Home/Post";
import "./SingleTool.css";

const SingleTool = ({ tool, deleteFunction }) => {

  const deletingHandler = () => {
    deleteFunction(tool.id);
  };
  
  return (
    <article className="single-tool">
      <Post tool={tool} />
      <div className="buttons">
        <div className="btn-div">
          <button className="btn" type="button" onClick={deletingHandler}>
            Delete Record
          </button>
        </div>
      </div>
    </article>
  );
};

export default SingleTool;
