import { useContext } from "react";
import { UserDataContext } from "../../contexts/userData";
import { UIContext } from "../../contexts/UI";

const Header = () => {
  const { changeNav, nav, toggle } = useContext(UIContext);
  const { about } = useContext(UserDataContext);
  return (
    <header className="header theme-bg">
      <div className="logo">{about.name.split(" ")[0]}</div>
      <div className="menu-toggle">
        <button
          className={`menu-button ${toggle ? "menu-button--open" : ""}`}
          onClick={() => changeNav(nav, !toggle)}
        >
          <span>Menu</span>
        </button>
      </div>
    </header>
  );
};
export default Header;
