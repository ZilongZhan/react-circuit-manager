import { useState } from "react";
import { Button } from "../Buttons";

import "./BurgerMenu.css";

export const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={`burger-menu${open ? "__open" : ""}`}>
      <button className="burger-menu__button" onClick={handleClick}>
        <img
          className="burger-menu__png"
          src="assets/icons/menu-hamburguesa.png"
          alt="menu-hamburguesa.png"
        />
      </button>
      {open && (
        <div className="burger-menu__content">
          <h1 className="burger-menu__tittle">CircuitSync</h1>
          <nav className="burger-menu__nav">
            <Button src={"/home"} label={"home"} color={"black-button"} />
            <Button src={"/"} label={"data-DISABLED"} color={"black-button"} />
            <Button src={"/trash"} label={"trash"} color={"black-button"} />
          </nav>
        </div>
      )}
    </div>
  );
};
