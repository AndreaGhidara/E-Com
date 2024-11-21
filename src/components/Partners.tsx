import { Flex } from 'antd'
import React from 'react'

const partnersAffiliate = ['Versace', 'Zara', 'Gucci', 'Prada', 'Calvin Klain']

export default function Partners() {
    return (
        <div className='bg-black text-white py-10'>
            <Flex wrap justify='space-around' align='center' className='container containerSpace py-5' gap="small">
                {partnersAffiliate.map((partner, index) => (
                    <div className='text-[20px]' key={index}>
                        {partner}
                    </div>
                ))}
            </Flex>
        </div>
    )
}
