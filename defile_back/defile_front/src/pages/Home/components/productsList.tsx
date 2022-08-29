import { SwiperSlide, Swiper } from "swiper/react";
import SwiperClass from "swiper/types/swiper-class";
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

import { useState } from 'react';

import ProductItem from "../../../components/productItem";
import { IProduct } from "../../../store/ProductStore";

interface ProductsProps {
    products: IProduct[]
}

function ProductList({products}:ProductsProps) {

    const [swiper, setSwiper] = useState<SwiperClass>();

    return (
        <div className="category">
            <Swiper

                slidesPerView={2}
                style={{
                    padding: '20px 5px'
                }}
                spaceBetween={10}
                onSwiper={(swiper) => setSwiper(swiper)}
                breakpoints={{
                    1500: {
                        slidesPerView: 4
                    },
                    1300: {
                        slidesPerView: 4
                    },
                    1120: {
                        slidesPerView: 2
                    },
                    750: {
                        slidesPerView: 2
                    }
                }}
            >
                {products.map(product => <SwiperSlide key={product.id}>
                    <ProductItem key={product.id} productItem={product}></ProductItem>
                </SwiperSlide>)
                }
            </Swiper>
            <div onClick={() => swiper?.slideNext()} className="slider__arrow slider__arrow-right">
                <ArrowRightOutlined style={{
                    fontSize: 24,
                    color: '#253D4E'
                }}></ArrowRightOutlined>
            </div>
            <div onClick={() => swiper?.slidePrev()} className="slider__arrow slider__arrow-left">
                <ArrowLeftOutlined style={{
                    fontSize: 24,
                    color: '#253D4E'
                }}></ArrowLeftOutlined>
            </div>
        </div>
    );
}

export default ProductList;