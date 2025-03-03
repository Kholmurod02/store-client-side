import { Card } from '@mui/material'
import React from 'react'

const Cards = ({img,bg,title,desc}) => {
  return (
    <div>
       <Card className='flex flex-col items-center gap-3 p-[15px] sm:w-[100%]'
       style={{background:bg}}>
          <img src={img} alt="" />
          <h1 className='font-[700] text-[20px]'>{title}</h1>
          <p>{desc}</p>
        </Card>
    </div>
  )
}

export default Cards