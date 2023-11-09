import React, { useContext, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import SearchContext from '../context/SearchContext'

const links = [
  { link: "Search", path: "search" },
  { link: "Images", path: "images" },
]

function Navbar() {
  const { search } = useContext(SearchContext);

  const [width, setWidth] = useState(null);
  const [position, setPosition] = useState(null);
  return (
    <div className='container mx-auto'>
      <div className='py-[12px] px-[6px]'>
        <div className='flex items-center relative'>
          {links.map(({ link, path }, key) =>
            <NavLink to={path} className={'p-[10px] uppercase text-slate-400 font-medium'} key={key}
              onClick={(e) => {
                setWidth(e.currentTarget.offsetWidth);
                setPosition(e.currentTarget.offsetLeft)
              }}
            >{link}</NavLink>
          )}
          <div style={{ width: !width ? "79px" : width, left: !position ? "0" : position }} className='absolute -bottom-0 rounded-full h-[3px] bg-blue-500 transition-all duration-200'></div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Navbar