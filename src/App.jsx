import React, { useState, useEffect } from "react";
import { Delete, Get, Post, Update } from "./services";
import { STATUS } from "./data";
import { TicketForm } from "./components";

import "./App.css";
import "./sanitize.css";

function App() {
  // Hooks
  const [issues, setIssues] = useState([]);
  const [users, setUsers] = useState([]);
  

  // Issues

  const handleDeleteIssues = async () => {
    await Delete("issues", 1);
  };

  // Users

  useEffect(() => {
    const fetchUsers = async () => {
      const usersFromService = await Get("users");
      setUsers(usersFromService);
    };

    fetchUsers();
  }, [users]);

  const testUser = {
    id: "1",
    name: "John Doe",
    email: "JohnDoe@gmail.com",
  };

  const handleResetUsers = async () => {
    await Post("users", testUser);
  };

  const handleDeleteUsers = async () => {
    await Delete("users", 1);
  };

  // Form issue

  

  const handleSubmit = (e) => {
    e.preventDefault();
    Post("issues", newIssue);
  };

  // Edit issue

  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" onChange={handleChange} />
        </label>
        <label>
          Description:
          <textarea name="description" onChange={handleChange} />
        </label>
        <label>
          Priority:
          <select
            name="priority"
            value={newIssue.priority}
            onChange={handleChange}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form> */}
      <TicketForm />
    </>
  );
}

export default App;
