'use client'

import { Flex } from "antd";
import { Col, Row } from 'antd';
import { Button } from "antd";
import { Card } from 'antd';
import UtilCard from "./utils/UtilCard";
const { Meta } = Card;
import useEmblaCarousel from 'embla-carousel-react'


const styleShowCase: React.CSSProperties = {
    width: '83%',
    margin: 'auto',
    padding: '20px 0px',
};

export default function ShowCase() {

    const [emblaRef] = useEmblaCarousel()


    return (
        <Flex style={styleShowCase} gap="middle" vertical>
            <div className="flex justify-center items-center">
                <h1 className="text-3xl font-bold">
                    NEW ARRIVALS
                </h1>
            </div>
            <Row justify={"center"}>
                <Col span={6}>
                    <UtilCard />
                </Col>
                <Col span={6}>
                    <UtilCard />
                </Col>
                <Col span={6}>
                    <UtilCard />
                </Col>
                <Col span={6}>
                    <UtilCard />
                </Col>
            </Row>
            <Flex justify="center">
                <Button className=" w-32 " color="default" variant="outlined">
                    View All
                </Button>
            </Flex>
        </Flex>
        
    )
}
