import { FacebookOutlined, GithubOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons'
import { Button, Col, Divider, Flex, Row } from 'antd'
import React from 'react'

export default function FooterContent() {
    return (
        <section className='container containerSpace mx-auto '>
            <Row gutter={[16, 16]}>
                <Col xs={24} md={6}>
                    <Flex vertical gap={10}>
                        <h1 className='text-2xl'>Shop.co</h1>
                        <p className='text-xs font-[Satoshi] md:max-w-48 text-wrap'>We have clothes that suits your style and which you’re proud to wear. From women to men</p>
                        <Flex gap={10}>
                            <Button color="default" shape="circle" icon={<TwitterOutlined />} />
                            <Button color="default" shape="circle" icon={<FacebookOutlined />} />
                            <Button color="default" shape="circle" icon={<InstagramOutlined />} />
                            <Button color="default" shape="circle" icon={<GithubOutlined />} />
                        </Flex>
                    </Flex>
                </Col>
                <Col xs={24} md={18}>
                    <Row className='w-full' justify={"space-between"}>
                        <Col xs={12} md={6} lg={4} xl={5}>
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
                        <Col xs={12} md={6} lg={4} xl={5}>
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
                        <Col xs={12} md={6} lg={4} xl={5}>
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
                        <Col xs={12} md={6} lg={4} xl={5}>
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
