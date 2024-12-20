'use client'

import { Flex } from 'antd'
import React from 'react'
import { Rate } from "antd";

export default function UtilCard() {
    return (
        <Flex vertical justify='center' align='center'>
            <div className='max-w-full w-full h-[200px] lg:w-[240px] lg:h-[298px] xl:w-full xl:h-[298px] bg-blue-400 rounded-xl'>

            </div>
            <Flex vertical gap={3} className='pt-3 w-full'>
                <h3 className='text-sm font-bold'>T-SHIRT WITH TAPE DETAILS</h3>
                <div>
                    <Rate style={{ fontSize: 15 }} disabled defaultValue={2} />
                </div>
                <p className='text-bold'>$320</p>
            </Flex>
        </Flex>
    )
}
