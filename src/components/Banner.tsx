'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { Col, Flex, Row } from "antd";
import { CloseOutlined } from '@ant-design/icons';

export default function Banner() {

    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) {
        return (
            <div>

            </div>
        )
    }

    return (
        <div className=' bg-black text-white lg:py-1 leading-5'>
            <Row className='container containerSpace py-2'> 
                <Col xs={0} lg={8}>
                    <div className='hidden xl:block'>

                    </div>
                </Col>
                <Col xs={24} lg={8}>
                    <Flex className='h-full' justify='center' align='center'>
                        <p className='text-[9px] sm:text-sm font-[Satoshi] '>
                            Sign up and get 20% off to your first order. <Link className='underline text-white ' href="#"> Sign Up Now </Link>
                        </p>
                    </Flex>
                </Col>
                <Col xs={0} lg={8}>
                    <Flex className='hidden xl:flex justify-end'>
                        <div className='text-[10px] sm:text-sm text-white bg-transparent cursor-pointer' onClick={() => setIsVisible(false)}>
                            <CloseOutlined />
                        </div>
                    </Flex>
                </Col>
            </Row>
        </div>
    )
}
