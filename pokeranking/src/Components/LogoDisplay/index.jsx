import React from "react";
import "./style.css";
import Logo_Principal from "../../Assets/Logo_Principal.png";

function LogoDisplay() {

    return (
        <ul className="bodyLogo">
            <img
                className="logoPrincipal"
                src={Logo_Principal}
                alt="Logo Principal"
            />
        </ul>
    );
}

export default LogoDisplay;
