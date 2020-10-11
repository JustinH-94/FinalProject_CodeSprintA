import React, { useState } from "react";
import { Link } from "react-router-dom";
import menuIcon from "../image/menuicon.jpg";
import "../css/header.css";
import sidebarData from "../data/sidebar-data";
import lunchMenuItems from "../data/lunch-menu-items";
import X from "../image/X_exit.png";
import "../css/navbar.css";
function Header() {
  const [sideBar, setSideBar] = useState(false);
  const showSidebar = () => setSideBar(!sideBar);
  return (
    <header>
      <div className="navbar">
        <Link to="#">
          <img
            src={menuIcon}
            className="menuIcon"
            width="15"
            onClick={showSidebar}
          ></img>
        </Link>
      </div>
      <nav className={sideBar ? `nav-menu active` : `nav-menu`}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <img className="X" src={X}></img>
            </Link>
          </li>
          {sidebarData.map((data, index) => {
            return (
              <li key={index} className={data.cName}>
                <Link to={data.path}>
                  <span>{data.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <span className="siteTitle">
        <Link to="/" style={{ textDecoration: `none` }} className="link">
          COOKInEveryone
        </Link>
      </span>
    </header>
  );
}

export default Header;
