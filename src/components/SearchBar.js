import React from 'react';

const SearchBar = (props) => {


  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.isAlphabetical} onChange={props.changeAlphabetical}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={!props.isAlphabetical} onChange={props.changeAlphabetical}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.changeType} value={props.currentType}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
