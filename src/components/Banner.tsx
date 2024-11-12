import Link from 'next/link'
import React from 'react'
import { Flex } from "antd";


const baseStyle: React.CSSProperties = {
    width: '83%',
    height: 38,
    margin: 'auto',
};

export default function Banner() {
    return (
        <div className='bg-black text-white'>
            <Flex style={baseStyle} justify='space-between' align='center'>
                <div>

                </div>
                <p className='text-[8px] sm:text-sm'>
                    Sign up and get 20% off to your first order. <Link className=' text-[10px] sm:text-base underline' href="#"> Sign Up Now </Link>
                </p>
                <p className='text-[10px] sm:text-sm'>
                    X
                </p>
            </Flex>
        </div>
    )
}
