import { Link } from "react-router-dom";
import "./Figures.css";
import SingleTool from "./SingleTool";

const Figures = ({ toolsInfo, toDelete, toEdit }) => {
  return (
    <div className="records-container">
      <header className="hero">
        <div className="banner">
          <h1>
            Total Number of tools: <span className="numbers">15</span>
          </h1>
          <h1>
            Tools with missing information: <span className="numbers">2</span>
          </h1>
          <h1>
            Percentage of tools with missing information:{" "}
            <span className="numbers">15%</span>
          </h1>
          <h1>
            Tools edited with records management tool:{" "}
            <span className="numbers">10</span>
          </h1>
        </div>
      </header>
      <div className="tools">
        <div className="section-title">
          <h2>Tools Recorded</h2>
        </div>
        <div className="tools-center">
          {toolsInfo.map((item) => {
            return (
              <SingleTool
                key={item.id}
                tool={item}
                toolsInfo={toolsInfo}
                deleteFunction={toDelete}
                editFuntion={toEdit}
              />
            );
          })}
        </div>
        <div className="button">
          <Link to={`/records/new-record`}>
            <button className="btn">Add a Record</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Figures;
