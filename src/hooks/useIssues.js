import { useState } from "react";

export const useIssues = () => {
  const [issues, setIssues] = useState([
    {
      id: "1",
      priority: "red",
      sender: "Admin John Doe",
      issue: "Assumpte de la reparació",
      createdAt: "12:45",
    },
    {
      id: "2",
      priority: "green",
      sender: "Admin John Doe",
      issue: "Assumpte de la reparació",
      createdAt: "12:45",
    },
    {
      id: "3",
      priority: "yellow",
      sender: "Admin John Doe",
      issue: "Assumpte de la reparació",
      createdAt: "12:45",
    },
    {
      id: "4",
      priority: "purple",
      sender: "Admin John Doe",
      issue: "Assumpte de la reparació",
      createdAt: "12:45",
    },
    {
      id: "5",
      priority: "none",
      sender: "Admin John Doe",
      issue: "Assumpte de la reparació",
      createdAt: "12:45",
    },
    {
      id: "6",
      priority: "red",
      sender: "Admin John Doe",
      issue: "Assumpte de la reparació",
      createdAt: "12:45",
    },
    {
      id: "7",
      priority: "green",
      sender: "Admin John Doe",
      issue: "Assumpte de la reparació",
      createdAt: "13:38",
    },
  ]);

  const handleSetIssues = (newIssues) => {
    setIssues(newIssues);
  };

  return {
    issues,
    handleSetIssues,
  };
};
