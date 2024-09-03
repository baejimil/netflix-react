import { Alert } from 'bootstrap'
import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';
import { useTopRatedMoviesQuery } from '../../../../hooks/useTopRatedMovies';

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
          <MovieSlider title={"Top Rated Movies"} movies={data.results} responsive={responsive} />
    </div>
  )
}

export default TopRatedMovieSlide
