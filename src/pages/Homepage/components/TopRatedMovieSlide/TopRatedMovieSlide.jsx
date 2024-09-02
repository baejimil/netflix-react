import { Alert } from 'bootstrap'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useTopRatedMoviesQuery } from '../../../../hooks/useTopRatedMovies';
import MovieCard from '../MovieCard/MovieCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

const TopRatedMovieSlide = () => {

  const {data, isLoading, isError, error} = useTopRatedMoviesQuery()

    console.log("top:" ,data)

    if(isLoading){
        return <h1>isLoading...</h1>
    }
    if(isError){
        return <Alert variant="danger">{error.message}</Alert>
    }

  return (
    <div>
      <div>
        <h3>Top Rated Movies</h3>
        <Carousel
          centerMode={true}
          itemClass="movie-slider p-1"
          containerClass="carousel-container"
          responsive={responsive}
        >
          {data.results.map((movie, index)=><MovieCard movie={movie} key={index} />)}
        </Carousel>
      </div>
    </div>
  )
}

export default TopRatedMovieSlide
