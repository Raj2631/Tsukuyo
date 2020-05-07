import React, { Component } from 'react';
import Toolbar from '../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

class Layout extends Component {
  render() {
    const style = {
      minHeight: '100vh',
    };

    return (
      <div style={style}>
        <Toolbar />
        <main className={classes.Content}>
          <section className={classes.Container}>{this.props.children}</section>
        </main>
      </div>
    );
  }
}

export default Layout;
