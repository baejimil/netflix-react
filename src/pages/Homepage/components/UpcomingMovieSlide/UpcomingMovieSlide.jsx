import React from 'react'
import { Alert } from 'bootstrap'
import 'react-multi-carousel/lib/styles.css';
import { useUpcomingMoviesQuery } from '../../../../hooks/useUpcomingMovies'
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';

const UpcomingMovieSlide = () => {

    const {data, isLoading, isError, error} = useUpcomingMoviesQuery()

    console.log("upcoming:" ,data)

    if(isLoading){
        return <h1>isLoading...</h1>
    }
    if(isError){
        return <Alert variant="danger">{error.message}</Alert>
    }

  return (
    <div>
      <MovieSlider title={"Upcoming Movies"} movies={data.results} responsive={responsive} />
    </div>
  )
}

export default UpcomingMovieSlide
