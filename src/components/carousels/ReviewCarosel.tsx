import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import { Button, Card, Flex, Rate } from 'antd'
import { CheckOutlined } from '@ant-design/icons'
import ReviewData from '@/data/reviewUsers.json'

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

const ReviewCarosel: React.FC<PropType> = (props) => {
    const reviews = ReviewData
    const { options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl'>OUR HAPPY CUSTOMERS</h1>
                <div className="embla_review__controls">
                    <div className="embla_review__buttons">
                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                    </div>
                </div>
            </div>
            <section className="embla_review">
                <div className="embla_review__viewport" ref={emblaRef}>
                    <div className="embla_review__container">
                        {reviews.map((item, index) => (
                            <div className="embla_review__slide" key={index}>
                                <Card style={{ width: 300, height: 150 }}>
                                    <Flex vertical gap={5}>
                                        <Rate style={{ fontSize: 15 }} disabled defaultValue={item.valutation} />
                                        <Flex gap={5}>
                                            <h3>{item.name}</h3>
                                            <Button style={{ color: 'white', backgroundColor: 'green' }} shape="circle" icon={<CheckOutlined />} size={"small"} />
                                        </Flex>
                                        <p className='text-xs font-[Satoshi] font-normal'>
                                            {item.text}
                                        </p>
                                    </Flex>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReviewCarosel
