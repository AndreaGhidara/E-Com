import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Col, Flex, Row } from "antd";
import UserAuth from "./UserAuth";
import Nav from "./Nav";
import Search from "./Search";


const iconStyle: React.CSSProperties = {
    fontSize: '18px',
};

export default function Navbar() {
    return (
        <nav className="container containerSpace">
            <Row  align="middle">
                <Col xs={12} lg={3} >
                    <Flex className="w-full h-full" gap="small" align="center">
                        <div className="lg:hidden flex align-center">
                            <Button shape="circle">
                                <MenuOutlined style={iconStyle} />
                            </Button>
                        </div>
                        <h2 className="uppercase text-xl xl:text-3xl">SHOP.CO</h2>
                    </Flex>
                </Col>

                <Col xs={12} lg={21} >
                    <Flex className="w-full" gap="small" justify="end" align="center">
                        <Nav />
                        <Search />
                        <Button shape="circle">
                            <ShoppingCartOutlined style={iconStyle} />
                        </Button>
                        <UserAuth />
                    </Flex>
                </Col>
            </Row>
        </nav>
    )
}
