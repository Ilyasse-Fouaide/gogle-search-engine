import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SearchContext from '../context/SearchContext'
import Links from './Links';
import { FiSearch } from 'react-icons/fi';

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

  const submitForm = () => {
    console.log("Submited")
  }

  return (
    <div className='container mx-auto'>
      <div className='py-[12px] px-[6px]'>
        <div className='relative'>
          <form onSubmit={submitForm}>
            <input type="text" placeholder='Ask me Anything...' className='my-[12px] rounded-xl py-[8px] px-10 w-[600px] outline-0 border dark:bg-slate-950 dark:border-slate-700' />
          </form>
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