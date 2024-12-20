import { SearchOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";

export default function Search() {
    return (
        <div className="w-full">
            <div className="hidden lg:block">
                <Flex gap="small" align="center" className="p-2 bg-gray-300 rounded-full">
                    <SearchOutlined style={{ fontSize: '19px', color: 'gray' }} />
                    <input type="text" className="w-full h-6 bg-transparent focus:outline-none" placeholder="Search for products..." />
                </Flex>
            </div>
            <div className="lg:hidden flex justify-end">
                <Button style={{ border: 'none', boxShadow: 'none' }} icon={<SearchOutlined />} />
            </div>
        </div>
    )
}
