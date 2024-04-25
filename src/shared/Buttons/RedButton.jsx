import "./Button.css";

export const RedButton = ({ src, text }) => {
  return (
    <button className="button red" onClick={() => (window.location.href = src)}>
      <div className="text">{text}</div>
    </button>
  );
};
