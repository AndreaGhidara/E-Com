import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import UserAuth from "./UserAuth";
import Nav from "./Nav";
import Search from "./Search";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="container containerSpace mx-auto border-b-2">
            <Flex align="center" >
                <Flex gap="small" align="center">
                    <div className="lg:hidden flex align-center">
                        <Button style={{ border: 'none' }} icon={<MenuOutlined />} />
                    </div>
                    <Link href="/">
                        <h2 className="uppercase text-xl xl:text-2xl text-black">SHOP.CO</h2>
                    </Link>
                </Flex>

                <Flex className="w-full grow" gap="small" justify="end" align="center">
                    <Nav />
                    <Search />
                    <Link href="/cart">
                        <Button style={{ border: 'none', boxShadow: 'none' }} icon={<ShoppingCartOutlined />} />
                    </Link>
                    <UserAuth />
                </Flex>
            </Flex>
        </nav>
    )
}
