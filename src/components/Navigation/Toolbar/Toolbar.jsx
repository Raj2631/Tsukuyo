import React from 'react';
import Search from '../../UI/Search/Search';
import HamburgerToggle from '../Sidebar/HamburgerToggle/HamburgerToggle';
import classes from './Toolbar.module.css';
import NavItems from '../NavItems/NavItems';

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <HamburgerToggle />
      <nav className={classes.DesktopOnly}>
        <NavItems />
      </nav>
      <h2 className={classes.Title}>The MovieMania</h2>
      <Search />
    </header>
  );
};

export default Toolbar;
