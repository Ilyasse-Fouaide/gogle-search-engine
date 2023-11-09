import React, { useContext, useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import SearchContext from '../context/SearchContext'
import Links from './Links';

const links = [
  { link: "Search", path: "search" },
  { link: "Images", path: "images" },
]

function Navbar() {
  const { setPathEndPoint } = useContext(SearchContext);
  const { pathname } = useLocation();
  const [width, setWidth] = useState(null);
  const [position, setPosition] = useState(null);

  useEffect(() => { setPathEndPoint(pathname) }, [pathname]);

  return (
    <div className='container mx-auto'>
      <div className='py-[12px] px-[6px]'>
        <div className='flex items-center relative'>
          <Links links={links} width={width} position={position} setWidth={setWidth} setPosition={setPosition} />
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Navbar