"use client"
import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import Image from 'next/image';

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <Image src="/images/slider-01.jpg" alt="slider1" width={1640} height={624} />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="/images/slider-02.jpg" alt="slider2" width={1640} height={624} />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider