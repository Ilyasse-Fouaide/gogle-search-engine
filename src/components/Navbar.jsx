import React, { useContext, useEffect, useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import SearchContext from '../context/SearchContext'
import Links from './Links';
import { FiSearch } from 'react-icons/fi';

const links = [
  { link: "Search", path: "search" },
  { link: "Images", path: "imagesearch" },
]

function Navbar() {
  const { setPathEndPoint, setSearch } = useContext(SearchContext);
  const { pathname, search } = useLocation();
  const params = new URLSearchParams(search).get("q");

  const [width, setWidth] = useState(null);
  const [position, setPosition] = useState(null);
  const [input, setInput] = useState(params);

  useEffect(() => { setPathEndPoint(pathname) }, [pathname]);

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter" && input !== null && params !== null) {
      window.location.href = `${pathname}?q=${input}`
    }
  }

  return (
    <div className='container mx-auto'>
      <div className='py-[12px] px-[6px]'>
        <div className='relative'>
          <input type="text" placeholder='Ask me Anything...' value={input} onKeyDown={(e) => handleOnKeyPress(e)} onChange={(e) => setInput(e.target.value)} autoFocus className='my-[12px] rounded-xl py-[8px] px-10 w-[600px] outline-0 border dark:bg-slate-950 dark:border-slate-700' />
          <span className='absolute top-1/2 -translate-y-1/2 left-3'>
            <FiSearch className='cursor-pointer text-[18px] dark:text-slate-500' />
          </span>
        </div>
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