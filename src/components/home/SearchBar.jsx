import { Button } from "../../shared";

import "./SearchBar.css";

export const SearchBar = ({ handleNewFilterValue }) => {
  const handleChangeFilterValue = (event) => {
    handleNewFilterValue(event.target.value);
  };

  return (
    <div className="search-bar__container">
      <select className="priority-dropdown" onChange={handleChangeFilterValue}>
        <option value="">Default</option>
        <option className="priority-none" value="none">
          None
        </option>
        <option className="priority-red" value="red">
          Red
        </option>
        <option className="priority-green" value="green">
          Green
        </option>
        <option className="priority-yellow" value="yellow">
          Yellow
        </option>
        <option className="priority-purple" value="purple">
          Purple
        </option>
      </select>
      <input
        type="text"
        className="search-bar"
        placeholder="Filtrar per:"
        onInput={handleChangeFilterValue}
      />
      <div className="button-container">
        <Button src={null} label="Create Issue ➕" color="red-button" />
      </div>
    </div>
  );
};
