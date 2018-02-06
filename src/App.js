import React, { Component } from 'react';
import Movie from './Movie';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=39c3e7befb37432f892ebd79b38ddfe6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!${  e}`);
    }
  }

  render() {
    console.log(this.state.movies);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.state.movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
          ))}
      </div>
    );
  }
}


export default App;
