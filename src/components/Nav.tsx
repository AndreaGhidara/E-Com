'use client'

import { Flex } from "antd";
import Link from "next/link";
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

const items: MenuProps['items'] = [
    {
        label: <a href="https://www.antgroup.com">1st menu item</a>,
        key: '0',
    },
    {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: '3rd menu item',
        key: '3',
    },
];

export default function Nav() {
    return (
        <Flex className="w-full">
            <ul className="w-full hidden lg:flex lg:justify-around items-center ">
                <li>
                    <Dropdown menu={{ items }} trigger={['click']}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space className="text-gray-500">
                                Shop
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </li>
                <li>
                    <Link className="text-gray-500" href="/">
                        On Sale
                    </Link>
                </li>
                <li>
                    <Link className="text-gray-500" href="/">
                        New Arrivals
                    </Link>
                </li>
                <li>
                    <Link className="text-gray-500" href="/">
                        Brends
                    </Link>
                </li>
            </ul>
        </Flex>
    )
}
