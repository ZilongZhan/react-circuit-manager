import { useEffect, useState } from "react";

export const useIssues = () => {
  const [issues, setIssues] = useState([
    {
      id: "1",
      priority: "red",
      sender: "Support Team",
      description: "Urgent repair issue",
      createdAt: "12:45",
    },
    {
      id: "2",
      priority: "green",
      sender: "Maintenance",
      description: "Routine maintenance task",
      createdAt: "12:45",
    },
    {
      id: "3",
      priority: "yellow",
      sender: "Admin Support",
      description: "Pending repair task",
      createdAt: "12:45",
    },
    {
      id: "4",
      priority: "purple",
      sender: "Mantenance",
      description: "Customer complaint resolution",
      createdAt: "12:45",
    },
    {
      id: "5",
      priority: "none",
      sender: "Admin Support",
      description: "General inquiry",
      createdAt: "12:45",
    },
    {
      id: "6",
      priority: "red",
      sender: "Technical Team",
      description: "Critical system issue",
      createdAt: "12:45",
    },
    {
      id: "7",
      priority: "none",
      sender: "Admin Support",
      description: "General inquiry",
      createdAt: "12:45",
    },
    {
      id: "8",
      priority: "red",
      sender: "Technical Team",
      description: "Critical system issue",
      createdAt: "12:45",
    },
    {
      id: "9",
      priority: "purple",
      sender: "Mantenance",
      description: "Customer complaint resolution",
      createdAt: "12:45",
    },
    {
      id: "10",
      priority: "none",
      sender: "Admin Support",
      description: "General inquiry",
      createdAt: "12:45",
    },
    {
      id: "11",
      priority: "red",
      sender: "Technical Team",
      description: "Critical system issue",
      createdAt: "12:45",
    },
    {
      id: "12",
      priority: "none",
      sender: "Admin Support",
      description: "General inquiry",
      createdAt: "12:45",
    },
    {
      id: "13",
      priority: "red",
      sender: "Technical Team",
      description: "Critical system issue",
      createdAt: "12:45",
    },
  ]);

  useEffect(() => console.log("puta"), []);

  const handleSetIssues = (newIssues) => {
    setIssues(newIssues);
  };

  return {
    issues,
    handleSetIssues,
  };
};
