import React from 'react'
import { useLocation } from 'react-router-dom'

function Search() {
  const { pathname } = useLocation();

  switch (pathname) {
    case "/search":
      return "search";
    case "/images":
      return "images";
    default:
      return "Error...";
  }
}

export default Search