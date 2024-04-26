export const Form = () => {
  return (
    <aside className="aside-content">
      <div className="form-container">
        <form action="main.html" className="login-form">
          <div className="heading-container">
            <h1>Inicia sessió</h1>
          </div>
          <div className="input-container">
            <label htmlFor="login-name">Nom d'usuari:</label>
            <input id="login-name" type="text" />
          </div>
          <div className="input-container">
            <label htmlFor="login-pwd">Contrasenya:</label>
            <input id="login-pwd" type="password" />
          </div>
          <div className="button-container">
            <button type="submit" className="login-button">
              <div className="button-text">Login</div>
            </button>
          </div>
        </form>
      </div>
    </aside>
  );
};
