import CardProduct from "@/components/CardProduct";
import Counter from "@/components/Counter";
import BreadcrumbTracking from "@/components/utils/BreadcrumbTracking";
import { Button, Divider, Rate, Tabs } from "antd";
import type { TabsProps } from 'antd';
import Image from "next/image";

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Product Details',
        children: 'Content of Tab Pane 1',
    },
    {
        key: '2',
        label: 'Rating & Reviews',
        children: 'Content of Tab Pane 2',
    },
    {
        key: '3',
        label: 'FAQs',
        children: 'Content of Tab Pane 3',
    },
];

export default function page() {
    return (
        <div className="container containerSpace mx-auto">
            <div className="pb-2">
                <BreadcrumbTracking />
            </div>
            {/* PRODOTTO */}
            <div className="flex flex-col md:flex-row md:gap-5">
                <section className="w-full md:w-1/2 flex flex-col md:flex-row gap-2 md:h-[50vh]">
                    <div className="md:w-2/3 h-full md:order-2">
                        <picture className="w-full h-full rounded-xl">
                            <Image
                                src="/images/t-shirt.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="rounded-2xl"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                alt="Picture"
                            />
                        </picture>
                    </div>
                    <div className="md:w-1/3 grid grid-cols-3 h-[130px] md:flex md:flex-col md:h-full gap-3 items-center md:order-1 ">
                        <div className="w-full h-full md:h-1/3 rounded-xl relative">
                            <picture>
                                <Image
                                    src="/images/t-shirt.png"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="rounded-2xl absolute bg-[#F0EEED]"
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                    alt="Picture"
                                />
                            </picture>
                        </div>
                        <div className="w-full h-full md:h-1/3 rounded-xl relative">
                            <picture>
                                <Image
                                    src="/images/t-shirt.png"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="rounded-2xl absolute bg-[#F0EEED]"
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                    alt="Picture"
                                />
                            </picture>
                        </div>
                        <div className="w-full h-full md:h-1/3 rounded-xl relative">
                            <picture >
                                <Image
                                    src="/images/t-shirt.png"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="rounded-2xl absolute bg-[#F0EEED]"
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                    alt="Picture"
                                />
                            </picture>
                        </div>
                    </div>
                </section>
                <section className="md:flex-1">
                    <h2 className="text-2xl font-bold text-balance ">One Life Graphic T-shirt</h2>
                    <div className="py-2">
                        <Rate style={{ fontSize: 15 }} disabled defaultValue={5} />
                    </div>
                    <p className="font-bold text-xl">
                        $260 <span className="text-gray-400 line-through">$320</span> <span className="text-sm font-normal text-red-500 bg-red-300 rounded-full py-1 px-2">-40%</span>
                    </p>
                    <p className="text-xs pt-2">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                    <Divider />
                    <div>
                        <p>selcect color</p>
                        <div>
                            COLORS
                        </div>
                    </div>
                    <Divider />
                    <div className="flex gap-3">
                        <Counter />
                        <Button className="w-full" color="default" variant="solid" shape="round">add to cart</Button>
                    </div>
                    <div>
                        <Tabs size="middle" defaultActiveKey="1" items={items} />
                    </div>
                </section>
            </div>
            {/* DETTAGLI PRODOTTO + INFO VARIE */}
            <section>
                <h2 className="text-3xl text-center text-balance">You might also like</h2>
                <div>
                    CAROSELLO PRODOTTI SIMILI
                </div>
            </section>
        </div>
    )
}
