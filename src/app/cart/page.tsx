import BreadcrumbTracking from '@/components/utils/BreadcrumbTracking'
import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Card, Col, Divider, Flex, Row } from 'antd'
import React from 'react'

export default function Cart() {
    return (
        <section className='container containerSpace'>
            <div>
                <BreadcrumbTracking />
            </div>
            <h1 className='text-2xl py-3'>Your Cart</h1>
            <div>
                <Row gutter={[10, 10]}>
                    <Col xs={24} lg={16}>
                        <Card size="small" style={{ padding: 0 }}>
                            <Flex gap={5}>
                                <div className='w-[80px] h-[80px] bg-cyan-500 rounded-lg'>

                                </div>
                                <div className='w-full'>
                                    <div className='w-full flex justify-between'>
                                        <h2 className='text-sm'>Nome maglia</h2>
                                        <DeleteOutlined />
                                    </div>
                                    <p className='text-xs'>size : <span>Large</span></p>
                                    <p className='text-xs'>color : <span>White</span></p>
                                    <div className='flex justify-between'>
                                        <p className='text-xl'>$145</p>
                                        <div className='flex gap-3 bg-slate-400 py-1 px-2 rounded-full'>
                                            <span><MinusOutlined /></span>
                                            <span>1</span>
                                            <span><PlusOutlined /></span>
                                        </div>
                                    </div>
                                </div>
                            </Flex>
                            <Divider />
                            <Flex gap={5}>
                                <div className='w-[80px] h-[80px] bg-cyan-500 rounded-lg'>

                                </div>
                                <div className='w-full'>
                                    <div className='w-full flex justify-between'>
                                        <h2 className='text-sm'>Nome maglia</h2>
                                        <DeleteOutlined />
                                    </div>
                                    <p className='text-xs'>size : <span>Large</span></p>
                                    <p className='text-xs'>color : <span>White</span></p>
                                    <div className='flex justify-between'>
                                        <p className='text-xl'>$145</p>
                                        <div className='flex gap-3 bg-slate-400 py-1 px-2 rounded-full'>
                                            <span><MinusOutlined /></span>
                                            <span>1</span>
                                            <span><PlusOutlined /></span>
                                        </div>
                                    </div>
                                </div>
                            </Flex>
                        </Card>
                    </Col>
                    <Col xs={24} lg={8}>
                        <Card size='small'>
                            <Flex vertical gap={5}>
                                <h2>Order Summary</h2>
                                <p className='flex justify-between'>Subtotal  <span>$145</span></p>
                                <p className='flex justify-between'>Discount (-20%)  <span>$145</span></p>
                                <p className='flex justify-between'>Delivery Fee  <span>$145</span></p>
                                <Divider />
                                <p className='flex justify-between'>Total  <span>$145</span></p>
                            </Flex>
                            <Button className='w-full mt-3' color="default" variant="solid" shape="round">
                                Go to Checkout
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        </section>
    )
}
