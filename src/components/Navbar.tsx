import { MenuOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Flex } from "antd";

const navStyle: React.CSSProperties = {
    width: '83%',
    height: 40,
    margin: 'auto',
    fontWeight: 800
};

const iconStyle: React.CSSProperties = {
    fontSize: '18px',
};

export default function Navbar() {
    return (
        <nav>
            <Flex style={navStyle} justify="space-between" align="center">
                <Flex gap="small">
                    <MenuOutlined style={iconStyle} />
                    <h2 className="uppercase ">SHOP.CO</h2>
                </Flex>
                <Flex gap="small">
                    <SearchOutlined style={iconStyle} />
                    <ShoppingCartOutlined style={iconStyle} />
                    <UserOutlined style={iconStyle} />
                </Flex>
            </Flex>
        </nav>
    )
}
