import "./style.css";

import shape from "../../Assets/shape.png";
import logoBranco from "../../Assets/logo-branco.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="container-menu">
        <img className="menu" src={shape} alt="shape" />
      </div>
      <Link to="/">
        <div className="container-logo">
          <img className="logo-branco" src={logoBranco} alt="logo" />
        </div>
      </Link>
      <input className="search" type="text" placeholder="Search" />
    </div>
  );
}

export default Header;
