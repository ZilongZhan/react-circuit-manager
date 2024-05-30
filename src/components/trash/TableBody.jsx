import { Issue } from "./Issue";

export const TableBody = ({ issues, newFilter, handleSetIssues }) => {
  const filterIssues = (issue) => {
    return (
      issue.description.toUpperCase().includes(newFilter.toUpperCase()) ||
      issue.sender.toUpperCase().includes(newFilter.toUpperCase()) ||
      issue.priority.toUpperCase().includes(newFilter.toUpperCase())
    );
  };

  const issuesToDisplay = issues
    .filter((issue) => issue.status === "deleted")
    .filter(filterIssues);

  const isEmptyIssues = issuesToDisplay.length === 0;

  return (
    <tbody className="issues-list">
      {isEmptyIssues ? (
        <tr className="no-issues">
          <td>No issues to display</td>
        </tr>
      ) : (
        issuesToDisplay.map((issue) => (
          <Issue
            key={issue.id}
            issue={issue}
            handleSetIssues={handleSetIssues}
          />
        ))
      )}
    </tbody>
  );
};
