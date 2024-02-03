import { NavLink } from "react-router-dom";

function Nav() {
    return ( 
        <ul className="navList">
            <li>
                <NavLink to="/">Ana Səhifə</NavLink>
            </li>
            <li>
                <NavLink to="/rent">Kirayə ver</NavLink>
            </li>
            <li>
                <NavLink to="/order">Sifariş et</NavLink>
            </li>
            <li>
                <NavLink to="/about">Haqqımızda</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Əlaqə</NavLink>
            </li>
        </ul>
    );
}

export default Nav;