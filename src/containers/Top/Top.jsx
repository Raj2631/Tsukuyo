import React, { Component } from 'react';
import classes from './Top.module.css';
import AnimeItem from '../../components/AnimeItem/AnimeItem';
import Spinner from '../../components/UI/Spinner/Spinner';

export default class Top extends Component {
  state = {
    animes: null,
    error: false,
  };

  async componentDidMount() {
    try {
      const res = await fetch('https://api.jikan.moe/v3/top/anime/1/tv');
      const data = await res.json();
      this.setState({ animes: data.top });
    } catch (e) {
      alert(e);
      this.setState({ error: true });
    }
  }

  render() {
    let animeItems = <Spinner />;
    if (this.state.animes) {
      animeItems = this.state.animes.map((anime) => {
        return (
          <AnimeItem
            key={anime.mal_id}
            img={anime.image_url}
            title={anime.title}
          />
        );
      });
    }
    return (
      <React.Fragment>
        <h1 style={{ margin: '0 0 50px 27px', textAlign: 'left' }}>Top</h1>
        <div className={classes.Container}>{animeItems}</div>
      </React.Fragment>
    );
  }
}
