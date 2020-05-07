import React from 'react';
import NavItem from './NavItem/NavItem';
import classes from './NavItems.module.css';

export default function NavItems(props) {
  return (
    <ul className={classes.NavItems}>
      <NavItem exact link="/">
        Popular
      </NavItem>
      <NavItem link="/top">Top</NavItem>
      <NavItem link="/favorites">Favorites</NavItem>
    </ul>
  );
}
