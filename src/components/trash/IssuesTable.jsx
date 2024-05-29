import { TableBody } from "./TableBody";
import { TableHeaders } from "./TableHeaders";

export const IssuesTable = ({
  issuesToDisplay,
  newFilter,
  handleSetIssues,
}) => {
  return (
    <div className="table__container">
      <table>
        <TableHeaders />
        <TableBody
          issues={issuesToDisplay}
          newFilter={newFilter}
          handleSetIssues={handleSetIssues}
        />
      </table>
    </div>
  );
};
