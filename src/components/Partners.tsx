import { Flex } from 'antd'
import React from 'react'

const partnersAffiliate = ['Versace', 'Zara', 'Gucci', 'Prada', 'Calvin Klain']

const partnersStyle: React.CSSProperties = {
    width: '83%',
    margin: 'auto',
    padding: '20px 0px',
}


export default function Partners() {
    return (
        <div className='bg-black text-white'>
            <Flex wrap align='center' style={partnersStyle} gap="small">
                {partnersAffiliate.map((partner, index) => (
                    <div key={index}>
                        {partner}
                    </div>
                ))}
            </Flex>
        </div>
    )
}
