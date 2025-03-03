import { URL } from '@/config/config'
import { useCart } from '@/store/cartStore'
import { Button, Card, CardContent, Input, Chip, Divider, Box, Typography, IconButton } from '@mui/material'
import React, { useState, useEffect } from 'react'

const Cart = () => {
  const { cartData, getCart, delProdFromCart, clearCart, increaseProd, decreaseProd, total } = useCart()
  const [animateTotal, setAnimateTotal] = useState(false)
  
  useEffect(() => {
    getCart()
  }, [])
  
  useEffect(() => {
    // Add animation effect when total changes
    setAnimateTotal(true)
    const timer = setTimeout(() => setAnimateTotal(false), 500)
    return () => clearTimeout(timer)
  }, [total])

  return (
    <div className="p-6 max-w-4xl mx-auto m-[50px] bg-gray-50 rounded-xl shadow-lg">
      <Typography variant="h4" className="mb-6 text-center font-bold relative">
        Your Shopping Cart
        <div className="absolute w-16 h-1 bg-red-600 left-1/2 transform -translate-x-1/2 bottom-0"></div>
      </Typography>
      
      {cartData.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">🛒</div>
          <Typography variant="h6">Your cart is empty</Typography>
          <Button 
            variant="contained" 
            sx={{ 
              backgroundColor: "#DB4444", 
              mt: 2,
              "&:hover": { backgroundColor: "#c13333" }
            }}
          >
            Continue Shopping
          </Button>
        </div>
      ) : (
        <>
          <div className="border bg-white rounded-lg shadow-sm overflow-hidden mb-6">
            <table className="w-full text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 font-semibold">Product</th>
                  <th className="p-4 font-semibold">Price</th>
                  <th className="p-4 font-semibold">Quantity</th>
                  <th className="p-4 font-semibold">Subtotal</th>
                  <th className="p-4 font-semibold"></th>
                </tr>
              </thead>
              <tbody>
                {cartData.map((item) => (
                  <tr key={item.id} className="border-t hover:bg-gray-50 transition-colors">
                    <td className="flex items-center space-x-3 p-4">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center border">
                        <img 
                          src={URL + "/images/" + item.product.image} 
                          alt={item.product.name} 
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <Typography variant="body1" className="font-medium">{item.product.productName}</Typography>
                        <Typography variant="body2" className="text-gray-500">ID: {item.product.id}</Typography>
                      </div>
                    </td>
                    <td className="p-4">
                      <Typography className="font-medium">${item.product.price}</Typography>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center h-10 rounded-lg border overflow-hidden w-32">
                        <button
                          onClick={() => decreaseProd(item.id)}
                          className="w-10 h-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                          −
                        </button>
                        <input
                          type="text"
                          min={1}
                          value={item.quantity}
                          className="w-12 h-full p-1 text-center border-x bg-white outline-none"
                          readOnly
                        />
                        <button
                          onClick={() => increaseProd(item.id)}
                          className="w-10 h-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-4 font-medium">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="p-4">
                      <IconButton 
                        onClick={() => delProdFromCart(item.id)}
                        className="text-gray-500 hover:text-red-600 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                      </IconButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-end p-4 bg-gray-50">
              <Button
                sx={{ 
                  backgroundColor: "#DB4444",
                  "&:hover": { backgroundColor: "#c13333" }
                }}
                onClick={() => clearCart()}
                variant="contained"
                startIcon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                }
              >
                Clear Cart
              </Button>
            </div>
          </div>

          <div className="flex justify-between gap-6 sm:flex-col">
            <div className="flex-1">
              <Card variant="outlined" className="bg-white overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-4 bg-gray-50 border-b">
                    <Typography variant="h6" className="font-medium">Apply Coupon</Typography>
                  </div>
                  <div className="p-4">
                    <Typography variant="body2" className="mb-3 text-gray-600">
                      If you have a coupon code, please apply it below.
                    </Typography>
                    <div className="flex gap-2">
                      <Input 
                        placeholder="Enter coupon code" 
                        fullWidth 
                        sx={{ backgroundColor: "#f9f9f9" }}
                      />
                      <Button 
                        variant="outlined"
                        sx={{ 
                          borderColor: "#DB4444", 
                          color: "#DB4444",
                          "&:hover": { borderColor: "#c13333", backgroundColor: "rgba(219, 68, 68, 0.04)" } 
                        }}
                      >
                        Apply
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="w-96 sm:w-full">
              <Card variant="outlined" className="bg-white">
                <CardContent className="p-0">
                  <div className="p-4 bg-gray-50 border-b">
                    <Typography variant="h6" className="font-medium">Order Summary</Typography>
                  </div>
                  <div className="p-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <Typography variant="body2" className="text-gray-600">Subtotal:</Typography>
                        <Typography>${total.toFixed(2)}</Typography>
                      </div>
                      <div className="flex justify-between items-center">
                        <Typography variant="body2" className="text-gray-600">Shipping:</Typography>
                        <Typography className="text-green-600">Free</Typography>
                      </div>
                      {/* <div className="flex justify-between items-center">
                        <Typography variant="body2" className="text-gray-600">Tax:</Typography>
                        <Typography>$0.00</Typography>
                      </div> */}
                      
                      <Divider className="my-3" />
                      
                      <div className="flex justify-between items-center">
                        <Typography variant="h6" className="font-semibold">Total:</Typography>
                        <Typography 
                          variant="h6" 
                          className={`font-bold ${animateTotal ? 'text-red-600 scale-105' : ''} transition-all duration-300`}
                        >
                          ${total.toFixed(2)}
                        </Typography>
                      </div>
                      
                      <Button 
                        variant="contained"
                        fullWidth
                        size="large"
                        sx={{ 
                          backgroundColor: "#DB4444", 
                          mt: 2, 
                          py: 1.5,
                          "&:hover": { backgroundColor: "#c13333" },
                          position: "relative",
                          overflow: "hidden",
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: "-100%",
                            width: "70%",
                            height: "100%",
                            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                            transition: "0.5s",
                          },
                          "&:hover::after": {
                            left: "100%",
                          }
                        }}
                      >
                        Proceed to Checkout
                      </Button>
                      
                      {/* <div className="flex justify-center gap-2 mt-4">
                        <img src="/visa.svg" alt="Visa" className="h-6" />
                        <img src="/mastercard.svg" alt="Mastercard" className="h-6" />
                        <img src="/amex.svg" alt="American Express" className="h-6" />
                        <img src="/paypal.svg" alt="PayPal" className="h-6" />
                      </div> */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart