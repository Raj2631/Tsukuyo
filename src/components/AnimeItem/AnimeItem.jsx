import React from 'react';
import classes from './AnimeItem.module.css';

export default function AnimeItem(props) {
  return (
    <div className={classes.AnimeItem}>
      <img src={props.img} alt={props.title} />
    </div>
  );
}
