import "./style.css";

import shape from "../../Assets/shape.png";
import logoBranco from "../../Assets/logo-branco.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img className="menu" src={shape} alt="shape" />
      <Link to="/">
        <img className="logo" src={logoBranco} alt="logo" />
      </Link>
      <input className="search" type="text" placeholder="Search" />
    </div>
  );
}

export default Header;
