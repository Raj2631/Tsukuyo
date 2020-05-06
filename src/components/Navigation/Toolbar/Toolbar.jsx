import React from 'react';
import Search from '../../UI/Search/Search';
import HamburgerToggle from '../Sidebar/HamburgerToggle/HamburgerToggle';
import classes from './Toolbar.module.css';

const Toolbar = (props) => {
  return (
    <div className={classes.Toolbar}>
      <HamburgerToggle />
      <Search />
    </div>
  );
};

export default Toolbar;
