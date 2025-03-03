import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import img1 from '../../../../../React1/Hotel Dubai/app/src/assets/350x350 (1).png'
import img2 from '../../../../../React1/Hotel Dubai/app/src/assets/428x573 (2).png'
import img3 from '../../../../../JS/Js2Month2/FastCart2/Photos/Category-Headphone.png'
import img4 from '../../../../../JS/Js2Month2/FastCart2/Photos/Category-SmartWatch.png'
import jbl from '../../assets/speakerJBL.svg'
import ps5 from '../../assets/ps5.svg'
import speaker from '../../assets/speaker.svg'
import woman from '../../assets/woman.svg'
import perfume from '../../assets/perfume.svg'
import swapper from '../../assets/Frame.png'
import swapper2 from '../../assets/woman.svg'
import img11 from '../../assets/delivery.svg'
import img12 from '../../assets/service.svg'
import img13 from '../../assets/garranty.svg'


import '../../App.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CategoryCard from '@/components/categorysCard/categoryCard';
import { Button, Card } from '@mui/material';
import ProductCard from '@/components/productsCard/productCard';
import { Link } from 'react-router-dom';
import Cards from '@/components/card/cards';
import { useProducts } from '@/store/getStores';
import Discount from '@/components/discount/discount';




const Home = () => {
    const {data,getProducts,categData,getCategories} = useProducts()

    let data3 = [
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
          desc: "We reurn money within 30 days",
        
        }
      ]

    useEffect(()=>{
        getProducts(),
        getCategories()
    },[])
    
    return (
        <div className='mb-[200px] '>
            <div className='flex justify-between p-[30px] gap-10 sm:flex-col'>
                <ul className='flex flex-col gap-3 overflow-scroll h-[380px] '>
                   {
                    categData?.map((e)=>{
                        return (
                            <li>{e.categoryName}</li>
                        )
                    })
                   }
                </ul>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper sm:w-[100%]"
                >
                    <SwiperSlide><img src={swapper} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={swapper2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                  
                </Swiper>
            </div>

            <section className='mt-[50px] p-[30px] sm:p-0 sm:flex sm:flex-col'>
                <div className='flex items-center gap-5 mb-5'>
                    <p className='w-[20px] h-[40px] bg-[#DB4444]'></p>
                    <p className='text-[#DB4444] font-[600]'>Today’s</p>
                </div>
                <Discount/>
            </section>

            <section className='flex flex-col  gap-10 mt-[50px] border-b-[1px] pb-10'>
                <ProductCard data={data} />
                <div className='flex justify-center'>
                    <Link to="/products">
                        <button className='bg-[#DB4444] text-white p-[5px] w-[150px]'>All Products</button>
                    </Link>
                </div>
            </section>

            <section className='categories flex flex-col gap-5 p-[50px] pb-10 border-b-[1px]'>
                <div className='flex items-center gap-5 mb-5'>
                    <p className='w-[20px] h-[40px] bg-[#DB4444]'></p>
                    <p className='text-[#DB4444] font-[600]'>Categories</p>
                </div>
                <h1 className='font-[600] text-[30px]'>Browse By Category</h1>
                <CategoryCard  data={categData} />
            </section>

            <section className='flex flex-col gap-10 mt-[50px] border-b-[1px] pb-10 p-[50px]'>
                <div className='flex items-center gap-5 '>
                    <p className='w-[20px] h-[40px] bg-[#DB4444]'></p>
                    <p className='text-[#DB4444] font-[600]'>This Month</p>
                </div>
                <div className='flex justify-between mb-10'>
                    <h1 className='font-[600] text-[30px]'>Best Selling Products</h1>
                    <button className='bg-[#DB4444] text-white p-[5px] w-[150px]'>All Products</button>
                </div>
                <ProductCard data={data}  />
            </section>

            <section className='bg-black flex p-[50px] m-[50px] sm:flex-col sm:w-[90%] sm:m-4  gap-9'>
                <div className='flex flex-col w-[50%] gap-5 sm:w-[100%]'>
                    <h1 className='text-[#00FF66]'>Categories</h1>
                    <h1 className='font-[600] text-[48px] text-white sm:text-[30px]'>Enhance Your Music Experience</h1>
                    <div className='flex gap-6 '>
                        <p className='flex items-center justify-center bg-white w-[65px] h-[65px] font-serif rounded-[50%]'>5 <br /> Days</p>
                        <p className='flex items-center justify-center bg-white w-[65px] h-[65px] font-serif rounded-[50%]'>23 <br />Hour</p>
                        <p className='flex items-center justify-center bg-white w-[65px] h-[65px] font-serif rounded-[50%]'>59 <br />Minutes</p>
                        <p className='flex items-center justify-center bg-white w-[65px] h-[65px] font-serif rounded-[50%]'>42 <br />Seconds</p>
                    </div>
                    <button className='bg-[#00FF66] w-[120px] p-[4px] rounded'>Buy Now!</button>
                </div>
                <div><img src={jbl} alt="" /></div>
            </section>

            <section className='flex flex-col gap-10 p-[50px]'>
                <div className='flex items-center gap-5 '>
                    <p className='w-[20px] h-[40px] bg-[#DB4444]'></p>
                    <p className='text-[#DB4444] font-[600]'>Our Products</p>
                </div>
                <h1 className='font-[600] text-[30px]'>Explore Our Products</h1>
                <ProductCard data={data} />
                <div className='flex justify-center'>
                    <Link to="/products">
                        <button className='bg-[#DB4444] text-white p-[5px] w-[150px] rounded'>View All Products</button>
                    </Link>
                </div>
            </section>



            <section className='p-[30px] flex flex-col gap-5'>
                <h1 className='font-[600] text-[35px]'>New Arrival</h1>
                <div className='flex justify-around sm:flex-col gap-5'>
                    <div><img src={ps5} alt="" /></div>
                    <div className='flex flex-col gap-8'>
                        <div className="top"><img src={woman} alt="" /></div>
                        <div className="bottom flex gap-8 sm:flex-col">
                            <img src={speaker} alt="" />
                            <img src={perfume} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <ProductCard data={data} />
            </section>


            <section className='flex justify-evenly gap-5 sm:flex-col sm:p-[20px] m-[100px] sm:m-5'>
                {
                    data3.map((el) => {
                        return (
                            <div key={el.id}>
                                <Cards img={el.image} title={el.title} desc={el.desc} bg={el.bg} />
                            </div>
                        )
                    })
                }
            </section>


        </div>
    )
}

export default Home