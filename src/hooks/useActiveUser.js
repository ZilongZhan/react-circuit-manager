import { useState } from "react";

export const useActiveUser = () => {
  const [activeUser, setActiveUser] = useState(null);

  const handleActiveUser = (user) => {
    setActiveUser(user);
  };

  return { activeUser, handleActiveUser };
};
