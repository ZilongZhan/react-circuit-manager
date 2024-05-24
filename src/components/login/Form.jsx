import React, { useState } from "react";
import { getUsers } from "../../services/userServices";

export const Form = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const users = await getUsers();
      const authenticatedUser = users.find(
        (user) => user.name === name && user.password === password
      );

      if (authenticatedUser) {
        console.log(name, password);
        // CONTINURAR QUAN LA AUTENTIFICACIO ES EXITOSA
      } else {
        setError("Authentication failed");
        console.log(name, password);
      }
    } catch (error) {
      setError("An error occurred during authentication");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="heading-container">
        <h1>Inicia sessió</h1>
      </div>
      <div className="input-container">
        <label htmlFor="login-name">Nom d'usuari:</label>
        <input
          id="login-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="login-pwd">Contrasenya:</label>
        <input
          id="login-pwd"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      <div className="button-container">
        <button type="submit" className="login-button">
          <div className="button-text">Login</div>
        </button>
      </div>
    </form>
  );
};
