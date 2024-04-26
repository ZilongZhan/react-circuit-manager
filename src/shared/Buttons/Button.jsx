import { useNavigate } from "react-router-dom";

import "./Button.css";

export const Button = ({ src, label, color }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(src);
  };

  return (
    <button className={`button ${color}`} onClick={handleClick}>
      <div className="text">{label}</div>
    </button>
  );
};
