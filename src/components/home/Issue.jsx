export const Issue = ({ issue }) => {
  return (
    <li className="issue">
      <span className={`issue-info ${issue.priority}`}>{issue.sender}</span>
      <span className="issue-info">{issue.issue}</span>
      <span className="issue-info time">{issue.createdAt}</span>
    </li>
  );
};
