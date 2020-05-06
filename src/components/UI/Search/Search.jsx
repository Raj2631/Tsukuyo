import React from 'react';
import classes from './Search.module.css';

export default function Search(props) {
  return (
    <input className={classes.Search} type="text" placeholder="Search.." />
  );
}
