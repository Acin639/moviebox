import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Banner() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=demo`)
      .then(res => res.json())
      .then(data => setSlides(data.results.slice(0, 5)));
  }, []);

  return (
    <Swiper className="banner-swiper" spaceBetween={0} slidesPerView={1} autoplay>
      {slides.map(movie => (
        <SwiperSlide key={movie.id}>
          <header
            className="banner"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
            }}
          >
            <div className="banner-content">
              <h1>{movie.title}</h1>
            </div>
          </header>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}