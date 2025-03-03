import { URL } from '@/config/config'
import { useCart } from '@/store/cartStore'
import { Button, Card, CardContent, Input } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


const Cart = () => {

  const { cartData, getCart, delProdFromCart, clearCart, increaseProd, decreaseProd, total } = useCart()
  console.log(total);


  useEffect(() => {
    getCart()
  }, [])

  

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6 m-[50px] sm:flex-col ">
      <div className="border p-4 rounded-lg shadow-sm">
        <table className="w-full text-left p-[20px] sm:w-[90%]">
          <thead>
            <tr>
              <th className='p-[10px]'>Product</th>
              <th className='p-[10px]'>Price</th>
              <th className='p-[10px]'>Quantity</th>
              <th className='p-[10px]'>Subtotal</th>
              <th className='p-[10px]'></th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((item) => {
              return (
                <tr key={item.id} className="border-t ">
                  <td className="flex items-center space-x-3 p-[10px] sm:flex-col">
                    <img src={URL + "/images/" + item.product.image} alt={item.product.name} className="w-12 h-12" />
                    <span>{item.product.productName}</span>
                  </td>
                  <td>${item.product.price}</td>
                  <td>
                    <div className='flex gap-2'>
                      <button
                        onClick={() => decreaseProd(item.id)}
                        className='border-[1px] border-red-600 font-bold w-[30px] rounded'
                      >-</button>
                      <input
                        type="text"
                        min={1}
                        value={item.quantity}
                        className="w-12 p-1 border rounded text-center"
                      />
                      <button
                      className='border-[1px] border-blue-600 font-bold w-[30px] rounded'
                        onClick={() => increaseProd(item.id)}
                      >+</button>
                    </div>
                  </td>
                  <td>${item.product.price * item.quantity}</td>
                  <td >

                    <button onClick={() => delProdFromCart(item.id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>

                    </button>
                  </td>
                </tr>

              )
            })}
          </tbody>
        </table>
        <div className="flex justify-between mt-4">
          <Button
            sx={{ backgroundColor: "#DB4444" }}
            onClick={() => clearCart()}
            variant="contained">Remove all</Button>
        </div>
      </div>

      <div className="flex justify-between gap-4 sm:flex-col">
        <div className="border p-4 rounded-lg flex items-center gap-2">
          <Input placeholder="Coupon Code" />
          <Button variant="outline">Apply</Button>
        </div>
        <Card className="p-4 w-150">
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between"><span>Subtotal:</span> <span>${total}</span></div>
              <div className="flex justify-between"><span>Shipping:</span> <span>Free</span></div>
              <div className="font-bold text-lg flex justify-between"><span>Total:</span> <span>${total}</span></div>
              <Button variant="contained"
              sx={{backgroundColor:"#DB4444"}}
               className="w-full mt-2 bg-red-600">Proceed to checkout</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Cart