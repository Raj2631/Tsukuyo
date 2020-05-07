import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavItem.module.css';
export default function NavItem(props) {
  return (
    <li className={classes.NavItem}>
      <NavLink
        activeClassName={classes.active}
        exact={props.exact}
        to={props.link}
      >
        {props.children}
      </NavLink>
    </li>
  );
}
