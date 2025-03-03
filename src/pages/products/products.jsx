import React, { useEffect } from 'react'
import ProductCard from '@/components/productsCard/productCard';
import { useProducts } from '@/store/getStores';

const Products = () => {
    const {data,getProducts,categData,getCategories} = useProducts()

  const categories = ["All products", "Electronics", "Home & Lifestyle", "Medical", "Sports & Outdoor"];
  const brands = ["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"];
  const features = ["Metallic", "Plastic cover", "8GB Ram", "Super power", "Large Memory"];
  const conditions = ["Any", "Refurbished", "Brand new", "Old items"];
  const ratings = [5, 4, 3, 2, 1];

  useEffect(()=>{
    getProducts()
    getCategories()
  },[])
  return (
   <div className='flex sm:flex-col sm:gap-10 '>
     <div className="w-64 p-4 border-r space-y-6 text-gray-700 sm:flex sm:flex-wrap sm:w-[100%] sm:gap-[70px] sm:items-center">
            <div>
                <h3 className="font-semibold mb-2">Category</h3>
                <div className="space-y-1 text-sm overflowY-auto" >
                    {categData.map((el) => (
                        <li key={el.id} className={`cursor-pointer `}>
                            {el.categoryName}
                        </li>
                    ))}
                    <div className="text-red-500 cursor-pointer">See all</div>
                </div>
            </div>

            <div>
                <h3 className="font-semibold mb-2">Brands</h3>
                <div className="space-y-2 text-sm">
                    {brands.map((brand, index) => (
                        <div key={index}>
                            <input type="checkbox" className="mr-2" /> {brand}
                        </div>
                    ))}
                    <div className="text-red-500 cursor-pointer">See all</div>
                </div>
            </div>


            <div>
                <h3 className="font-semibold mb-2">Features</h3>
                <div className="space-y-2 text-sm">
                    {features.map((feature, index) => (
                        <div key={index}>
                            <input type="checkbox" className="mr-2" /> {feature}
                        </div>
                    ))}
                    <div className="text-red-500 cursor-pointer">See all</div>
                </div>
            </div>

            <div>
                <h3 className="font-semibold mb-2">Price range</h3>
                <input type="range" className="w-full" />
                <div className="flex justify-between text-sm">
                    <input type="number" placeholder="Min" className="w-16 p-1 border rounded" />
                    <input type="number" placeholder="Max" className="w-16 p-1 border rounded" />
                </div>
                <button className="mt-2 w-full bg-red-500 text-white py-1 rounded-md hover:bg-red-600">
                    Apply
                </button>
            </div>

            <div>
                <h3 className="font-semibold mb-2">Condition</h3>
                <div className="space-y-2 text-sm">
                    {conditions.map((condition, index) => (
                        <div key={index}>
                            <input type="radio" name="condition" className="mr-2" /> {condition}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="font-semibold mb-2">Ratings</h3>
                <div className="space-y-2 text-sm">
                    {ratings.map((stars, index) => (
                        <div key={index} className="flex items-center">
                            <input type="radio" name="rating" className="mr-2" />
                            <span className="text-yellow-400">{"★".repeat(stars)}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className='p-[20px]'>
            <ProductCard data={data}/>
        </div>

   </div>
  )
}

export default Products