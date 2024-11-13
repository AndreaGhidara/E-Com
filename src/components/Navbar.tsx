import { MenuOutlined, SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import UserAuth from "./UserAuth";

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
                <Flex gap="small" align="center">
                    
                    <Button shape="circle">
                        <MenuOutlined style={iconStyle} />
                    </Button>
                    <h2 className="uppercase ">SHOP.CO</h2>
                </Flex>
                <Flex gap="small">
                    <Button shape="circle">
                        <SearchOutlined style={iconStyle} />
                    </Button>
                    <Button shape="circle">
                        <ShoppingCartOutlined style={iconStyle} />
                    </Button>
                    <UserAuth />
                    
                </Flex>
            </Flex>
        </nav>
    )
}
