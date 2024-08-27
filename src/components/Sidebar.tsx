import React from 'react'

const Sidebar:React.FC =()=> {
  return (
    <>
     <div>
        <ul className='flex flex-col flex-warp gap-9 items-start bg-white h-full p-2 text-center'>
            <div className='p-2 bg-primary hover:bg-secondary uppercase w-full '><li>Fairy Tale</li></div>
            <div className='p-2 bg-primary hover:bg-secondary uppercase w-full'><li>Fiction</li></div>
            <div className='p-2 bg-primary hover:bg-secondary uppercase w-full'><li>Fantasy</li></div>
            <div className='p-2 bg-primary hover:bg-secondary uppercase w-full'><li>Comics</li></div>
            <div className='p-2 bg-primary hover:bg-secondary uppercase w-full'><li>Mystery</li></div>
        </ul>
     </div>
    </>
  )
}

export default Sidebar
