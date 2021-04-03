import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {

    return (
    <input 
     key="random1"
     value={keyword}
     placeholder={"search movie"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar