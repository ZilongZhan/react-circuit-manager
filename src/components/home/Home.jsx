import { useIssues } from "../../hooks";
import { TableBody } from "./TableBody";
import { TableHeaders } from "./TableHeaders";
import { SearchBar } from "./SearchBar";

import "./Home.css";

export const Home = () => {
  const { issues } = useIssues();

  return (
    <main className="main-home">
      <SearchBar />
      <table>
        <TableHeaders />
        <TableBody issues={issues} />
      </table>
    </main>
  );
};
