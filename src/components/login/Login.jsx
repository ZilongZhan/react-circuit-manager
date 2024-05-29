import { Footer } from "./Footer";
import { Form } from "./Form";

import "./Login.css";

export const Login = () => {
  return (
    <div className="bodyContent">
      <Footer />
      <aside className="aside-content">
        <div className="form-container">
          <Form />
        </div>
      </aside>
    </div>
  );
};
