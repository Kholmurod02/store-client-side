import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// Import components & store
import CategoryCard from '@/components/categorysCard/categoryCard';
import ProductCard from '@/components/productsCard/productCard';
import Cards from '@/components/card/cards';
import Discount from '@/components/discount/discount';
import { useProducts } from '@/store/getStores';

// Import images (assuming these paths are correct)
import img1 from '../../assets/350x350 (1).png';
import img2 from '../../assets/428x573 (2).png';
import jbl from '../../assets/speakerJBL.svg';
import ps5 from '../../assets/ps5.svg';
import speaker from '../../assets/speaker.svg';
import woman from '../../assets/woman.svg';
import perfume from '../../assets/perfume.svg';
import swapper from '../../assets/Frame.png';
import swapper2 from '../../assets/woman.svg';
import img11 from '../../assets/delivery.svg';
import img12 from '../../assets/service.svg';
import img13 from '../../assets/garranty.svg';

const Home = () => {
    const { data, getProducts, categData, getCategories } = useProducts();
    const [activeCategory, setActiveCategory] = useState(null);
    const [showScrollIndicator, setShowScrollIndicator] = useState(true);

    // Services data
    const servicesData = [
        {
            id: 1,
            image: img11,
            title: "FREE AND FAST DELIVERY",
            desc: "Free delivery for all orders over $140",
        },
        {
            id: 2,
            image: img12,
            title: "24/7 CUSTOMER SERVICE",
            desc: "Friendly 24/7 customer support",
        },
        {
            id: 3,
            image: img13,
            title: "MONEY BACK GUARANTEE",
            desc: "We return money within 30 days",
        }
    ];

    useEffect(() => {
        getProducts();
        getCategories();

        // Hide scroll indicator after 5 seconds
        const timer = setTimeout(() => {
            setShowScrollIndicator(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section with Categories Sidebar */}
            <div className="container mx-auto px-4 py-6">
                <div className="flex gap-8 rounded-xl overflow-hidden shadow-lg bg-white sm:flex-col">
                    {/* Categories Sidebar */}
                    <div className="w-1/4 bg-gray-100 p-4 sm:w-full">
                        <h3 className="font-bold text-lg mb-4 text-gray-800">Categories</h3>
                        {showScrollIndicator && (
                            <motion.div
                                className="absolute right-4 top-1/2 text-gray-400"
                                animate={{ x: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                ↓ scroll
                            </motion.div>
                        )}
                        <ul className="space-y-2 max-h-[350px] overflow-auto custom-scrollbar pr-2">
                            {categData?.map((category, index) => (
                                <motion.li
                                    key={index}
                                    className={`p-2 rounded-lg transition-all cursor-pointer ${activeCategory === index ? 'bg-red-500 text-white font-medium' : 'hover:bg-gray-200'}`}
                                    onClick={() => setActiveCategory(index)}
                                    whileHover={{ scale: 1.03 }}
                                >
                                    {category.categoryName}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Main Hero Slider */}
                    <div className="w-3/4 sm:w-full">
                        <Swiper
                            effect="fade"
                            spaceBetween={0}
                            centeredSlides={true}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation, EffectFade]}
                            className="rounded-r-xl h-[500px] sm:rounded-none shadow-2xl"
                        >
                            {/* Slide 1 */}
                            <SwiperSlide className="bg-gradient-to-r from-purple-600 to-indigo-600">
                                <div className="flex h-full">
                                    <div className="w-1/2 flex flex-col justify-center p-10">
                                        <h2 className="text-5xl font-bold mb-6 text-white">New Season Arrivals</h2>
                                        <p className="mb-8 text-white/80 text-lg">
                                            Discover the latest trends for your lifestyle
                                        </p>
                                        <button className="bg-white text-purple-600 hover:bg-purple-700 hover:text-white py-3 px-8 rounded-full w-fit transition-all duration-300 shadow-lg">
                                            Shop Now
                                        </button>
                                    </div>
                                    <div className="w-1/2 flex items-center justify-center">
                                        <img
                                            src={swapper}
                                            alt="New collection"
                                            className="max-h-[400px] object-contain transform hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Slide 2 */}
                            <SwiperSlide className="bg-gradient-to-r from-amber-500 to-orange-500">
                                <div className="flex h-full">
                                    <div className="w-1/2 flex flex-col justify-center p-10">
                                        <h2 className="text-5xl font-bold mb-6 text-white">Tech Essentials</h2>
                                        <p className="mb-8 text-white/80 text-lg">
                                            Upgrade your gadgets with our premium selection
                                        </p>
                                        <button className="bg-white text-amber-600 hover:bg-amber-700 hover:text-white py-3 px-8 rounded-full w-fit transition-all duration-300 shadow-lg">
                                            Explore
                                        </button>
                                    </div>
                                    <div className="w-1/2 flex items-center justify-center">
                                        <img
                                            src={img1}
                                            alt="Tech products"
                                            className="max-h-[400px] object-contain transform hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Slide 3 */}
                            <SwiperSlide className="bg-gradient-to-r from-teal-600 to-cyan-600">
                                <div className="flex h-full">
                                    <div className="w-1/2 flex flex-col justify-center p-10">
                                        <h2 className="text-5xl font-bold mb-6 text-white">Fashion Forward</h2>
                                        <p className="mb-8 text-white/80 text-lg">
                                            Elevate your style with our curated collections
                                        </p>
                                        <button className="bg-white text-teal-600 hover:bg-teal-700 hover:text-white py-3 px-8 rounded-full w-fit transition-all duration-300 shadow-lg">
                                            View Collection
                                        </button>
                                    </div>
                                    <div className="w-1/2 flex items-center justify-center">
                                        <img
                                            src={swapper2}
                                            alt="Fashion items"
                                            className="max-h-[700px] object-contain transform hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

            {/* Flash Sale Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="relative">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-1 h-12 bg-red-600 rounded-full"></div>
                        <span className="text-red-600 font-semibold text-lg relative">
                            Today's Flash Sale
                            <motion.span
                                className="absolute -top-2 -right-4 text-xs bg-yellow-400 text-black rounded-full px-2 py-1"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                HOT
                            </motion.span>
                        </span>
                    </div>
                    <Discount />
                </div>
            </section>

            {/* Featured Products */}
            <section className="container mx-auto px-4 py-12 bg-white rounded-2xl shadow-sm">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl font-bold">Featured Products</h2>
                    <Link to="/products">
                        <motion.button
                            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View All
                        </motion.button>
                    </Link>
                </div>
                <ProductCard data={data} />
            </section>

            {/* Categories Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-1 h-12 bg-red-600 rounded-full"></div>
                    <span className="text-red-600 font-semibold text-lg">Categories</span>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                    <CategoryCard data={categData} />
                </div>
            </section>

            {/* Best Selling Products */}
            <section className="container mx-auto px-4 py-16">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-1 h-12 bg-red-600 rounded-full"></div>
                    <span className="text-red-600 font-semibold text-lg">This Month</span>
                </div>
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl font-bold">Best Selling Products</h2>
                    <motion.button
                        className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        All Products
                    </motion.button>
                </div>
                <div className="grid grid-cols-4 gap-6 sm:grid-cols-1 md:grid-cols-2">
                    {data?.map((product, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                            whileHover={{ y: -10 }}
                        >
                            <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                                <img
                                    src={product.media?.url || img1}
                                    alt={product.name}
                                    className="h-full object-contain"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-lg truncate">{product.name}</h3>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-red-600 font-bold">${product.price}</span>
                                    <div className="flex items-center">
                                        <span className="text-amber-400">★★★★</span>
                                        <span className="text-gray-400">★</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Speaker Promo Section */}
            <section className="container mx-auto px-4 py-12 mb-16">
                <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl overflow-hidden">
                    <div className="flex p-8 gap-8 sm:flex-col">
                        <div className="w-1/2 flex flex-col justify-center gap-6 sm:w-full">
                            <span className="text-green-400 font-medium">Limited Offer</span>
                            <h2 className="text-5xl font-bold text-white sm:text-3xl">
                                Enhance Your Music Experience
                            </h2>
                            <div className="flex gap-4">
                                {['Days', 'Hours', 'Minutes', 'Seconds'].map((unit, index) => (
                                    <motion.div
                                        key={unit}
                                        className="flex flex-col items-center justify-center bg-white w-16 h-16 rounded-lg"
                                        animate={{
                                            scale: [1, 1.05, 1],
                                            borderRadius: ["20%", "30%", "20%"]
                                        }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 2,
                                            delay: index * 0.3
                                        }}
                                    >
                                        <span className="text-xl font-bold">{5 - index}</span>
                                        <span className="text-xs">{unit}</span>
                                    </motion.div>
                                ))}
                            </div>
                            <motion.button
                                className="bg-green-500 hover:bg-green-600 w-fit px-6 py-3 rounded-full text-white font-medium"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Buy Now!
                            </motion.button>
                        </div>
                        <div className="w-1/2 flex items-center justify-center sm:w-full">
                            <motion.div
                                animate={{
                                    y: [0, -15, 0],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3,
                                }}
                            >
                                <img src={jbl} alt="JBL Speaker" className="max-h-[300px]" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Explore Products */}
            <section className="container mx-auto px-4 py-12">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-1 h-12 bg-red-600 rounded-full"></div>
                    <span className="text-red-600 font-semibold text-lg">Our Products</span>
                </div>
                <h2 className="text-3xl font-bold mb-10">Explore Our Products</h2>
                <ProductCard data={data} />
                <div className="flex justify-center mt-12">
                    <Link to="/products">
                        <motion.button
                            className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-full font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View All Products
                        </motion.button>
                    </Link>
                </div>
            </section>

            {/* New Arrivals Section */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-8">New Arrivals</h2>
                <div className="grid grid-cols-12 gap-4 sm:grid-cols-1">
                    <div className="col-span-6 bg-gradient-to-br from-purple-100 to-indigo-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all h-[400px] flex items-center justify-center p-6 sm:h-[300px]">
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <img src={ps5} alt="PlayStation 5" className="max-h-[350px]" />
                        </motion.div>
                    </div>
                    <div className="col-span-6 grid grid-rows-2 gap-4 sm:grid-rows-3">
                        <div className="bg-gradient-to-br from-rose-100 to-pink-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all h-[190px] flex items-center justify-center p-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <img src={woman} alt="Woman" className="max-h-[170px]" />
                            </motion.div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
                            <div className="bg-gradient-to-br from-amber-100 to-yellow-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all h-[190px] flex items-center justify-center p-4">
                                <motion.div
                                    whileHover={{ scale: 1.05, rotate: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <img src={speaker} alt="Speaker" className="max-h-[170px]" />
                                </motion.div>
                            </div>
                            <div className="bg-gradient-to-br from-teal-100 to-green-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all h-[190px] flex items-center justify-center p-4">
                                <motion.div
                                    whileHover={{ scale: 1.05, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <img src={perfume} alt="Perfume" className="max-h-[170px]" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="bg-gray-50 py-16 mt-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-3 gap-8 sm:grid-cols-1">
                        {servicesData.map((service) => (
                            <motion.div
                                key={service.id}
                                className="bg-white p-8 rounded-2xl shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all"
                                whileHover={{ y: -10 }}
                            >
                                <div className="mb-6 bg-gray-100 p-4 rounded-full">
                                    <img src={service.image} alt={service.title} className="w-12 h-12" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="container mx-auto px-4 py-16 mb-16">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
                    <p className="text-white mb-8 max-w-xl mx-auto">
                        Stay updated with our latest products, exclusive offers, and promotions.
                    </p>
                    <div className="flex max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none"
                        />
                        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-r-lg">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;