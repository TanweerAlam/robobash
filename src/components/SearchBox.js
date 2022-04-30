import React from 'react'
import './SearchBox.css'

function SearchBox({handleSearch}) {
  return (
    <div className='searchbox'>
        <input 
            placeholder='Search here...'
            type="search"
            // value={}
            onChange={handleSearch}
        />
    </div>
  )
}

export default SearchBox