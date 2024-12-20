'use client'

import { RootState } from "@/stores/store";
import { RightOutlined, SlidersOutlined } from "@ant-design/icons";
import { Button, Card, Divider, Flex, Slider } from "antd";
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { setType, setPrice, setColor, setSize } from "@/stores/slice/filters/filterSlice";


const filterVoice = ['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'];

const colors = ['green', 'red', 'yellow', 'orange', 'skyblue', 'blue', 'purple', 'violet', 'white', 'black'];

const sizes = ['XX-small', 'X-small', 'Small', 'Medium', 'Large', 'X-large', 'XX-large', '3X-large', '4X-large'];



export default function FilterSide() {

    const filters = useSelector((state: RootState) => state.filter)
    const dispatch = useDispatch();

    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: <h3>Price</h3>,
            children: <div> <Slider onChange={(value) => dispatch(setPrice(value))} min={0} max={500} defaultValue={[0, 50]} range /> </div>,
        },
        {
            key: '2',
            label: <h3>Colors</h3>,
            children: <div> <Flex wrap gap={26}>
                {colors.map((color, index) => (
                    <div key={index}>
                        <Button onClick={() => dispatch(setColor(color))} style={{ backgroundColor: color, border: filters.color === color ? '2px solid #45d645' : '' }} shape="circle"></Button>
                    </div>
                ))}
            </Flex>
            </div>,
        },
        {
            key: '3',
            label: <h3>Sizes</h3>,
            children: <div>
                <Flex wrap gap={10}>
                    {sizes.map((size, index) => (
                        <div key={index} >
                            <Button onClick={() => dispatch(setSize(size))} color="default" variant={filters.size === size ? 'solid' : 'outlined'} shape="round">{size}</Button>
                        </div>
                    ))
                    }
                </Flex >
            </div >,
        },
    ];

    const setFilter = () => {
        console.log(filters);

    }


    return (
        <div className=" bg-white">
            <Card style={{ fontFamily: 'Satoshi' }}>
                {/* Filters */}
                <Flex justify="space-between" align="center" >
                    <h3 className="font-[Satoshi] text-2xl">Filters</h3>
                    <Button disabled style={{ padding: 0 }} color="default" variant="link"> <SlidersOutlined style={{ fontSize: 20 }} /> </Button>
                </Flex>
                <Divider />
                {/* Filter Voice */}
                {filterVoice.map((voice, index) => (
                    <Button
                        onClick={() => dispatch(setType(voice))}
                        key={index}
                        color="default"
                        type="text"
                        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, padding: 0, color: filters.type === voice ? 'green' : 'black' }}>
                        <p>{voice}</p>
                        <span> <RightOutlined style={{ color: filters.type === voice ? 'green' : 'black' }} /> </span>
                    </Button>
                ))}
                <Divider />
                <Collapse
                    defaultActiveKey={['1']}
                    expandIconPosition={'end'}
                    bordered={false}
                    style={{ border: 'none', width: '100%', backgroundColor: 'transparent' }}
                    items={items}
                />
                <Button onClick={() => setFilter()} shape="round" color="default" variant="solid" block>Apply Filters</Button>
            </Card>

        </div>
    )
}
