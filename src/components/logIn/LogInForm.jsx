export const LogInForm = () => {
  return (
      <form className="login-form">
        <div className="heading-container">
          <h1>Inicia sesión</h1>
        </div>
        <div className="input-container">
          <label htmlFor="login-name">Nombre de usuario:</label>
          <input id="login-name" type="text" />
        </div>
        <div className="input-container">
          <label htmlFor="login-pwd">Contraseña:</label>
          <input id="login-pwd" type="password" />
        </div>
        <div className="button-container">
          <button type="submit" className="login-button">
            <div className="button-text">Login</div>
          </button>
        </div>
      </form>
  );
};
