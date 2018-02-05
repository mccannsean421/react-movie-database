import React, { Component } from 'react';
import Movie, { component } from './Movie'
import logo from './logo.svg';
import './App.css';

const movies = [
  {
    id: 1,
    title: 'Star Wars',
    desc: 'Space movie'
  },
  {
    id: 2,
    title: 'Spider Man'
  },
  {
    id: 3,
    title: 'Men In Black'
  },
]

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} desc={movie.desc} />
          ))}
      </div>
    );
  }
}


export default App;
