import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Nav from "./Nav";
import UserIcon from "../assets/svgs/UserIcon"
import { useState } from "react";

function Header() {
    const [click, setClick] = useState(false)
    return ( 
        <header>
            <div className="container">
            <div className="header_all">
                <div className="logo">
                    <Logo/>
                </div>
                <div className="navigation">
                    <Nav/>
                </div>
                <div className="log_reg">
                    <NavLink to={"/login"} className="button secondary_button">Giriş</NavLink>
                    <NavLink to={"/register"} className="button primary_button">Qeydiyyat</NavLink>
                </div>
                <div className="mobile_part">
                    <button className="hamburger" onClick={()=>setClick(!click)}>
                        <span className={click ? "active" : ""}></span>
                        <span className={click ? "passive" : ""}></span>
                        <span className={click ? "active" : ""}></span>
                    </button>
                    <div className={click ? "mobile_overlay active_overlay" : "mobile_overlay"} onClick={()=>setClick(!click)}>
                        <div className="mobile_part_left">
                            <div className="title">
                                <h3>Navigation</h3>
                                <NavLink to={"/login"}><UserIcon/></NavLink>
                            </div>
                            <Nav/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
           
        </header>
    );
}

export default Header;