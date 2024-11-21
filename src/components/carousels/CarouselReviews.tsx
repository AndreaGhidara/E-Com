'use client'

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import ReviewCarosel from './ReviewCarosel'


// type PropType = {
//     slides: number[]
//     options?: EmblaOptionsType
// }

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function CarouselReviews() {

    return (
        <section className='container containerSpace pt-10 pb-20'>
            <ReviewCarosel slides={SLIDES} options={OPTIONS} />
        </section>
    )
}
