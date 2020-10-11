import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [sideBar, setSideBar] = useState(false);
  const showSidebar = () => setSideBar(!sideBar);
  return <></>;
}

export default NavBar;
