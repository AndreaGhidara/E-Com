import { Button, Col, Flex, Row } from 'antd'
import Image from 'next/image'
import React from 'react'
import Partners from './Partners'

export default function Hero() {
    return (
        <div className='bg-[#F2F0F1] relative lg:pt-20  '>
            <Row className='container containerSpace'>
                <Col xs={24} lg={13} xl={10}>
                    <Flex className='my-5' vertical gap="middle">
                        <h1 className='uppercase text-2xl lg:text-6xl font-bold '>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                        <p className='text-xs font-extralight'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                        <div className='w-full'>
                            <Button className='w-full lg:w-1/4' color="default" shape="round" variant="solid" >
                                Shop Now
                            </Button>
                        </div>
                        <Flex className='w-full py-2' >
                            <Row className='w-full' gutter={[10, 10]}>
                                <Col xs={12} lg={8}>
                                    <Flex vertical align='start' justify='center' className='w-full border-r-2 border-slate-200'>
                                        <h6 className='font-bold text-xl'>200+</h6>
                                        <p className='text-xs'>International Brands</p>
                                    </Flex>
                                </Col>
                                <Col xs={12} lg={8} >
                                    <Flex vertical align='start' justify='center' className='w-full lg:border-r-2 border-slate-200'>
                                        <h6 className='font-bold text-xl'>2,000+</h6>
                                        <p className='text-xs'>High-Quality Products</p>
                                    </Flex>
                                </Col>
                                <Col xs={24} lg={8}>
                                    <Flex vertical className='w-full text-center lg:text-start'>
                                        <h6 className='font-bold text-xl'>30,000+</h6>
                                        <p className='text-xs'>Happy Customers</p>
                                    </Flex>
                                </Col>
                            </Row>
                        </Flex>
                    </Flex>
                </Col>
                <Col xs={24} lg={11} xl={14} >
                    <div className="w-full h-[550px] overflow-hidden">
                        <div className="w-full h-full relative">
                            <Image
                                src="/images/models-hero.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain', 
                                    transform: 'scale(1.2)', 
                                    transformOrigin: 'center',
                                }}
                                priority
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                </Col>
            </Row>
            <div className='absolute bottom-0 w-full'>
                <Partners />
            </div>
        </div>
    )
}
