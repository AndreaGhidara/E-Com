import { Button } from 'antd'
import Link from 'next/link'
import { getSession } from '@auth0/nextjs-auth0'
import UserMenu from './UserMenu'


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
            <Button>
                <Link href="/api/auth/login">
                    Login
                </Link>
            </Button>
        </div>
    )
}
