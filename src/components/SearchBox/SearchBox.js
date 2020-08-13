import React, { useState } from 'react';
import './SearchBox.scss'

function SearchBox({ search, setSearch }) {



  return (
    <div>
      <i className="fas fa-search"></i>
      <input
        className="search-text"
        type="search"
        placeholder="Search"
        value={search}
        onChange={e => setSearch(e.target.value)} />
    </div>
  )
}

export default SearchBox
