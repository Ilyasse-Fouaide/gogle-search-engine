import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SearchContext from '../context/SearchContext'
import Links from './Links';
import { FiSearch } from 'react-icons/fi';

const links = [
  { link: "Search", path: "search" },
  { link: "Images", path: "/imagesearch" },
]

function Navbar() {
  const { setPathEndPoint, setSearch } = useContext(SearchContext);
  const { pathname } = useLocation();
  const [width, setWidth] = useState(null);
  const [position, setPosition] = useState(null);
  const [q, setQ] = useState(null);
  const [active, setIsActive] = useState(false);

  useEffect(() => { setPathEndPoint(pathname) }, [pathname]);
  useEffect(() => {
    const htmlTag = document.querySelector('html')
    if (active) {
      htmlTag.classList.add('dark');
    } else {
      htmlTag.classList.remove('dark');
    }
  }, [active])

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter" && q !== null) {
      setSearch(q);
    }
  }

  return (
    <div className='container mx-auto'>
      <div className='py-[12px] px-[6px]'>
        <div className='relative flex items-center justify-between'>
          <div>
            <input type="text" placeholder='Ask me Anything...' onKeyDown={(e) => handleOnKeyPress(e)} value={q} onChange={(e) => setQ(e.target.value)} className='my-[12px] rounded-xl py-[6px] px-10 w-[600px] outline-0 border dark:bg-slate-950 dark:border-slate-700' />
            <span className='absolute top-1/2 -translate-y-1/2 left-3'>
              <FiSearch className='cursor-pointer text-[18px] dark:text-slate-500' />
            </span>
          </div>
          <div>
            <div className={`relative rounded-full w-[50px] h-[30px] transition-all duration-200 ${active ? "bg-slate-100" : "bg-slate-800"}`}>
              <div className={`rounded-full w-[25px] h-[25px] transition-all duration-200 absolute top-1/2 -translate-y-1/2 ${!active ? "left-1 bg-sky-100" : "right-1 bg-sky-800"} cursor-pointer`} onClick={() => setIsActive(!active)}></div>
            </div>
          </div>
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