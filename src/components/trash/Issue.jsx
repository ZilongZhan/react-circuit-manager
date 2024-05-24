import "./Issue.css";

export const Issue = ({ issue, handleSetIssues }) => {
  const handleRestoreIssue = (issue) => {
    const restoredIssue = {
      ...issue,
      STATUS: open,
    };

    Update(restoredIssue)
      .then(() => Get())
      .then((issues) => handleSetIssues(issues));
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
          onClick={() => handleRestoreIssue(issue)}
        >
          <img src="/assets/icons/restore.png" alt="restore" />
        </button>
      </td>
    </tr>
  );
};
