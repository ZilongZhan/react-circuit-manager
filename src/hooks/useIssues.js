import { useState, useEffect } from "react";
import { Get } from "../services";

export const useIssues = () => {
  const [issues, setIssues] = useState([]);

  const fetchIssues = async () => {
    const issuesFromService = await Get("issues");
    setIssues(issuesFromService);
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  const handleSetIssues = (newIssues) => {
    setIssues(newIssues);
  };

  return {
    issues,
    handleSetIssues,
  };
};
