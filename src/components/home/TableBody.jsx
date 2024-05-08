import { Issue } from "./Issue";

export const TableBody = ({ issues, newFilter, handleSetIssues }) => {
  const filterIssues = (issue) => {
    return (
      issue.description.toUpperCase().includes(newFilter.toUpperCase()) ||
      issue.sender.toUpperCase().includes(newFilter.toUpperCase()) ||
      issue.priority.toUpperCase().includes(newFilter.toUpperCase())
    );
  };

  return (
    <tbody className="issues-list">
      {issues.filter(filterIssues).map((issue) => (
        <Issue key={issue.id} issue={issue} handleSetIssues={handleSetIssues} />
      ))}
    </tbody>
  );
};
