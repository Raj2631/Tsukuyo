import React, { Component } from 'react';
import AnimeItems from '../../components/AnimeItems/AnimeItems';

export default class Popular extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        'https://api.jikan.moe/v3/top/anime/1/bypopularity'
      );
      const data = await res.json();
      this.setState({ movies: data.top });
    } catch (e) {
      alert(e);
    }
  }

  render() {
    return <div></div>;
  }
}
