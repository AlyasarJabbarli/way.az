import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png"

function Logo() {
    return ( 
        <NavLink to={"/"}>
            <img src={logo} alt="way.az - rent a car company"/>
        </NavLink>
    );
}

export default Logo;