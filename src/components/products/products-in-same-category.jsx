"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import ProductItem from './product-item'

const ProductsInSameCategory = ({ products }) => {
    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {products.map(product => (
                    <SwiperSlide key={product.id}>
                        <ProductItem {...product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ProductsInSameCategory