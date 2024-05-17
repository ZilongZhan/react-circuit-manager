import { TableBody } from "./TableBody";
import { TableHeaders } from "./TableHeaders";

export const IssuesTable = ({ currentIssues, newFilter, handleSetIssues }) => {
  return (
    <div className="table__container">
      <table>
        <TableHeaders />
        <TableBody
          issues={currentIssues}
          newFilter={newFilter}
          handleSetIssues={handleSetIssues}
        />
      </table>
    </div>
  );
};
