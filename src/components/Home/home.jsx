import React from 'react'
import Cards from '../Cards/Cards'
import Search from '../Search/Search'
import {useSelector} from "react-redux"

function Home() {

  const movies = useSelector((state) => state.reducer.movies)
  
  return (
    <>
      <Search />
      <Cards movies={movies}/>
    </>
  )
}

export default Home