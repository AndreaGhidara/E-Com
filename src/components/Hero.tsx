import { Button, Flex } from 'antd'
import React from 'react'

const heroStyle: React.CSSProperties = {
    width: '83%',
    margin: 'auto',
    padding: '20px 0px',
}

export default function Hero() {
    return (
        <div className='bg-[#F2F0F1]'>
            <Flex style={heroStyle} vertical gap="small">
                <h1 className='uppercase text-3xl font-extrabold'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className='text-xs font-extralight'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <Button color="default" variant="solid">
                    Shop Now
                </Button>
                <div className='grid grid-cols-2 gap-3'>
                    <Flex vertical align='start' justify='center' className='border-r-2 border-slate-200'>
                        <h6 className='font-bold text-xl'>200+</h6>
                        <p className='text-xs'>International Brands</p>
                    </Flex>
                    <Flex vertical align='start' justify='center'>
                        <h6 className='font-bold text-xl'>2,000+</h6>
                        <p className='text-xs'>High-Quality Products</p>
                    </Flex>
                    <Flex vertical justify='center' align='center' className='col-span-2'>
                        <h6 className='font-bold text-xl'>30,000+</h6>
                        <p className='text-xs'>Happy Customers</p>
                    </Flex>
                </div>
            </Flex>
            <Flex>
                <div className='w-full h-[calc(100vh-50vh)] bg-blue-400'>

                </div>
            </Flex>
        </div>
    )
}
