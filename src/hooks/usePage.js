import { useState } from "react";

export const usePage = () => {
  const [page, setPage] = useState(1);

  const handleSetPage = (newPage) => {
    setPage(newPage)
  };

  return {
    page,
    handleSetPage
  }
};
