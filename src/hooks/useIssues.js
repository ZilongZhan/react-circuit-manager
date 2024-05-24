import { useState } from "react";

export const useIssues = () => {
  const [issues, setIssues] = useState([]);

  const fetchIssues = async () => {
    const issuesFromService = await Get("issues");
    setIssues(issuesFromService);
  };

  useEffect(() => {
    fetchIssues();
  }, [issues]);

  const handleSetIssues = (newIssues) => {
    setIssues(newIssues);
  };

  return {
    issues,
    handleSetIssues,
  };
};
