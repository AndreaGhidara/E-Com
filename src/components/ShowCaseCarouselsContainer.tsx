import { Divider, Flex } from "antd";
import { Button } from "antd";
import { EmblaOptionsType } from 'embla-carousel'
import ShowCaseCarousel from "./carousels/ShowCaseCarousel";
import { getNewArivals, getTopSelling } from "@/actions/products/productAction";

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


export default async function ShowCaseCarouselsContainer() {

    const OPTIONS: EmblaOptionsType = { slidesToScroll: 'auto' }
    const newArivals: ClothingItem[] = await getNewArivals() as ClothingItem[];
    const topSelling: ClothingItem[] = await getTopSelling() as ClothingItem[];

    return (
        <Flex className="container containerSpace py-10" gap="middle" vertical>
            <div className="flex justify-center items-center">
                <h1 className="text-3xl font-bold">
                    NEW ARRIVALS
                </h1>
            </div>
            <div>
                <ShowCaseCarousel slides={newArivals} options={OPTIONS} />
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
                <ShowCaseCarousel slides={topSelling} options={OPTIONS} />
            </div>
            <Flex justify="center">
                <Button className=" w-32 " color="default" variant="outlined" shape="round">
                    View All
                </Button>
            </Flex>
        </Flex>

    )
}
