import React, { useState } from 'react'
import SearchContext from "./SearchContext";

const Provider = ({ children }) => {
  const [search, setSearch] = useState("Nike");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

export default Provider