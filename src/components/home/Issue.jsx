import { Button } from "../../shared";

import "./Issue.css";

export const Issue = ({ issue, handleSetIssues }) => {
  const handleDeleteNote = (issueID) => {
    console.log(issueID);
  };

  return (
    <tr className="issue">
      <td className={`issue-info priority-${issue.priority}`}>
        {issue.sender}
      </td>
      <td className="issue-info">{issue.description}</td>
      <td className="issue-info time">{issue.createdAt}</td>
      <td>
        <button
          className="delete-button"
          onClick={() => handleDeleteNote(issue.id)}
        >
          <img src="/icons/trashcan.png" alt="trash" />
        </button>
      </td>
    </tr>
  );
};
