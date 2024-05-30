import { Get, Update } from "../../services";

import "./Issue.css";

export const Issue = ({ issue, handleSetIssues }) => {
  const handleDeleteNote = (issueID) => {
    const deletedIssue = {
      ...issue,
      status: "deleted",
    };
    const src = "issues";

    Update(src, issueID, deletedIssue)
      .then(() => Get("issues"))
      .then((issues) => handleSetIssues(issues));
  };

  return (
    <tr className="issue">
      <td className={`issue-info priority-${issue.sender}`}>{issue.title}</td>
      <td className="issue-info">{issue.description}</td>
      <td className="issue-info time">{issue.created_at}</td>
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
