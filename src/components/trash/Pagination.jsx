import { Button } from "./Button";

import "./Pagination.css";

export const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <div className="pagination__container">
      <div className="pagination">
        {currentPage > 1 && (
          <Button
            className="pagination-button prev"
            action={() => handlePageChange(currentPage - 1)}
            label="← Previous"
          />
        )}
        <span className="current-page">{currentPage}</span>
        {currentPage < totalPages && (
          <Button
            className="pagination-button next"
            action={() => handlePageChange(currentPage + 1)}
            label="Next →"
          />
        )}
      </div>
    </div>
  );
};
