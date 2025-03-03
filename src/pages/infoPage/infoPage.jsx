import React, { useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { useProducts } from "@/store/getStores";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosRequest } from "../../../utils/axiosRequest";
import { URL } from "@/config/config";


const InfoPage = () => {
  const { id } = useParams()

  const { data, getById, loading } = useProducts()

  // let[data,setData]=useState([])
  const [selectedImage, setSelectedImage] = useState(
    data.images ? data.images[0]?.images : ""
  );
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [idx, setIdx] = useState(null)



  useEffect(() => {
    getById(id)
  }, [id])


  if (loading) {
    return <CircularProgress />

  }

  return (
    <div className="max-w-4xl mx-auto p-6 flex justify-between  md:flex-row gap-6 ">
      {/* Image Gallery */}
      <div className="flex flex-col items-center">
        <img src={URL + "/images/" + selectedImage} alt="Selected" className="w-80 h-80 object-cover" />
        <div className="flex max-w-[350px] overflow-auto gap-2 mt-4">
          {data?.images?.map((el) => (
            <img
              key={el.id}
              src={URL + "/images/" + el.images}
              alt={`Thumbnail ${data.productName}`}
              className={`w-16 h-16 cursor-pointer border rounded-md border-gray-300"
                  }`}
              onClick={() => setSelectedImage(el.images)}
            />
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold">{data.productName}</h2>
        <p className="text-lg text-gray-700 font-semibold">${data.price?.toFixed(2)}</p>
        <p className="text-gray-500 mt-2">{data.description}</p>

        {/* Color Selection */}
        <div className="mt-4 flex items-center gap-[20px]">
          <span className="font-semibold">Colour:</span>
          <div className="flex gap-3 mt-2">
            <div
              className={`w-6 h-6 rounded-full cursor-pointer border-2 border-gray-300"
                    }`}
              style={{ backgroundColor: data?.color }}
            >
            </div>
          </div>
        </div>

        {/* Size Selection */}
        {data.size && <div className="mt-4 flex gap-[20px] items-center">
          <span className="font-semibold">Size:</span>
          <div className="flex gap-2 mt-2">
            <button
              className={`px-3 py-1 border rounded-md bg-gray-200"
                    }`}
            >
              {data?.size}
            </button>
          </div>
        </div>}

        {/* Quantity and Buy Now */}
        <div className="flex items-center gap-4 mt-6">
          <div className="flex items-center border px-3 py-1 rounded-md">
            <button
              className="px-3 text-lg"
              onClick={() => handleQuantityChange(-1)}
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              className="px-3 text-lg"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
          </div>
          <Button variant="contained" color="primary" className="bg-red-600">
            Buy Now
          </Button>
        </div>

        {/* Delivery Info */}
        <div className="border p-4 mt-6 rounded-md">
          <p className="font-semibold">Free Delivery</p>
          <p className="text-gray-500 text-sm">Enter your postal code for Delivery Availability</p>
          <hr className="my-2" />
          <p className="font-semibold">Return Delivery</p>
          <p className="text-gray-500 text-sm">Free 30 Days Delivery Returns. <a href="#" className="text-blue-600">Details</a></p>
        </div>
      </div>
    </div>

  );
};

export default InfoPage;
