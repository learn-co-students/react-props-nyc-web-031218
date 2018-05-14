import React from 'react';
import ReactDOM from 'react-dom';

class MovieCard extends React.Component{
  render(){
    return (
      <div className="movie-card">
        <img
          src={this.props.poster}
          alt={this.props.title}
        />
        <h2>{this.props.title}</h2>
        <small>Genres: {this.props.genres.join(", ")}</small>
      </div>
    );
  }
}

const sweetGenres = ['Action', 'Adventure', 'Horror'];

ReactDOM.render(
  
    <div>
      <MovieCard
        title="Henry's World"
        poster="http://image.tmdb.org/t/p/w342/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg"
        genres={sweetGenres}
      />
      <MovieCard
        title="Jurasic World"
        poster="http://image.tmdb.org/t/p/w342/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg"
        genres={sweetGenres}
      />
    </div>,

  document.getElementById('root')
);
