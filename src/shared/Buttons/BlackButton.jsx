import "./Button.css";

export const BlackButton = ({ src, text }) => {
  return (
    <button
      className="button black-button"
      onClick={() => (window.location.href = src)}
    >
      <div className="text">{text}</div>
    </button>
  );
};
``;
