import { Card } from '@mui/material'
import React from 'react'
import socials from '../../assets/socials.svg'

const Card2 = ({img,title,desc}) => {
    return (
        <div>
            <Card className='flex flex-col items-center gap-3 p-[15px]'>
                <img src={img} alt="" />
                <h1 className='font-[700] text-[30px]'>{title}</h1>
                <p>{desc}</p>
                <img src={socials} alt="" />
            </Card>
        </div>
    )
}

export default Card2