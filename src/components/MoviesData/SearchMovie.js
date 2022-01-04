import React from 'react'
import Rate from './Rate'

const SearchMovie = ({setSearchByTitle,setSearchByRate, searchByRate,  }) => {
    return (
        <header>
      <input className='search' type='text' placeholder='Search movie'
      onChange={(e)=> setSearchByTitle(e.target.value)}
      />
      <div className='rating-search' style={{marginTop: 15 }}>
        <Rate setSearchByRate={setSearchByRate} rating= {searchByRate} />
      </div>
    </header>
    )
}

export default SearchMovie
