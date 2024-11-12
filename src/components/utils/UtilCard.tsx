'use client'

import { Card, Flex } from 'antd'
const { Meta } = Card;
import React from 'react'
import { Rate } from "antd";

export default function UtilCard() {
    return (
        <Flex vertical justify='center' align='center'>
            <div className='w-[150px] h-[150px] bg-blue-400 rounded-xl'>

            </div>
            <Flex vertical gap={3} className='pt-3'>
                <h3 className='text-[10px] font-bold'>T-SHIRT WITH TAPE DETAILS</h3>
                <div>
                    <Rate style={{ fontSize: 15 }} disabled defaultValue={2} />
                </div>
                <p>$320</p>
            </Flex>
        </Flex>
    )
}
