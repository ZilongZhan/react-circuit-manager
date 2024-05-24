import { useIssues, useFilter, usePage } from "../../hooks";
import { IssuesTable } from "./IssuesTable";
import { SearchBar } from "./SearchBar";
import { Pagination } from "./Pagination";

import "./Home.css";

export const Home = () => {
  const { issues, handleSetIssues } = useIssues();
  const { newFilter, handleNewFilterValue } = useFilter();
  const { page, handleSetPage } = usePage();

  const issuesPerPage = 8;

  const filterIssues = (issue) => {
    return (
      issue.description.toUpperCase().includes(newFilter.toUpperCase()) ||
      issue.sender.toUpperCase().includes(newFilter.toUpperCase()) ||
      issue.priority.toUpperCase().includes(newFilter.toUpperCase())
    );
  };

  const startIndex = (page - 1) * issuesPerPage;
  const endIndex = startIndex + issuesPerPage;
  const filteredIssues = issues.filter(filterIssues);
  const currentIssues = filteredIssues.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    handleSetPage(pageNumber);
  };

  return (
    <main className="main-home">
      <SearchBar handleNewFilterValue={handleNewFilterValue} />
      <IssuesTable
        newFilter={newFilter}
        currentIssues={currentIssues}
        handleSetIssues={handleSetIssues}
      />
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(filteredIssues.length / issuesPerPage)}
        handlePageChange={handlePageChange}
      />
    </main>
  );
};
