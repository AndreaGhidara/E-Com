import { Button } from 'antd'
import Link from 'next/link'
import { getSession } from '@auth0/nextjs-auth0'
import UserMenu from './UserMenu'
import { UserOutlined } from '@ant-design/icons'


export default async function UserAuth() {

    const session = await getSession()
    const user = session?.user

    if (user) {
        return (
            <>
                <UserMenu />
            </>
        )
    }

    return (
        <div>
            <Button shape="circle">
                <Link href="/api/auth/login">
                    <UserOutlined />
                </Link>
            </Button>
        </div>
    )
}
