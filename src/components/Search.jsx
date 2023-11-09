import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import SearchContext from '../context/SearchContext';

function Search() {
  const { pathname } = useLocation();
  const { result, loading, search } = useContext(SearchContext);

  if (!search) {
    return "Search for something";
  }

  if (loading) {
    return "loading ..."
  }

  switch (pathname) {
    case "/search":
      return (
        <>
          <pre>{JSON.stringify(result, undefined, 2)}</pre>
        </>
      );
    case "/imagesearch":
      return (
        <>
          <pre>{JSON.stringify(result, undefined, 2)}</pre>
        </>
      );
    default:
      return "Error...";
  }
}

export default Search