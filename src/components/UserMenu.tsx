'use client'

import { CloseOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, MenuProps, Space, Spin } from "antd";
import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0/client';


// export interface UserProfile {
//     email: string;
//     email_verified: boolean;
//     family_name: string;
//     given_name: string;
//     name: string;
//     nickname: string;
//     picture: string;
//     sid: string;
//     sub: string;
//     updated_at: string;
// }

export default function UserMenu() {

    const { user, error, isLoading } = useUser();
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: user ? user.name : 'User',
            disabled: true,
        },
        {
            type: 'divider',
        },
        {
            key: '2',
            label: (
                <Link href="#">
                    Profile
                </Link>
            ),
            icon: <UserOutlined />
        },
        {
            key: '3',
            label: (
                <Button>
                    Setting
                </Button>
            ),
            icon: <SettingOutlined />,
        },
        {
            type: 'divider',
        },
        {
            key: '4',
            label: (
                <Link href="/api/auth/logout">
                    Logout
                </Link>
            ),
            icon: <CloseOutlined />,
        }
    ];

    if (error) return <div>{error.message}</div>;

    if (isLoading) return (
        <Space>
            <Spin />
        </Space>
    );

    return (
        <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    {user && user.picture ? <Avatar src={user.picture} /> : <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />}
                </Space>
            </a>
        </Dropdown>
    )
}
