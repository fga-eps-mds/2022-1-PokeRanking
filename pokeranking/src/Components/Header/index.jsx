import "./style.css";

import menuIcon from "../../Assets/menu.png";
import logoBranco from "../../Assets/logo-branco.png";
import sidebarLogo from "../../Assets/sidebar-logo.png";

import { SidebarData, SidebarDataBottom } from "./SidebarData";

import { Link } from "react-router-dom";
import { useState } from "react";

function Header(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const setPokemonName = (e) => {
    props.setPokemonName(e.target.value);
  };

  return (
    <>
      <header className="header">
        <div className="container-menu">
          <Link to="#">
            <img
              className="menu"
              src={menuIcon}
              alt="shape"
              onClick={showSidebar}
            />
          </Link>
        </div>
        <Link to="/">
          <div className="container-logo">
            <img className="logo-branco" src={logoBranco} alt="logo" />
          </div>
        </Link>
        <input
          className="search"
          type="text"
          placeholder="Search"
          onChange={setPokemonName}
        />
      </header>

      {/* Sidebar */}
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="sidebar-logo">
            <img src={sidebarLogo} alt="" />
            <Link to="#">
              <img
                className="menu"
                src={menuIcon}
                alt="shape"
                onClick={showSidebar}
              />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.Cname}>
                <Link to={item.path}>
                  <img src={item.icon} alt={item.title} />
                  <span className="nav-title">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="nav-menu-items" onClick={showSidebar}>
          {SidebarDataBottom.map((item, index) => {
            return (
              <li key={index} className={item.Cname}>
                <Link to={item.path}>
                  <img src={item.icon} alt={item.title} />
                  <span className="nav-title">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Header;
