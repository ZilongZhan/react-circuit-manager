import { useState } from "react";

export const useNewIssue = () => {
  const [newIssue, setNewIssue] = useState({
    title: "No title",
    description: "No description",
    status: STATUS.open,
    priority: "medium",
    verified: false,
  });

  const handleChange = (e) => {
    setNewIssue({
      ...newIssue,
      [e.target.name]: e.target.value,
    });
  };

  return {
    newIssue,
    handleChange,
  }; 
};
