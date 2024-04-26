import { useIssues } from "../../hooks";
import { Issue } from "./Issue";

import "./Home.css";

export const Home = () => {
  const { issues, handleSetIssues } = useIssues();

  return (
    <main className="main-home">
      <ul className="issues-list">
        {issues.map((issue) => (
          <Issue key={issue.id} issue={issue} />
        ))}
      </ul>
    </main>
  );
};
