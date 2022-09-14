import "./style.css";

import menuIcon from "../../Assets/menu.png";
import logoBranco from "../../Assets/logo-branco.png";
import sidebarLogo from "../../Assets/sidebar-logo.png";
import comoUsarIcon from "../../Assets/como-usar.png"
import closeIcon from "../../Assets/close.png"

import { SidebarData } from "./SidebarData";

import { Link } from "react-router-dom";
import { useState } from "react";
import ComoUsar from "../ComoUsar";

function Header(props) {
  const [sidebar, setSidebar] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const setPokemonName = (e) => {
    props.setPokemonName(e.target.value);
  };

  function handleComoUsarClick() {
    setModalOpened(true);
  }

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

      <ComoUsar 
        opened={modalOpened}
        setOpened={setModalOpened}
      />

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
          <li className="nav-text">
            <Link to="" onClick={handleComoUsarClick}>
              <img src={comoUsarIcon} alt="Como Usar" />
              <span className="nav-title">Como Usar</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="#">
              <img src={closeIcon} alt="Fechar Menu" />
              <span className="nav-title">Fechar Menu</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
