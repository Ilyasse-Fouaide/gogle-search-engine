import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import SearchContext from '../context/SearchContext'

function Navbar() {
  const { search } = useContext(SearchContext);
  return (
    <div className='container mx-auto'>
      <div className='py-[12px] px-[6px]'>
        nav
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Navbar