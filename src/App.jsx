import React, { useState, useEffect } from "react";
import { Delete, Get, Post, Update } from "./services";

import "./App.css";
import "./sanitize.css";

function App() {
  const STATUS = {
    open: "open",
    closed: "closed",
    deleted: "deleted",
  };

  // Hooks

  const [issues, setIssues] = useState([]);
  const [users, setUsers] = useState([]);
  const [newIssue, setNewIssue] = useState({
    title: "No title",
    description: "No description",
    status: STATUS.open,
    priority: "medium",
    verified: false,
  });

  // Issues

  useEffect(() => {
    const fetchIssues = async () => {
      const issuesFromService = await Get("issues");
      setIssues(issuesFromService);
    };

    fetchIssues();
  }, [issues]);

  const testIssue = {
    id: "1",
    title: "Issue 1",
    description: "This is the first issue",
    status: "open",
    priority: "high",
    verified: false,
    created_at: "201",
  };

  const handleResetIssues = async () => {
    await Post("issues", testIssue);
  };

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

  const handleChange = (e) => {
    setNewIssue({
      ...newIssue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const issueWithTimestamp = {
      ...newIssue,
      created_at: new Date().toISOString(),
    };
    setNewIssue(issueWithTimestamp);
    Post("issues", issueWithTimestamp);
  };

  // Edit issue

  const handleEditIssue = async (id) => {
    const issue = await Get("issues", id);
    console.log(issue);
    const editedIssue = {
      ...issue["0"],
      title: "Edited issue",
    };
    console.log(editedIssue);
    await Update("issues", id, editedIssue);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
      </form>
    </>
  );
}

export default App;
