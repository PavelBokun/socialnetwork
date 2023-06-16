import React from "react";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { Friends } from "../../Redux/Friends/Friends";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <div >
          < NavLink to="/profile" className = { isActive =>isActive ? classes.active : classes.item }>Profile</NavLink>
        </div>
        <div>
          <NavLink to="/dialogs" className = {  isActive =>isActive  ? classes.active : classes.item }>Messages</NavLink>
        </div>
        <div>
          <NavLink to="/news" className = {  isActive =>isActive  ? classes.active : classes.item }>News</NavLink>
        </div>
        <div>
          <NavLink to="/music" className = { isActive =>isActive ? classes.active : classes.item }>Music</NavLink>
        </div>
        <div>
          <NavLink to="setting" className = { isActive =>isActive ? classes.active : classes.item }>Setting</NavLink>
        </div>
        <div><Friends arrfriends={[]} /></div>
      </div>
    </nav>
  );
};
export default NavBar;
