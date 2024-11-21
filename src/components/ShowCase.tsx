'use client'

import { Divider, Flex } from "antd";
import { Button } from "antd";
import { EmblaOptionsType } from 'embla-carousel'
import ShowCaseCarousel from "./carousels/ShowCaseCarousel";
import NewArivalsData from '@/data/products.json';
import TopSellingData from '@/data/topSelling.json';

interface ClothingItem {
    id: string;
    name: string;
    typeClothing: string;
    colors: string;
    price: string;
    size: string;
    img: string;
    review: number;
}

export default function ShowCase() {


    const OPTIONS: EmblaOptionsType = { slidesToScroll: 'auto' }
    const NEWARIVALS: ClothingItem[] = NewArivalsData;
    const TOPSELLING: ClothingItem[] = TopSellingData;

    return (
        <Flex className="container containerSpace py-10" gap="middle" vertical>
            <div className="flex justify-center items-center">
                <h1 className="text-3xl font-bold">
                    NEW ARRIVALS
                </h1>
            </div>
            <div>
                <ShowCaseCarousel slides={NEWARIVALS} options={OPTIONS} />
            </div>
            <Flex justify="center">
                <Button className=" w-32 " color="default" variant="outlined" shape="round">
                    View All
                </Button>
            </Flex>
            <Divider />
            <div className="flex justify-center items-center">
                <h1 className="text-3xl font-bold">
                    TOP SELLING
                </h1>
            </div>
            <div>
                <ShowCaseCarousel slides={TOPSELLING} options={OPTIONS} />
            </div>
            <Flex justify="center">
                <Button className=" w-32 " color="default" variant="outlined" shape="round">
                    View All
                </Button>
            </Flex>
        </Flex>

    )
}
