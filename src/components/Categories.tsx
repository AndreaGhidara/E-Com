import { Col, Row } from 'antd'
import Image from 'next/image'
import React from 'react'

export default function Categories() {
    return (
        <div className='container containerSpace'>
            <div className='rounded-xl bg-slate-200 py-5'>
                <h1 className='font-bold uppercase text-2xl text-center'>Browse By Dress Style</h1>
                <Row gutter={[16, 16]} className='p-2 lg:p-10'>
                    <Col xs={24} lg={10} xl={8}>
                        <div className='relative h-[290px] bg-white rounded-xl'>
                            <p className='absolute top-0 left-0 w-full p-2 z-10'>
                                Formal
                            </p>
                            <Image
                                src="/images/model-casual.png"
                                className='rounded-xl z-0 top-20 left-10'
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '150px' }}
                                alt="Picture"
                            />
                        </div>
                    </Col>
                    <Col xs={24} lg={14} xl={16}>
                        <div className='relative h-[290px] bg-white rounded-xl'>
                            <p className='absolute top-0 left-0 w-full p-2 z-10'>
                                Formal
                            </p>
                            <Image
                                src="/images/model-formal.png"
                                className='rounded-xl z-0 top-20 left-10'
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '150px' }}
                                alt="Picture"
                            />
                        </div>
                    </Col>
                    <Col xs={24} lg={14} xl={16}>
                        <div className='relative h-[290px] bg-white rounded-xl'>
                            <p className='absolute top-0 left-0 w-full p-2 z-10'>
                                Party
                            </p>
                            <Image
                                src="/images/model-party.png"
                                className='rounded-xl z-0 top-20 left-10'
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '150px' }}
                                alt="Picture"
                            />
                        </div>
                    </Col>
                    <Col xs={24} lg={10} xl={8}>
                        <div className='relative h-[290px] bg-white rounded-xl'>
                            <p className='absolute top-0 left-0 w-full p-2 z-10'>
                                Gym
                            </p>
                            <Image
                                src="/images/model-gym.png"
                                className='rounded-xl z-0 top-20 left-10'
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '150px' }}
                                alt="Picture"
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </div >
    )
}
