'use client';

import { Button } from 'antd';
import { useUser } from '@auth0/nextjs-auth0/client';
import UserMenu from './UserMenu';
import { UserOutlined } from '@ant-design/icons';

export default function UserAuth() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <p>Loading...</p>;

    if (error) return <div>{error.message}</div>;

    if (user) {
        return <UserMenu />;
    }

    return (
        <a href="/api/auth/login">
            <Button style={{ border: 'none', boxShadow: 'none' }} >
                <UserOutlined />
            </Button>
        </a>
    );
}
