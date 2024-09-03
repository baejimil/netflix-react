import React from 'react'
import { Badge } from 'react-bootstrap'
import { useMovieGenreQuery } from '../../hooks/useMovieGenre'
import "./MovieCard.style.css"

const MovieCard = ({movie}) => {

  const {data: genreData} = useMovieGenreQuery();

  const showGenre=(genreIdList)=>{
    if(!genreData){
      return []
    }
    const genreNameList = genreIdList.map((id)=>{
      const genreObj = genreData.find((genre)=>genre.id === id)
      return genreObj.name;
    })

    return genreNameList
  }

  console.log(genreData)

  return (
    <div style={{backgroundImage: "url("+
    `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`+
    ")",
    }}
    className='movie-card'
    >
      <div className='overlay'>
          <h3>{movie.title}</h3>
          {showGenre(movie.genre_ids).map((id)=>
          (<Badge bg="danger">{id}</Badge>)
          )}
        <div>평점 : {movie.vote_average}</div>
        <div>조회 수 : {movie.popularity}</div>
        <div>{movie.adult?"만 19세 이상 관람가":"전체 이용가"}</div>
        <div>{movie.release_date}</div>
      </div>
    </div>
  )
}

export default MovieCard
