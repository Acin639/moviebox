import React, { useEffect, useState } from 'react';

export default function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${fetchUrl}?api_key=f43ec82a5f24fe6190891894b7436c7a`)
      .then(r => r.json())
      .then(d => setMovies(d.results || []));
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map(m => (
          <div className="movie-card" key={m.id}>
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
            />
            <p className="movie-title">{m.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
