import { Get, Update } from "../../services";

import "./IssueTrash.css";

export const Issue = ({ issue, handleSetIssues }) => {
  const handleRestoreIssue = (issueID) => {
    const restoredIssue = {
      ...issue,
      status: "open",
    };
    const src = "issues";

    Update(src, issueID, restoredIssue)
      .then(() => Get("issues"))
      .then((issues) => handleSetIssues(issues));
  };

  return (
    <tr className="issueTrash">
      <td className={`issue-info priority-${issue.sender}`}>{issue.sender}</td>
      <td className="issue-info">{issue.description}</td>
      <td className="issue-info time">{issue.created_at}</td>
      <td>
        <button
          className="delete-button"
          onClick={() => handleRestoreIssue(issue.id)}
        >
          <img src="/assets/icons/restore.png" alt="restore" />
        </button>
      </td>
    </tr>
  );
};
