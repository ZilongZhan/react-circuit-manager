import { useState } from "react";

export const useIssues = () => {
  const [issues, setIssues] = useState([]);

  

  const handleSetIssues = (newIssues) => {
    setIssues(newIssues);
  };

  return {
    issues,
    handleSetIssues,
  };
};
