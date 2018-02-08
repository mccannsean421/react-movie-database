import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => (
  <div>
    <Link to={`/${movie.id}`}>
      <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt="" />
    </Link>
  </div>
);

export default Movie;

export const Poster = styled.img`
  box-shadow: 0 0 35px #000;
`;

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
};
