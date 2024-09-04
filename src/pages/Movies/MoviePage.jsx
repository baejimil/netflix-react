import { Alert } from 'bootstrap'
import React from 'react'
import { Col, Container, DropdownButton, Row, Spinner, Dropdown } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import { useSearchMovieQuery } from '../../hooks/useSearchMovie'
import MovieCard from "../../common/MovieCard/MovieCard"
import ReactPaginate from 'react-paginate';
import { useState } from 'react'

const MoviePage = () => {

  const [query, setQuery] = useSearchParams()

  const [page, setPage] = useState(1)

  const keyword = query.get('q');

  const {data, isLoading, isError, error} = useSearchMovieQuery({keyword, page})
  
  const totalPages = Math.min(data?.total_pages || 1, 12);

  const handlePageClick=({selected})=>{
     setPage(selected+1)
  }
console.log("ddddd", data?.results)
  if(isLoading){
    return (
      <div className='spinner-area'>
        <Spinner
          animation='border'
          variant='danger'
          style={{width:"5rem", height:"5rem"}}
        />
      </div>
    )
  }

  if(data?.results.length===0){
    alert("검색 결과가 없습니다.")
    setQuery('')
  }

  if(isError){
    return <Alert variant="danger">{error.message}</Alert>
  }
  return (
    <Container>
      <Row>
        <Row>
          <Col>
            <DropdownButton title='정렬' variant='outline-danger'>
              <Dropdown.Item eventKey="1">내림차순</Dropdown.Item>
              <Dropdown.Item eventKey="2">오름차순</Dropdown.Item>  
            </DropdownButton>
            
          </Col>
          <Col>
            <DropdownButton title='장르 선택' variant='outline-danger'>
              <Dropdown.Item eventKey="1">War</Dropdown.Item>
              <Dropdown.Item eventKey="2">Action</Dropdown.Item>  
            </DropdownButton>
          </Col>
        </Row>
        <Row lg={8} xs={12}>
          {data?.results.map((movie, index)=> 
          <Col key={index} lg={4} xs={4}>
            <MovieCard movie={movie}></MovieCard>
          </Col>)}
        </Row>
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={totalPages}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
          forcePage={page-1}
        />
      </Row>
    </Container>
  )
}

export default MoviePage
