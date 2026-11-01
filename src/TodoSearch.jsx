import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {
  
  return (
    <input
      onChange={(event) => {setSearchValue(event.target.value)}}
      value={searchValue}
      placeholder="Estudiar react"
      className="TodoSearch"
    />
  );
}

export { TodoSearch };