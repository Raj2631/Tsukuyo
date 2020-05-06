import React from 'react';
import classes from './HamburgerToggle.module.css';

const HamburgerToggle = (props) => (
  <div onClick={props.click} className={classes.Hamburger}>
    <div className={classes.Line}></div>
    <div className={classes.Line}></div>
    <div className={classes.Line}></div>
  </div>
);

export default HamburgerToggle;
