import { Button, Card, TextareaAutosize, TextField } from '@mui/material'
import React from 'react'


const Contact = () => {
  return (
    <div className='p-[50px] flex gap-10 sm:flex-col sm:p-5'>
      <Card className='w-[30%] p-[30px] shadow-2xl sm:w-[100%]'>
        <div className='border-b-[1px] flex flex-col gap-3 pb-[30px] mb-[15px]'>
          <div className='flex items-center gap-3 '>
            <span>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="20" fill="#DB4444" />
                <path d="M18.5542 14.24L15.1712 10.335C14.7812 9.88503 14.0662 9.88703 13.6132 10.341L10.8312 13.128C10.0032 13.957 9.76623 15.188 10.2452 16.175C13.1069 22.1 17.8853 26.8851 23.8062 29.755C24.7922 30.234 26.0222 29.997 26.8502 29.168L29.6582 26.355C30.1132 25.9 30.1142 25.181 29.6602 24.791L25.7402 21.426C25.3302 21.074 24.6932 21.12 24.2822 21.532L22.9182 22.898C22.8484 22.9712 22.7565 23.0195 22.6566 23.0354C22.5567 23.0513 22.4543 23.0339 22.3652 22.986C20.1357 21.7021 18.2862 19.8503 17.0052 17.619C16.9573 17.5298 16.9399 17.4273 16.9558 17.3272C16.9717 17.2271 17.02 17.135 17.0932 17.065L18.4532 15.704C18.8652 15.29 18.9102 14.65 18.5542 14.239V14.24Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <h1 className='font-[500] text-[22px]'>Call To Us</h1>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
        </div>
        <div className=' flex flex-col gap-3 pb-[30px]'>
          <div className='flex items-center gap-3 '>
            <span>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="20" fill="#DB4444" />
                <path d="M10 13L20 20L30 13M10 27H30V13H10V27Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <h1 className='font-[500] text-[22px]'>Write To US</h1>
          </div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>
      </Card>

      <Card className='p-[50px] flex flex-col gap-5 w-[70%] sm:w-[100%]' >
        <div className='flex gap-4 sm:flex-col'>
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Phone" variant="outlined" />
        </div>
        <textarea className='border-[1.5px] rounded'
         cols="10" rows="8" placeholder='     
      Your Massage'></textarea>
        <div className='flex items-end justify-end'>
        <Button style={{backgroundColor:"#DB4444",color:"white",width:"150px",textAlign:"center"}}>Send Massage</Button>
        </div>

      </Card>
    </div>
  )
}

export default Contact