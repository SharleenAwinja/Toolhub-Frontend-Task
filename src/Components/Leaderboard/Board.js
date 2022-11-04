import React from "react";
import "./Board.css";
import Hero from '../../Pages/Records/Hero';

const Board = ({ toolsInfo }) => {

//sorting function for the number of edits per person
function sortInfo(infoArray) {
    infoArray.sort((a, b) => {
      return parseInt(b.edits) - parseInt(a.edits);
    });
    return infoArray;
  }

return (
    <>
      <Hero title='leaderboard' />
      <div className="board">
       <table>
        <thead>
          <th><h3>User</h3></th>
          <th><h3>Number of edits</h3></th>
        </thead>
        <tbody>
          {sortInfo(toolsInfo).map((tool) => (
          <tr>
            <td>
              <h3>{tool.created_by.username} </h3>
            </td>
            <td>
              <h3>{tool.edits} </h3>
            </td>
          </tr>
        ))}
        </tbody>
       </table>
        
      </div>
    </>
  );
};

export default Board;