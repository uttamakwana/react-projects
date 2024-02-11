/* eslint-disable react/prop-types */
import { useState } from "react";
import { MenuIcon } from "../../constants/icons.js";
import menus from "./data.js";
// css
import "./side-nav.css";
// icons
import { DownIcon, UpIcon, CloseIcon } from "../../constants/icons.js";

const MenuItem = ({ item }) => {
  const [displayCurrentMenu, setDisplayCurrentMenu] = useState({});

  // handle toggle
  function handleToggle(item) {
    setDisplayCurrentMenu({
      ...displayCurrentMenu,
      [item.label]: !displayCurrentMenu[item.label],
    });
  }

  return (
    <li className="menu-list-item">
      <p className="flex ai-center gap-4">
        <span>{item.label}</span>
        {/* {item && item.children && item.children.length > 0 ? (
          <DownIcon onClick={() => handleToggle(item)} className="text" />
        ) : displayCurrentMenu[item.label] ? (
          <UpIcon className="text" />
        ) : (
          ""
        )} */}
        {item && item.children && item.children.length > 0 ? (
          <span
            onClick={() => handleToggle(item)}
            className="icon-container flex-center"
          >
            {displayCurrentMenu[item.label] ? <UpIcon /> : <DownIcon />}
          </span>
        ) : (
          <></>
        )}
      </p>
      {item.children &&
        item.children.length > 0 &&
        displayCurrentMenu[item.label] && (
          <div className="menu-dropdown">
            <ul className="menu-dropdown-list">
              {item.children.map((child, index) => (
                <MenuItem key={index} item={child} />
              ))}
            </ul>
          </div>
        )}
    </li>
  );
};

const SideNav = () => {
  const [menu, setMenu] = useState(false);
  const renderMenu = (menuData) => {
    if (!menuData || menuData.length === 0) {
      return <p className="error">No menu found!</p>;
    }

    return (
      <ul className="menu-list">
        {menuData.map((menu, index) => (
          <MenuItem key={index} item={menu} />
        ))}
      </ul>
    );
  };

  return (
    <nav className="side-nav-container">
      {menu ? (
        <CloseIcon
          onClick={() => setMenu(false)}
          className="side-nav-menu-icon"
        />
      ) : (
        <MenuIcon
          className="side-nav-menu-icon"
          onClick={() => setMenu(true)}
        />
      )}
      {menu && renderMenu(menus)}
    </nav>
  );
};

export default SideNav;
