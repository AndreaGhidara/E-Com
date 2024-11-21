import { Col, Divider, Flex, Row } from 'antd'
import React from 'react'

export default function Footer() {
    return (
        <section className='container containerSpace pb-10'>
            <Row justify="space-between" align="middle" gutter={[16, 16]}  >
                <Col xs={24} sm={4} md={6} lg={4} xl={4} className='flex flex-col justify-start items-start'>
                    <h1 className='text-3xl'>Shop.co</h1>
                    <p className='text-xs font-[Satoshi]'>We have clothes that suits your style and which you’re proud to wear. From women to men</p>
                </Col>
                <Col xs={12} lg={4} xl={5}>
                    <Flex vertical className='font-[Satoshi]'>
                        <h3 className='font-bold pb-2'>Company</h3>
                        <ul>
                            <li>About</li>
                            <li>Features</li>
                            <li>Works</li>
                            <li>Carrer</li>
                        </ul>
                    </Flex>
                </Col>
                <Col xs={12} lg={4} xl={5}>
                    <Flex vertical className='font-[Satoshi]'>
                        <h3 className='font-bold pb-2'>Help</h3>
                        <ul>
                            <li>About</li>
                            <li>Features</li>
                            <li>Works</li>
                            <li>Carrer</li>
                        </ul>
                    </Flex>
                </Col>
                <Col xs={12} lg={4} xl={5}>
                    <Flex vertical className='font-[Satoshi]'>
                        <h3 className='font-bold pb-2'>FAQ</h3>
                        <ul>
                            <li>About</li>
                            <li>Features</li>
                            <li>Works</li>
                            <li>Carrer</li>
                        </ul>
                    </Flex>
                </Col>
                <Col xs={12} lg={4} xl={5}>
                    <Flex vertical className='font-[Satoshi]'>
                        <h3 className='font-bold pb-2'>Resources</h3>
                        <ul>
                            <li>About</li>
                            <li>Features</li>
                            <li>Works</li>
                            <li>Carrer</li>
                        </ul>
                    </Flex>
                </Col>
            </Row>
            <Divider />
            <Flex justify="space-between" align="middle" className='text-xs' >
                <p>Copyright © 2023 Shop.co</p>
                <p>card</p>
            </Flex>
        </section>
    )
}
