import React, { useEffect } from 'react';
import ProductCard from '@/components/productsCard/productCard';
import { useProducts } from '@/store/getStores';

const Products = () => {
  const { data, getProducts, categData, getCategories } = useProducts();

  const categories = ["All products", "Electronics", "Home & Lifestyle", "Medical", "Sports & Outdoor"];
  const brands = ["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"];
  const features = ["Metallic", "Plastic cover", "8GB Ram", "Super power", "Large Memory"];
  const conditions = ["Any", "Refurbished", "Brand new", "Old items"];
  const ratings = [5, 4, 3, 2, 1];

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <div className='flex sm:flex-col sm:gap-10 bg-gray-50 p-6'>
      {/* Filters Section */}
      <div className="w-72 p-6 bg-white/80 backdrop-blur-md rounded-lg shadow-lg space-y-6 text-gray-700 sm:w-full sm:flex sm:flex-wrap sm:gap-6 sm:justify-between">
        {/* Category Filter */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Category</h3>
          <div className="space-y-2 text-sm">
            {categData.map((el) => (
              <div key={el.id} className="flex items-center cursor-pointer hover:text-purple-600 transition-colors duration-300">
                <span>{el.categoryName}</span>
              </div>
            ))}
            <div className="text-red-500 cursor-pointer hover:text-red-600 transition-colors duration-300">See all</div>
          </div>
        </div>

        {/* Brands Filter */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Brands</h3>
          <div className="space-y-2 text-sm">
            {brands.map((brand, index) => (
              <div key={index} className="flex items-center">
                <input type="checkbox" className="mr-2 accent-purple-600" /> {brand}
              </div>
            ))}
            <div className="text-red-500 cursor-pointer hover:text-red-600 transition-colors duration-300">See all</div>
          </div>
        </div>

        {/* Features Filter */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Features</h3>
          <div className="space-y-2 text-sm">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <input type="checkbox" className="mr-2 accent-purple-600" /> {feature}
              </div>
            ))}
            <div className="text-red-500 cursor-pointer hover:text-red-600 transition-colors duration-300">See all</div>
          </div>
        </div>

        {/* Price Range Filter */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Price range</h3>
          <input type="range" className="w-full accent-purple-600" />
          <div className="flex justify-between text-sm mt-2">
            <input type="number" placeholder="Min" className="w-20 p-2 border rounded-lg focus:outline-none focus:border-purple-600" />
            <input type="number" placeholder="Max" className="w-20 p-2 border rounded-lg focus:outline-none focus:border-purple-600" />
          </div>
          <button className="mt-3 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300">
            Apply
          </button>
        </div>

        {/* Condition Filter */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Condition</h3>
          <div className="space-y-2 text-sm">
            {conditions.map((condition, index) => (
              <div key={index} className="flex items-center">
                <input type="radio" name="condition" className="mr-2 accent-purple-600" /> {condition}
              </div>
            ))}
          </div>
        </div>

        {/* Ratings Filter */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Ratings</h3>
          <div className="space-y-2 text-sm">
            {ratings.map((stars, index) => (
              <div key={index} className="flex items-center">
                <input type="radio" name="rating" className="mr-2 accent-purple-600" />
                <span className="text-yellow-400">{"★".repeat(stars)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className='flex-1 p-6 bg-white/80 backdrop-blur-md rounded-lg shadow-lg'>
        <ProductCard data={data} />
      </div>
    </div>
  );
};

export default Products;