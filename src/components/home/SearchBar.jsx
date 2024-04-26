import "./SearchBar.css";

export const SearchBar = () => {
  return (
    <div className="search-bar__container">
      <input className="search-bar" type="text" placeholder="Filtrar per:" />
    </div>
  );
};
