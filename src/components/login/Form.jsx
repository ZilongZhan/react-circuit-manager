import React, { useState } from "react";
export const Form = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Password: ${password}`);
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)} className="login-form">
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
      <div className="button-container">
        <button type="submit" className="login-button">
          <div className="button-text">Login</div>
        </button>
      </div>
    </form>
  );
};
