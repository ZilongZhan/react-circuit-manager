import { useState, useEffect } from "react";
import { Get } from "../services";

export const useUsers = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const usersFromService = await Get("users");
    setUsers(usersFromService);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSetUsers = (newUsers) => {
    setUsers(newUsers);
  };

  return {
    users,
    handleSetUsers,
  };
};
