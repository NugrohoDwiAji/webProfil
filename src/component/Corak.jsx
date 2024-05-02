import React from 'react'

export default function Corak({top, left, bottom, right}) {
  return (
    <div className={`h-[40rem] w-[40rem] border-[3px] border-secondary500 absolute rotate-45 ${top} ${left} ${bottom} ${right} items-center justify-center flex -z-10`}>
    <div className={`h-[37rem] w-[37rem] border-[3px] border-secondary500 relative left-0 top-0 flex justify-center items-center`}>
      <div className={`h-[34rem] w-[34rem] border-[3px] border-secondary500 relative left-0 top-0 flex justify-center items-center`}>
      <div className={`h-[31rem] w-[31rem] border-[3px] border-secondary500 relative left-0 top-0 `}></div>
      </div>
    </div>
  </div>
  )
}
