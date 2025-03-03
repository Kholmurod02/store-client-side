import { FastForwardSharp } from '@mui/icons-material'
import React from 'react'
import monitor from '../../assets/monitor.svg'

function Wishes() {
  return (
   <div>
    <div>
      <h1>Wishlist (4)  </h1>
    </div>
    <div className="max-w-sm bg-white rounded-lg shadow-lg p-4 w-[250px]">
      <div className="relative">
        <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">-35%</span>
        <button
          className="absolute top-2 right-2 bg-white p-2 rounded-full shadow"
        // onClick={() => setIsDeleted(true)}
        >
          {/* <FastForwardSharp className="text-gray-600" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>

        </button>
        <img
          src={monitor}
          alt="Gucci duffle bag"
          className="w-full rounded-lg"
        />
      </div>
      <button className="w-full bg-black text-white py-2 mt-2 flex items-center justify-center space-x-2 rounded">
        {/* <FaShoppingCart /> */}
        <span>Add To Cart</span>
      </button>
      <h3 className="mt-2 text-lg font-semibold">Gucci duffle bag</h3>
      <div className="flex items-center space-x-2">
        <span className="text-red-500 text-lg font-bold">$960</span>
        <span className="text-gray-400 line-through">$1160</span>
      </div>
    </div>
   </div>
  )
}

export default Wishes