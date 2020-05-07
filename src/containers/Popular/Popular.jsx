import React, { Component } from 'react';
import AnimeItem from '../../components/AnimeItem/AnimeItem';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Popular.module.css';

export default class Popular extends Component {
  state = {
    animes: null,
    error: false,
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        'https://api.jikan.moe/v3/top/anime/1/bypopularity'
      );
      const data = await res.json();
      console.log(data.top);
      this.setState({ animes: data.top });
    } catch (e) {
      alert(e);
      this.setState({ error: true });
    }
  }

  render() {
    let animeItems;
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
    } else {
      animeItems = <Spinner />;
    }

    return <div className={classes.Container}>{animeItems}</div>;
  }
}
