import { Issue } from "./Issue";

export const TableBody = ({ issues }) => {
  return (
    <tbody className="issues-list">
      {issues.map((issue) => (
        <Issue key={issue.id} issue={issue} />
      ))}
    </tbody>
  );
};
