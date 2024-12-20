'use client'

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { Flex, Rate } from 'antd'

interface ClothingItem {
    id: string;
    name: string;
    typeClothing: string;
    colors: string;
    price: string; 
    size: string
    img: string; 
    review: number; 
}

type PropType = {
    slides: ClothingItem[]
    options?: EmblaOptionsType
}

const ShowCaseCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef] = useEmblaCarousel(options)

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((product, index) => (
                        <div className="embla__slide" key={index}>
                            <Flex vertical justify='center' align='center'>
                                <div className='w-[150px] h-[200px] lg:w-[240px] lg:h-[298px] xl:w-full xl:h-[298px] bg-blue-400 rounded-xl'>

                                </div>
                                <Flex vertical gap={3} className='pt-3 w-full'>
                                    <h3 className='text-sm font-bold'>{product.name}</h3>
                                    <div>
                                        <Rate style={{ fontSize: 15 }} disabled defaultValue={product.review} />
                                    </div>
                                    <p>$320</p>
                                </Flex>
                            </Flex>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">

            </div>
        </section>
    )
}

export default ShowCaseCarousel
