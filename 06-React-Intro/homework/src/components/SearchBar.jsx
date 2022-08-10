import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  
  const search=()=>{
    const inputSearch= document.getElementById("search")
    props.onSearch(inputSearch.value)
    inputSearch.value="";
    inputSearch.focus()
  }
  return (<div>
    <input type="text" id="search" placeholder='Ciudad...'/>
    <button onClick={search}>Agregar</button>
    </div>)
};