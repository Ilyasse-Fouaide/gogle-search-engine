import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import SearchContext from '../context/SearchContext'

function Navbar() {
  const { search } = useContext(SearchContext);
  return (
    <div>
      <div>nav</div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Navbar