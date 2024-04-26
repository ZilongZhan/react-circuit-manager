export const Issue = ({ issue }) => {
  return (
    <tr className="issue">
      <td className={`issue-info priority-${issue.priority}`}>{issue.sender}</td>
      <td className="issue-info">{issue.issue}</td>
      <td className="issue-info time">{issue.createdAt}</td>
    </tr>
  );
};
