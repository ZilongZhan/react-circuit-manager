import { useState } from "react";

export const useFilter = () => {
  const [newFilter, setNewFilter] = useState("");

  const handleNewFilterValue = (newValue) => {
    setNewFilter(newValue);
  };

  return {
    newFilter,
    handleNewFilterValue,
  };
};
