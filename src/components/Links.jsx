import React from 'react'
import { NavLink } from 'react-router-dom';

function Links({ links, width, position, setWidth, setPosition }) {
  return (
    <>
      {links.map(({ link, path }, key) =>
        <NavLink to={path} className={'p-[10px] uppercase text-slate-400 dark:text-slate-500 font-medium'} key={key}
          onClick={(e) => {
            setWidth(e.currentTarget.offsetWidth);
            setPosition(e.currentTarget.offsetLeft)
          }}
        >{link}</NavLink>
      )}
      <div style={{ width: !width ? "79px" : width, left: !position ? "0" : position }} className='absolute -bottom-0 rounded-full h-[3px] bg-blue-500 transition-all duration-200'></div>
    </>
  )
}

export default Links