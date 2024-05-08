import { useIssues, useFilter } from "../../hooks";
import { TableBody } from "./TableBody";
import { TableHeaders } from "./TableHeaders";
import { SearchBar } from "./SearchBar";

import "./Home.css";

export const Home = () => {
  const { issues, handleSetIssues } = useIssues();
  const { newFilter, handleNewFilterValue } = useFilter();

  return (
    <main className="main-home">
      <SearchBar handleNewFilterValue={handleNewFilterValue} />
      <table>
        <TableHeaders />
        <TableBody
          issues={issues}
          newFilter={newFilter}
          handleSetIssues={handleSetIssues}
        />
      </table>
    </main>
  );
};
