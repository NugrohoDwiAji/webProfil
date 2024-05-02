import React from 'react'

export default function CardResume({tanggal, ket, children, color}) {
  return (
    <div className={`h-24 w-60 bg-${color}500 bg-opacity-20 rounded-xl flex items-start p-2 gap-1 text-gray-600  flex-col text-sm`}>
<h1 className='text-xs text-gray-500'>{tanggal}</h1>
<p>{children}</p>
<h1 className='text-xs text-gray-500'>{ket}</h1>
    </div>
  )
}
