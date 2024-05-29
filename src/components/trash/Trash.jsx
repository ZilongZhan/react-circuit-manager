import { useIssues, useFilter, usePage } from "../../hooks";
import { IssuesTable } from "./IssuesTable";
import { SearchBar } from "./SearchBar";
import { Pagination } from "./Pagination";
import { handleFilterIssues } from "../../helpers";
import { Footer, BurgerMenu } from "../../shared";

import "./Trash.css";

export const Trash = () => {
  const { issues, handleSetIssues } = useIssues();
  const { newFilter, handleNewFilterValue } = useFilter();
  const { page, handleSetPage } = usePage();

  const issuesPerPage = 8;

  const startIndex = (page - 1) * issuesPerPage;
  const endIndex = startIndex + issuesPerPage;

  const filteredIssues = handleFilterIssues(issues, newFilter);

  const issuesToDisplay = filteredIssues.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    handleSetPage(pageNumber);
  };

  return (
    <>
      <main className="main-trash">
        <SearchBar handleNewFilterValue={handleNewFilterValue} />
        <IssuesTable
          newFilter={newFilter}
          issuesToDisplay={issuesToDisplay}
          handleSetIssues={handleSetIssues}
        />
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(filteredIssues.length / issuesPerPage)}
          handlePageChange={handlePageChange}
        />
      </main>
      <Footer />
      <BurgerMenu />
    </>
  );
};
